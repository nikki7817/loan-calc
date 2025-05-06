import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./app.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/AppContext.jsx";
import { HashRouter } from "react-router-dom"; // Change this line

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter basename="/">
			<AppProvider>
				<App />
			</AppProvider>
		</HashRouter>
	</StrictMode>
);
