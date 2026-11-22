import { getListing } from "../api/listings.js";
import { placeBid } from "../api/bids.js";
import { getToken } from "../utils/storage.js";
import { deleteListing } from "../api/listings.js";
import { getUser } from "../utils/storage.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const message = document.querySelector("#form-message");

async function showListing() {
	try {
		const listing = await getListing(id);
		const user = getUser();
		if (user && user.name === listing.seller.name) {
			document.querySelector("#owner-buttons").style.display = "block";
			document.querySelector("#edit-link").href = `/listing/edit/?id=${listing.id}`;
		}

		document.querySelector("#listing-title").textContent = listing.title;
		document.querySelector("#listing-description").textContent = listing.description || "";
		document.querySelector("#listing-seller").textContent = "Seller: " + listing.seller.name;
		document.querySelector("#listing-ends").textContent = "Ends: " + new Date(listing.endsAt).toLocaleString();

		const images = document.querySelector("#listing-images");
		listing.media.forEach((item) => {
			const img = document.createElement("img");
			img.src = item.url;
			img.alt = item.alt || listing.title;
			images.append(img);
		});

		const bidList = document.querySelector("#bid-list");
		listing.bids.forEach((bid) => {
			const li = document.createElement("li");
			li.textContent = bid.bidder.name + ": " + bid.amount + " credits";
			bidList.append(li);
		});
	} catch (error) {
		message.textContent = error.message;
	}
}

showListing();
const bidForm = document.querySelector("#bid-form");
const bidMessage = document.querySelector("#bid-message");

if (!getToken()) {
	bidForm.style.display = "none";
	bidMessage.textContent = "Log in to place a bid.";
}

bidForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const amount = Number(bidForm.amount.value);

	try {
		await placeBid(id, amount);
		window.location.reload();
	} catch (error) {
		bidMessage.textContent = error.message;
	}
});
document.querySelector("#delete-button").addEventListener("click", async () => {
	if (!confirm("Delete this listing?")) return;
	try {
		await deleteListing(id);
		window.location.href = "/";
	} catch (error) {
		message.textContent = error.message;
	}
});
