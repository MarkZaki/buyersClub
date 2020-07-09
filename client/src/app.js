import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import { NavComponent } from "./components/layout/nav.component";
import { RouterView } from "./router";

export const App = () => (
	<BrowserRouter>
		<NavComponent />
		<Container>
			<RouterView />
		</Container>
	</BrowserRouter>
);
