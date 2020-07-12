import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Button, Alert } from "reactstrap";
import { AuthContext } from "../store/auth.store";

import { BcInput } from "../components/layout/input.component";

import { handleValidate } from "../validators/auth.validator";
import { isEmpty } from "../utils";
import { AuthService } from "../services/auth.service";

const formSchema = {
	email: "",
	password: ""
};

export const LoginPage = () => {
	const [state, setState] = useState(formSchema);
	const [errors, setErrors] = useState(formSchema);
	const [serverError, setServerError] = useState("");
	const auth = useContext(AuthContext);
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		const { errors } = handleValidate(state);
		if (!isEmpty(errors)) {
			setErrors(errors);
		} else {
			setErrors({});
			AuthService.login({ ...state }).then(data => {
				if (data.error) {
					setServerError(data.error);
				} else {
					auth.login(data.token, data.user);
					history.push("/");
				}
			});
		}
	};
	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	return (
		<Card className="bc__form__card">
			<h2 className="text-center text-bold mb-4">Login</h2>
			{serverError && <Alert color="danger">{serverError}</Alert>}
			<Form onSubmit={handleSubmit}>
				<BcInput
					id="email"
					type="email"
					onChange={handleChange}
					value={state.email}
					err={errors.email}
				/>
				<BcInput
					id="password"
					type="password"
					onChange={handleChange}
					value={state.password}
					err={errors.password}
				/>
				<Button color="success" className="mt-2 btn-block">
					Login
				</Button>
			</Form>
		</Card>
	);
};
