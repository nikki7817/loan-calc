// src/components/ErrorPage.js
import { Box, Typography, Button } from "@mui/material";

const ErrorPage = ({ error, resetError }) => {
	return (
		<Box sx={{ textAlign: "center", my: 8 }}>
			<Typography variant="h3" component="h1" gutterBottom>
				Something went wrong
			</Typography>
			<Typography variant="body1" paragraph>
				{error || "An unexpected error occurred"}
			</Typography>
			<Button variant="contained" color="primary" onClick={resetError}>
				Try Again
			</Button>
		</Box>
	);
};

export default ErrorPage;
