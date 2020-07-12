import React, { useState, createContext } from "react";
import { saveAuthData } from "../helpers/localstorage.helper";
import { needToBeParsed, isEmpty } from "../utils";

export const AuthContext = createContext();

export const AuthProvider = props => {
	const [token, setToken] = useState(localStorage.getItem("token") || null);
	const [user, setUser] = useState(
		needToBeParsed(localStorage.getItem("user")) || {}
	);

	const login = (token, user) => {
		setToken(token);
		setUser(user);
		saveAuthData({ token: token, user: user });
	};
	const register = token => {
		setToken(token);
		saveAuthData({ token: token });
	};
	const confirm = user => {
		setUser(user);
		saveAuthData({ user: user });
	};
	const logout = () => {
		setToken(null);
		setUser({});
		saveAuthData({ token: "", user: {} }, true);
	};

	return (
		<AuthContext.Provider
			value={{
				token: token,
				user: user,
				loggedIn: !!token && !isEmpty(user),
				login: login,
				register: register,
				confirm: confirm,
				logout: logout
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
