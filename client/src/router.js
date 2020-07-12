import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "./store/auth.store";

import { RegisterPage } from "./pages/register.page";
import { LoginPage } from "./pages/login.page";
import { ConfirmPage } from "./pages/confirm.page";

import { HomePage } from "./pages/home.page";

export const RouterView = () => {
	const auth = useContext(AuthContext);
	let routes;
	if (!auth.loggedIn) {
		routes = (
			<Switch>
				<Route path="/register" component={RegisterPage} exact={true} />
				<Route path="/login" component={LoginPage} exact={true} />
				<Route path="/confirm" component={ConfirmPage} exact={true} />
				<Redirect path="/" to="/login" exact={true} />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
			</Switch>
		);
	}

	return <React.Fragment>{routes}</React.Fragment>;
};
