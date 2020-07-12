export const saveAuthData = (data, emptyToken = false) => {
	if (data.token) {
		localStorage.setItem("token", data.token);
	}
	if (emptyToken) {
		localStorage.setItem("token", "");
	}
	if (data.user) {
		localStorage.setItem("user", JSON.stringify(data.user));
	}
};
