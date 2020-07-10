export const handleValidate = data => {
	const errors = {};

	for (let field of Object.entries(data)) {
		if (!field[1]) {
			errors[field[0]] = `${field[0]} Cannot be Empty`;
		} else if (field[1].length < 6) {
			errors[field[0]] = `${field[0]} Cannot be less than 6 Characters`;
		}
	}

	return { errors };
};
