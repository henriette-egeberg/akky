import { getListing } from "../api/listings.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const message = document.querySelector("#form-message");

async function showListing() {
	try {
		const listing = await getListing(id);

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
