import { clearStorage } from "./storage.js";
import { getUser } from "./storage.js";
import { getProfile } from "../api/profiles.js";

export function setupLogout() {
	const loginLink = document.querySelector("#login-link");
	const loggedIn = getUser();

	if (loginLink && loggedIn) loginLink.style.display = "none";
	const link = document.querySelector("#logout-link");
	if (!link) return;
	if (!loggedIn) {
		link.style.display = "none";
		return;
	}

	link.addEventListener("click", (event) => {
		event.preventDefault();
		clearStorage();
		window.location.href = "/";
	});
}

export async function showCredits() {
	const span = document.querySelector("#header-credits");
	const user = getUser();
	if (!span || !user) return;

	try {
		const profile = await getProfile(user.name);
		span.textContent = profile.credits + " credits";
	} catch (error) {
		span.textContent = "";
	}
}
