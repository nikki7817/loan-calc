import { useState } from "react";
import { Route, Routes } from "react-router-dom"; // Remove HashRouter import
import LoanCalculator from "./components/LoanCalculator";
import ExchangeRates from "./components/ExchangeRates";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import { CssBaseline, Container } from "@mui/material"; // Re-add Container import

function App() {
	const [errorState, setErrorState] = useState(null);

	if (errorState) {
		return (
			<Container>
				<CssBaseline />
				<ErrorPage error={errorState} resetError={() => setErrorState(null)} />
			</Container>
		);
	}

	return (
		<>
			<CssBaseline />
			<div className="App">
				<Header
					currentPage={window.location.hash.replace("#", "") || "/"}
					onPageChange={(page) => {
						// Navigate programmatically if needed
						window.location.hash = page === "home" ? "/" : `/${page}`;
					}}
				/>
				<Container>
					<Routes>
						<Route path="/" element={<LoanCalculator />} />
						<Route path="/exchange" element={<ExchangeRates />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Container>
			</div>
		</>
	);
}

export default App;
