import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Button, Alert } from "reactstrap";
import { AuthContext } from "../store/auth.store";

import { BcInput } from "../components/layout/input.component";

import { handleValidate } from "../validators/auth.validator";
import { isEmpty } from "../utils";
import { AuthService } from "../services/auth.service";

const formSchema = {
	name: "",
	email: "",
	phone: "",
	password: ""
};

export const RegisterPage = () => {
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
			AuthService.register({ ...state }).then(data => {
				if (data.error) {
					setServerError(data.error);
				} else {
					auth.register(data.token);
					history.push("/confirm");
				}
			});
		}
	};
	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	return (
		<Card className="bc__form__card">
			<h2 className="text-center text-bold mb-4">Register</h2>
			{serverError && <Alert color="danger">{serverError}</Alert>}
			<Form onSubmit={handleSubmit}>
				<BcInput
					id="name"
					type="text"
					onChange={handleChange}
					value={state.name}
					err={errors.name}
				/>
				<BcInput
					id="email"
					type="email"
					onChange={handleChange}
					value={state.email}
					err={errors.email}
				/>
				<BcInput
					id="phone"
					type="tel"
					onChange={handleChange}
					value={state.phone}
					err={errors.phone}
				/>
				<BcInput
					id="password"
					type="password"
					onChange={handleChange}
					value={state.password}
					err={errors.password}
				/>
				<Button color="success" className="mt-2 btn-block">
					Register
				</Button>
			</Form>
		</Card>
	);
};
