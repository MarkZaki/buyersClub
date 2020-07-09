import React, { useState } from "react";
import { Card, Form, FormGroup, Input, Label } from "reactstrap";

export const LoginPage = () => {
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const handleChange = e =>
		setState({ ...state, [e.target.name]: e.target.value });

	return (
		<Card className="bc__form__card">
			<h2 className="text-center text-bold mb-4">Login</h2>
			<Form>
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
					<Input
						className="btn btn-success btn-lg mt-2"
						type="submit"
						name="name"
						id="submit_input"
						value="Login"
					/>
				</FormGroup>
			</Form>
		</Card>
	);
};
