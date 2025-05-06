// src/pages/About.jsx
import {
	Box,
	Typography,
	Link,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";

const About = () => {
	return (
		<Box sx={{ p: 4 }}>
			<Typography variant="h4" gutterBottom>
				📱 About This App
			</Typography>
			<Typography paragraph>
				This <strong>Loan Calculator App</strong> is a modern, single-page React
				application built with Material UI for a clean, responsive UI. It helps
				users calculate loan EMIs (Equated Monthly Installments), provides a
				detailed amortization schedule, and supports real-time currency
				conversion using live exchange rates.
			</Typography>

			<Typography variant="h5" gutterBottom>
				🔧 Features
			</Typography>
			<List dense>
				{[
					"EMI calculation using standard financial formulas",
					"Detailed amortization schedule with monthly breakdown",
					"Real-time currency conversion with live exchange rate data",
					"Light and dark theme toggle using Material UI's theming system",
					"Fully responsive layout across all screen sizes",
					"Paginated table showing exchange rates for 160+ currencies",
					"Collapsible navigation for mobile devices",
					"Graceful error handling and 404 Not Found page",
				].map((feature, index) => (
					<ListItem key={index}>
						<ListItemText primary={feature} />
					</ListItem>
				))}
			</List>

			<Typography variant="h5" gutterBottom>
				🔣 EMI Formula
			</Typography>
			<Typography
				component="pre"
				sx={{ backgroundColor: "#f4f4f4", p: 2, borderRadius: 1 }}
			>
				EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
			</Typography>
			<Typography paragraph>
				Where:
				<ul>
					<li>
						<strong>P</strong> = Principal loan amount
					</li>
					<li>
						<strong>R</strong> = Monthly interest rate (annual rate / 12 / 100)
					</li>
					<li>
						<strong>N</strong> = Loan duration in months
					</li>
				</ul>
			</Typography>

			<Typography variant="h5" gutterBottom>
				🌍 Currency Conversion
			</Typography>
			<Typography paragraph>
				This app integrates with the <strong>ExchangeRate-API</strong> (free
				tier) to fetch up-to-date currency conversion rates. You’ll need a free
				API key to use this feature.
			</Typography>
			<Typography paragraph>
				<strong>API Example:</strong>
				<br />
				<code>https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD</code>
			</Typography>
			<Typography paragraph>
				Replace <code>YOUR_API_KEY</code> with your own key in the environment
				configuration.
			</Typography>

			<Typography variant="h5" gutterBottom>
				🛠️ Technologies Used
			</Typography>
			<List dense>
				{[
					"React (Hooks, Routing, Context API)",
					"Material UI for layout and styling",
					"Axios for API requests",
					"ExchangeRate-API for real-time currency data",
					"React Router for navigation",
				].map((tech, index) => (
					<ListItem key={index}>
						<ListItemText primary={tech} />
					</ListItem>
				))}
			</List>

			<Typography variant="h5" gutterBottom>
				💡 Development Highlights
			</Typography>
			<List dense>
				{[
					"Custom React Hooks for EMI calculation and currency data fetching",
					"Context API used for theme and currency management",
					"Modular, reusable components",
					"Responsive design with accessibility in mind",
					"Deployed version live on [your deployment link here]",
				].map((highlight, index) => (
					<ListItem key={index}>
						<ListItemText primary={highlight} />
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default About;
