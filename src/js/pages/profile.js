import { setupLogout } from "../utils/logout.js";
setupLogout();
import { getProfile } from "../api/profiles.js";
import { getUser } from "../utils/storage.js";

setupLogout();

const user = getUser();
if (!user) window.location.href = "/auth/login/";

async function showProfile() {
	try {
		const profile = await getProfile(user.name);
		document.querySelector("#profile-name").textContent = profile.name;
		document.querySelector("#profile-bio").textContent = profile.bio || "";
		document.querySelector("#profile-credits").textContent = profile.credits;
		document.querySelector("#profile-avatar").src = profile.avatar?.url || "";
		document.querySelector("#profile-avatar").alt = profile.avatar?.alt || "";
		document.querySelector("#profile-banner").src = profile.banner?.url || "";
	} catch (error) {
		document.querySelector("#form-message").textContent = error.message;
	}
}

showProfile();
