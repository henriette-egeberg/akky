import { API_BASE } from "./config.js";
import { authHeaders } from "./headers.js";

export async function placeBid(id, amount) {
	const response = await fetch(`${API_BASE}/auction/listings/${id}/bids`, {
		method: "POST",
		headers: authHeaders(),
		body: JSON.stringify({ amount: amount }),
	});
	const json = await response.json();
	if (!response.ok) {
		throw new Error(json.errors?.[0]?.message || "Bid failed");
	}
	return json.data;
}
