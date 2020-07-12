import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import { AuthProvider } from "./store/auth.store";
import { NavComponent } from "./components/layout/nav.component";
import { RouterView } from "./router";

export const App = () => (
	<AuthProvider>
		<BrowserRouter>
			<NavComponent />
			<Container>
				<RouterView />
			</Container>
		</BrowserRouter>
	</AuthProvider>
);
