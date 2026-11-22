import { clearStorage } from "./storage.js";
import { getUser } from "./storage.js";
import { getProfile } from "../api/profiles.js";

export function setupLogout() {
	const loggedIn = getUser();

	const loginLink = document.querySelector("#login-link");
	const registerLink = document.querySelector("#register-link");
	const createLink = document.querySelector("#create-link");
	const logoutLink = document.querySelector("#logout-link");

	if (loggedIn) {
		if (loginLink) loginLink.style.display = "none";
		if (registerLink) registerLink.style.display = "none";
	} else {
		if (createLink) createLink.style.display = "none";
		if (logoutLink) logoutLink.style.display = "none";
	}

	if (logoutLink) {
		logoutLink.addEventListener("click", (event) => {
			event.preventDefault();
			clearStorage();
			window.location.href = "/";
		});
	}
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
