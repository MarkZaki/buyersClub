import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Button, Alert } from "reactstrap";
import { AuthContext } from "../store/auth.store";

import { BcInput } from "../components/layout/input.component";

import { handleValidate } from "../validators/auth.validator";
import { isEmpty } from "../utils";
import { AuthService } from "../services/auth.service";

const formSchema = {
	token: ""
};

export const ConfirmPage = () => {
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
			AuthService.confirm({ token: state.token, authToken: auth.token }).then(
				data => {
					if (data.error) {
						setServerError(data.error);
					} else {
						auth.confirm(data.user);
						history.push("/");
					}
				}
			);
		}
	};
	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	return (
		<Card className="bc__form__card">
			<h2 className="text-center text-bold mb-4">Confirm Email</h2>
			{serverError && <Alert color="danger">{serverError}</Alert>}
			<Form onSubmit={handleSubmit}>
				<BcInput
					id="token"
					type="number"
					onChange={handleChange}
					value={state.token}
					err={errors.token}
				/>
				<Button color="success" className="mt-2 btn-block">
					Confirm
				</Button>
			</Form>
		</Card>
	);
};
