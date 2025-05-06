import { useState, useContext } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Switch,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Divider,
} from "@mui/material";
import { Menu, Sun, Moon, X } from "lucide-react";
import { AppContext } from "../contexts/AppContext";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
	color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
	textDecoration: "none",
});

const drawerLinkStyle = ({ isActive }) => ({
	color: "#000",
	fontWeight: isActive ? "bold" : "normal",
	textDecoration: "none",
	width: "100%",
});

const Header = () => {
	const { darkMode, setDarkMode } = useContext(AppContext);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2, display: { sm: "none" } }}
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>

					<Typography
						component={Link}
						to="/"
						variant="h6"
						sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
					>
						Loan Calculator
					</Typography>

					{/* Top nav buttons */}
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						<Button
							color="inherit"
							component={NavLink}
							to="/"
							style={navLinkStyle}
						>
							HOME
						</Button>
						<Button
							color="inherit"
							component={NavLink}
							to="/exchange"
							style={navLinkStyle}
						>
							EXCHANGE RATES (LIVE)
						</Button>
						<Button
							color="inherit"
							component={NavLink}
							to="/about"
							style={navLinkStyle}
						>
							ABOUT
						</Button>
						<Button
							color="inherit"
							component={NavLink}
							to="/errorpage"
							style={navLinkStyle}
						>
							ERROR PAGE
						</Button>
					</Box>

					<Switch
						checked={darkMode}
						onChange={() => setDarkMode(!darkMode)}
						color="default"
						icon={<Sun size={16} />}
						checkedIcon={<Moon size={16} />}
					/>
				</Toolbar>
			</AppBar>

			<Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
				<Box sx={{ width: 250 }} role="presentation">
					<List>
						<ListItem sx={{ justifyContent: "flex-end" }}>
							<IconButton onClick={handleDrawerToggle}>
								<X />
							</IconButton>
						</ListItem>
						<Divider />

						<ListItem
							button
							component={NavLink}
							to="/"
							style={drawerLinkStyle}
							onClick={handleDrawerToggle}
						>
							<ListItemText primary="HOME" />
						</ListItem>
						<ListItem
							button
							component={NavLink}
							to="/exchange"
							style={drawerLinkStyle}
							onClick={handleDrawerToggle}
						>
							<ListItemText primary="EXCHANGE RATES (LIVE)" />
						</ListItem>
						<ListItem
							button
							component={NavLink}
							to="/about"
							style={drawerLinkStyle}
							onClick={handleDrawerToggle}
						>
							<ListItemText primary="ABOUT" />
						</ListItem>

						<ListItem
							button
							component={NavLink}
							to="/errorpage"
							style={drawerLinkStyle}
							onClick={handleDrawerToggle}
						>
							<ListItemText primary="ERROR PAGE" />
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default Header;
