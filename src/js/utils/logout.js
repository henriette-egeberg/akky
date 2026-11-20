import { clearStorage } from "./storage.js";

export function setupLogout() {
	const link = document.querySelector("#logout-link");
	if (!link) return;

	link.addEventListener("click", (event) => {
		event.preventDefault();
		clearStorage();
		window.location.href = "/";
	});
}
