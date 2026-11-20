import { API_KEY } from "./config.js";
import { getToken } from "../utils/storage.js";

export function authHeaders() {
	return {
		"Content-Type": "application/json",
		Authorization: `Bearer ${getToken()}`,
		"X-Noroff-API-Key": API_KEY,
	};
}
