import { setupLogout, showCredits } from "../utils/logout.js";
setupLogout();
showCredits();
import { getListings, searchListings } from "../api/listings.js";
const container = document.querySelector("#listings");
const message = document.querySelector("#form-message");

function renderListings(listings) {
	container.innerHTML = "";

	if (listings.length === 0) {
		message.textContent = "No listings found.";
		return;
	}
	message.textContent = "";

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
}

async function showListings() {
	try {
		const listings = await getListings();
		renderListings(listings);
	} catch (error) {
		message.textContent = error.message;
	}
}

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const query = searchForm.search.value.trim();

	try {
		const listings = query ? await searchListings(query) : await getListings();
		renderListings(listings);
	} catch (error) {
		message.textContent = error.message;
	}
});

showListings();
