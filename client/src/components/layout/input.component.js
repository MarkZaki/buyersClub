import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

import { isEmpty } from "../../utils";

export const BcInput = ({ id, type, onChange, value, invalid, err }) => (
	<FormGroup>
		<Label for={id}>{id.charAt(0).toUpperCase() + id.slice(1)}:</Label>
		<Input
			type={type}
			name={id}
			id={id}
			onChange={onChange}
			value={value}
			invalid={err ? !isEmpty(err) : null}
		/>
		<FormFeedback>{err && err}</FormFeedback>
	</FormGroup>
);
