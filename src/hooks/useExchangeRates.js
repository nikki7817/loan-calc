import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to fetch live exchange rates
export const useExchangeRates = () => {
	const [exchangeRates, setExchangeRates] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [baseCurrency, setBaseCurrency] = useState("USD");

	// Get API key from environment variable
	const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

	useEffect(() => {
		// Function to fetch exchange rates from API
		const fetchRates = async () => {
			try {
				setLoading(true); // Start loading

				const response = await axios.get(
					`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
				);

				// Set fetched rates into state
				setExchangeRates(response.data.conversion_rates);
				setLoading(false); // Done loading
			} catch (err) {
				// Handle errors
				setError("Failed to fetch exchange rates");
				setLoading(false);
			}
		};

		// Fetch rates when base currency or API key changes
		fetchRates();
	}, [baseCurrency, API_KEY]);

	// Return values
	return {
		exchangeRates,
		loading,
		error,
		baseCurrency,
		setBaseCurrency,
	};
};
