import { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { AppProvider } from "./contexts/AppContext";
import Header from "./components/Header";
import LoanCalculator from "./components/LoanCalculator";
import ExchangeRates from "./components/ExchangeRates";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route from React Router

function App() {
	const [errorState, setErrorState] = useState(null);

	// If there's an error, render the ErrorPage
	if (errorState) {
		return (
			<AppProvider>
				<CssBaseline />
				<ErrorPage error={errorState} resetError={() => setErrorState(null)} />
			</AppProvider>
		);
	}

	return (
		<AppProvider>
			<CssBaseline />
			<div className="App">
				<Header />
				<Container sx={{ mt: 4, mb: 4 }}>
					{/* Define routes using React Router */}
					<Routes>
						<Route
							path="/"
							element={<LoanCalculator onError={setErrorState} />}
						/>
						<Route
							path="/exchange"
							element={<ExchangeRates onError={setErrorState} />}
						/>
						<Route path="/about" element={<About />} />
						{/* Catch-all route for 404 */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Container>
			</div>
		</AppProvider>
	);
}

export default App;
