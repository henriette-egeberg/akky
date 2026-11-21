import { API_BASE } from "./config.js";
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
