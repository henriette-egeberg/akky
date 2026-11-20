// src/js/api/auth.js
import { API_BASE } from "./config.js";

export async function loginUser(data) {
	const response = await fetch(`${API_BASE}/auth/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Login failed");
	}

	return json.data;
}
export async function registerUser(data) {
	const response = await fetch(`${API_BASE}/auth/register`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Registration failed");
	}
	return json.data;
}
