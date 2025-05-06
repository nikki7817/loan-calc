import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LoanCalculator from "./components/LoanCalculator";
import ExchangeRates from "./components/ExchangeRates";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import { AppProvider } from "./contexts/AppContext";
import { CssBaseline } from "@mui/material";

function App() {
	const [errorState, setErrorState] = useState(null);

	if (errorState) {
		return (
			<AppProvider>
				<CssBaseline />
				<ErrorPage error={errorState} resetError={() => setErrorState(null)} />
			</AppProvider>
		);
	}

	return (
		<Router>
			<AppProvider>
				<CssBaseline />
				<div className="App">
					<Header
						currentPage={window.location.hash.replace("#", "") || "/"}
						onPageChange={(page) => {
							// Navigate programmatically if needed
							window.location.hash = page === "home" ? "/" : `/${page}`;
						}}
					/>
					<Routes>
						<Route path="/" element={<LoanCalculator />} />
						<Route path="/exchange" element={<ExchangeRates />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</AppProvider>
		</Router>
	);
}

export default App;
