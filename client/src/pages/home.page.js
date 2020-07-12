import React, { useContext } from "react";
import { AuthContext } from "../store/auth.store";

export const HomePage = () => {
	const auth = useContext(AuthContext);
	return (
		<div>
			<p>Hello {auth.user.name}</p>
			<p>Email is: {auth.user.email}</p>
		</div>
	);
};
