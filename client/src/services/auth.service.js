import { HttpRequest } from "./axios.config";

const register = data => {
	return HttpRequest.post("/auth/register", {
		name: data.name,
		email: data.email,
		phone: data.phone,
		password: data.password
	})
		.then(data => data.data)
		.catch(err => err.response.data);
};

const confirm = data => {
	return HttpRequest.post(
		"/verify/confirm",
		{ token: data.token },
		{ headers: { "auth-token": data.authToken } }
	)
		.then(data => data.data)
		.catch(err => err.response.data);
};

const login = data => {
	return HttpRequest.post("/auth/login", {
		email: data.email,
		password: data.password
	})
		.then(data => data.data)
		.catch(err => err.response.data);
};

export const AuthService = { register, login, confirm };
