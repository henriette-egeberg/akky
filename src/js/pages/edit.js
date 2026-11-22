import { setupLogout, showCredits } from "../utils/logout.js";
setupLogout();
showCredits();
import { getListing, updateListing } from "../api/listings.js";
import { getToken } from "../utils/storage.js";

if (!getToken()) window.location.href = "/auth/login/";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const form = document.querySelector("#edit-form");
const message = document.querySelector("#form-message");

async function fillForm() {
	try {
		const listing = await getListing(id);
		form.title.value = listing.title;
		form.description.value = listing.description || "";
		form.image.value = listing.media[0]?.url || "";
	} catch (error) {
		message.textContent = error.message;
	}
}

fillForm();

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const data = {
		title: form.title.value,
		description: form.description.value,
		media: [],
	};

	if (form.image.value) {
		data.media.push({ url: form.image.value, alt: form.title.value });
	}

	try {
		await updateListing(id, data);
		window.location.href = `/listing/?id=${id}`;
	} catch (error) {
		message.textContent = error.message;
	}
});
