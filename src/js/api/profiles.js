import { API_BASE } from "./config.js";
import { authHeaders } from "./headers.js";

export async function getProfile(name) {
	const response = await fetch(`${API_BASE}/auction/profiles/${name}`, {
		headers: authHeaders(),
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Could not load profile");
	}
	return json.data;
}
export async function updateProfile(name, data) {
	const response = await fetch(`${API_BASE}/auction/profiles/${name}`, {
		method: "PUT",
		headers: authHeaders(),
		body: JSON.stringify(data),
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Could not update profile");
	}
	return json.data;
}
