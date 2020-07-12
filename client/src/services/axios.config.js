import axios from "axios";

export const HttpRequest = axios.create({
	baseURL: "/api"
});
