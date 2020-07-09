import React from "react";
import { Switch, Route } from "react-router-dom";

import { RegisterPage } from "./pages/auth/register.page";
import { LoginPage } from "./pages/auth/login.page";
import { ConfirmPage } from "./pages/auth/confirm.page";

import { HomePage } from "./pages/app/home.page";

export const RouterView = () => (
	<Switch>
		<Route path="/register" component={RegisterPage} exact={true} />
		<Route path="/login" component={LoginPage} exact={true} />
		<Route path="/confirm" component={ConfirmPage} exact={true} />
		<Route path="/" component={HomePage} exact={true} />
	</Switch>
);
