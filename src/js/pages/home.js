import { getListings } from "../api/listings.js";

const container = document.querySelector("#listings");
const message = document.querySelector("#form-message");

async function showListings() {
	try {
		const listings = await getListings();

		listings.forEach((listing) => {
			const card = document.createElement("a");
			card.href = `/listing/?id=${listing.id}`;

			const title = document.createElement("h2");
			title.textContent = listing.title;

			const ends = document.createElement("p");
			ends.textContent = "Ends: " + new Date(listing.endsAt).toLocaleString();

			card.append(title, ends);
			container.append(card);
		});
	} catch (error) {
		message.textContent = error.message;
	}
}

showListings();
