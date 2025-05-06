import { useState } from "react";
import {
	Typography,
	TextField,
	Button,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
} from "@mui/material";
import { useEmiCalculator } from "../hooks/useEmiCalculator";
import { useExchangeRates } from "../hooks/useExchangeRates";

const LoanCalculator = ({ onError }) => {
	const [loanAmount, setLoanAmount] = useState(100000);
	const [interestRate, setInterestRate] = useState(8.5);
	const [loanTerm, setLoanTerm] = useState(5);
	const [emi, setEmi] = useState(0);
	const [currency, setCurrency] = useState("USD");
	const [amortizationSchedule, setAmortizationSchedule] = useState([]);
	const [calculated, setCalculated] = useState(false);

	const { calculateEmi, generateAmortizationSchedule } = useEmiCalculator();
	const { exchangeRates, loading } = useExchangeRates();

	const calculateLoan = () => {
		try {
			const monthlyEmi = calculateEmi(loanAmount, interestRate, loanTerm);
			setEmi(monthlyEmi);
			const schedule = generateAmortizationSchedule(
				loanAmount,
				interestRate,
				loanTerm
			);
			setAmortizationSchedule(schedule);
			setCalculated(true);
		} catch (error) {
			onError("Error calculating loan: " + error.message);
		}
	};

	const handleResetTable = () => {
		setAmortizationSchedule([]);
		setEmi(0);
		setCalculated(false);
	};

	const convertCurrency = (amount) => {
		if (loading || !exchangeRates || !exchangeRates[currency]) return amount;
		return (amount * exchangeRates[currency]).toFixed(2);
	};

	return (
		<Box>
			<Typography variant="h4" component="h1" gutterBottom>
				Loan Calculator Dashboard
			</Typography>

			<Grid container spacing={3} sx={{ mb: 3 }}>
				<Grid item xs={12} sm={4}>
					<TextField
						label="Loan Amount"
						type="number"
						fullWidth
						value={loanAmount}
						onChange={(e) => setLoanAmount(e.target.value)}
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						label="Interest Rate (%)"
						type="number"
						fullWidth
						value={interestRate}
						onChange={(e) => setInterestRate(e.target.value)}
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						label="Term (Years)"
						type="number"
						fullWidth
						value={loanTerm}
						onChange={(e) => setLoanTerm(e.target.value)}
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
			</Grid>

			<Button
				variant="contained"
				color="primary"
				onClick={calculateLoan}
				sx={{ mb: 3 }}
			>
				CALCULATE
			</Button>

			{calculated && (
				<>
					<Typography variant="h6" gutterBottom>
						Monthly EMI: {currency} {convertCurrency(emi.toFixed(2))}
					</Typography>

					<Grid container spacing={3} sx={{ mb: 3 }}>
						<Grid item xs={6} sm={3}>
							<FormControl fullWidth>
								<InputLabel id="currency-label">Currency</InputLabel>
								<Select
									labelId="currency-label"
									value={currency}
									label="Currency"
									onChange={(e) => setCurrency(e.target.value)}
								>
									<MenuItem value="USD">USD</MenuItem>
									<MenuItem value="EUR">EUR</MenuItem>
									<MenuItem value="GBP">GBP</MenuItem>
									<MenuItem value="JPY">JPY</MenuItem>
									<MenuItem value="INR">INR</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid
							item
							xs={6}
							sm={3}
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								alignItems: "center",
								ml: "auto",
							}}
						>
							<Button
								variant="outlined"
								color="secondary"
								onClick={handleResetTable}
							>
								RESET TABLE
							</Button>
						</Grid>
					</Grid>

					{amortizationSchedule.length > 0 && (
						<Paper sx={{ width: "100%", overflow: "hidden" }}>
							<Typography variant="h6" gutterBottom sx={{ p: 2 }}>
								Amortization Schedule ({currency})
							</Typography>
							<TableContainer sx={{ maxHeight: 440 }}>
								<Table stickyHeader aria-label="amortization table">
									<TableHead>
										<TableRow>
											<TableCell>Month</TableCell>
											<TableCell>Principal</TableCell>
											<TableCell>Interest</TableCell>
											<TableCell>Remaining Balance</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{amortizationSchedule.map((row) => (
											<TableRow key={row.month}>
												<TableCell>{row.month}</TableCell>
												<TableCell>
													{currency} {convertCurrency(row.principalPaid)}
												</TableCell>
												<TableCell>
													{currency} {convertCurrency(row.interest)}
												</TableCell>
												<TableCell>
													{currency} {convertCurrency(row.balance)}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					)}
				</>
			)}
		</Box>
	);
};

export default LoanCalculator;
