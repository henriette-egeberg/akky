import { setupLogout } from "../utils/logout.js";
import { createListing } from "../api/listings.js";
import { getToken } from "../utils/storage.js";

setupLogout();

if (!getToken()) window.location.href = "/auth/login/";

const form = document.querySelector("#create-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const data = {
		title: form.title.value,
		description: form.description.value,
		endsAt: new Date(form.endsAt.value).toISOString(),
		media: [],
	};

	if (form.image.value) {
		data.media.push({ url: form.image.value, alt: form.title.value });
	}

	try {
		const listing = await createListing(data);
		window.location.href = `/listing/?id=${listing.id}`;
	} catch (error) {
		message.textContent = error.message;
	}
});
