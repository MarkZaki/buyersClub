export const isEmpty = obj => {
	return Object.keys(obj).length === 0;
};

export const needToBeParsed = obj => {
	if (typeof obj === "string") {
		return JSON.parse(obj);
	} else {
		return obj;
	}
};
