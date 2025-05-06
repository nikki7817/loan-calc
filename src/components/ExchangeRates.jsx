// src/components/ExchangeRates.js
import { useState } from "react";
import {
	Typography,
	Box,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	TablePagination,
	CircularProgress,
	Alert,
} from "@mui/material";
import { useExchangeRates } from "../hooks/useExchangeRates";

const ExchangeRates = ({ onError }) => {
	const { exchangeRates, loading, error, baseCurrency, setBaseCurrency } =
		useExchangeRates();
	const [page, setPage] = useState(0);
	const rowsPerPage = 10;

	if (loading) {
		return (
			<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return (
			<Alert severity="error" sx={{ mt: 4 }}>
				{error}
			</Alert>
		);
	}

	const currencies = Object.keys(exchangeRates || {});
	const currentRows = currencies.slice(
		page * rowsPerPage,
		page * rowsPerPage + rowsPerPage
	);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setPage(0);
	};

	return (
		<Box>
			<Typography variant="h4" component="h1" gutterBottom>
				Live Exchange Rates
			</Typography>

			<Grid container spacing={3} sx={{ mb: 3 }}>
				<Grid item xs={12} sm={4}>
					<FormControl fullWidth>
						<InputLabel id="base-currency-label">Base Currency</InputLabel>
						<Select
							labelId="base-currency-label"
							value={baseCurrency}
							label="Base Currency"
							onChange={(e) => setBaseCurrency(e.target.value)}
						>
							{currencies.map((currency) => (
								<MenuItem key={currency} value={currency}>
									{currency}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								<strong>Currency</strong>
							</TableCell>
							<TableCell>
								<strong>Exchange Rate (per 1 {baseCurrency})</strong>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{currentRows.map((currency) => (
							<TableRow key={currency}>
								<TableCell>{currency}</TableCell>
								<TableCell>{exchangeRates[currency]}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<TablePagination
					rowsPerPageOptions={[10]}
					component="div"
					count={currencies.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</TableContainer>
		</Box>
	);
};

export default ExchangeRates;
