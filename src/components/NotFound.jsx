// src/components/NotFound.js
import { Box, Typography, Button } from "@mui/material";

const NotFound = () => {
	return (
		<Box sx={{ textAlign: "center", my: 8 }}>
			<Typography variant="h1" component="h1" gutterBottom>
				404
			</Typography>
			<Typography variant="h4" component="p" gutterBottom>
				Page Not Found
			</Typography>
			<Typography variant="body1" paragraph>
				The page you are looking for doesn't exist or has been moved.
			</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => (window.location.href = "/")}
			>
				Go to Home
			</Button>
		</Box>
	);
};

export default NotFound;
