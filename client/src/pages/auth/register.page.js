import React, { useState } from "react";
import { Card, Form, FormGroup, Input, Label } from "reactstrap";

export const RegisterPage = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirmedPassword: ""
	});

	const handleChange = e =>
		setState({ ...state, [e.target.name]: e.target.value });

	return (
		<Card className="bc__form__card">
			<h2 className="text-center text-bold mb-4">Register</h2>
			<Form>
				<FormGroup>
					<Label for="name_input">Name:</Label>
					<Input
						type="text"
						name="name"
						id="name_input"
						onChange={handleChange}
						value={state.name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="email_input">Email:</Label>
					<Input
						type="email"
						name="email"
						id="email_input"
						onChange={handleChange}
						value={state.email}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="phone_input">Phone:</Label>
					<Input
						type="tel"
						name="phone"
						id="phone_input"
						onChange={handleChange}
						value={state.phone}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="password_input">Password:</Label>
					<Input
						type="password"
						name="password"
						id="password_input"
						onChange={handleChange}
						value={state.password}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="confirm_password_input">Confirm Password:</Label>
					<Input
						type="password"
						name="confirmedPassword"
						id="confirm_password_input"
						onChange={handleChange}
						value={state.confirmedPassword}
					/>
				</FormGroup>
				<FormGroup>
					<Input
						className="btn btn-success btn-lg mt-2"
						type="submit"
						name="name"
						id="submit_input"
						value="Register"
					/>
				</FormGroup>
			</Form>
		</Card>
	);
};
