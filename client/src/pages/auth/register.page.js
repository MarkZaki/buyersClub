import React, { useState } from "react";
import { Card, Form, Button } from "reactstrap";
import { BcInput } from "../../components/widgets/input.component";

import { handleValidate } from "../../validators/auth.validator";
import { isEmpty } from "../../utils";

const formSchema = {
	name: "",
	email: "",
	phone: "",
	password: ""
};

export const RegisterPage = () => {
	const [state, setState] = useState(formSchema);
	const [errors, setErrors] = useState(formSchema);

	const handleSubmit = e => {
		e.preventDefault();
		const { errors } = handleValidate(state);

		if (!isEmpty(errors)) {
			setErrors(errors);
		} else {
			// SERVICES
		}
	};
	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
	return (
		<Card className="bc__form__card">
			<h2 className="text-center text-bold mb-4">Register</h2>
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
