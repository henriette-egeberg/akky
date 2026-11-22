import { API_BASE } from "./config.js";
import { authHeaders } from "./headers.js";
import { setupLogout } from "../utils/logout.js";
setupLogout();
export async function getListings() {
	const response = await fetch(`${API_BASE}/auction/listings?_active=true&sort=created`);
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Could not load listings");
	}
	return json.data;
}
export async function getListing(id) {
	const response = await fetch(`${API_BASE}/auction/listings/${id}?_bids=true&_seller=true`);
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Could not load listing");
	}
	return json.data;
}
export async function createListing(data) {
	const response = await fetch(`${API_BASE}/auction/listings`, {
		method: "POST",
		headers: authHeaders(),
		body: JSON.stringify(data),
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Could not create listing");
	}
	return json.data;
}
export async function updateListing(id, data) {
	const response = await fetch(`${API_BASE}/auction/listings/${id}`, {
		method: "PUT",
		headers: authHeaders(),
		body: JSON.stringify(data),
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Could not update listing");
	}
	return json.data;
}

export async function deleteListing(id) {
	const response = await fetch(`${API_BASE}/auction/listings/${id}`, {
		method: "DELETE",
		headers: authHeaders(),
	});
	if (!response.ok) {
		throw new Error("Could not delete listing");
	}
}
export async function searchListings(query) {
	const response = await fetch(`${API_BASE}/auction/listings/search?q=${query}&_active=true&sort=created`);
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Search failed");
	}
	return json.data;
}
