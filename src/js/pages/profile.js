import { setupLogout, showCredits } from "../utils/logout.js";
setupLogout();
showCredits();
import { getProfile, updateProfile } from "../api/profiles.js";
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
		const form = document.querySelector("#profile-form");
		form.bio.value = profile.bio || "";
		form.avatar.value = profile.avatar?.url || "";
		form.banner.value = profile.banner?.url || "";
	} catch (error) {
		document.querySelector("#form-message").textContent = error.message;
	}
}

showProfile();
const form = document.querySelector("#profile-form");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const data = { bio: form.bio.value };
	if (form.avatar.value) data.avatar = { url: form.avatar.value, alt: user.name };
	if (form.banner.value) data.banner = { url: form.banner.value, alt: user.name };

	try {
		await updateProfile(user.name, data);
		window.location.reload();
	} catch (error) {
		document.querySelector("#form-message").textContent = error.message;
	}
});
