// src/contexts/AppContext.js
import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false); // Start in light mode

	// Create theme based on the current mode
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? "dark" : "light",
					primary: {
						main: "#3f51b5",
					},
					secondary: {
						main: "#f50057",
					},
				},
			}),
		[darkMode]
	);

	// Values we want to share across the app
	const contextValue = {
		darkMode,
		setDarkMode,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
};
