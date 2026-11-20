import { loginUser } from "../api/auth.js";
import { saveToken, saveUser } from "../utils/storage.js";

const form = document.querySelector("#login-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const data = Object.fromEntries(new FormData(form));

	try {
		const user = await loginUser(data);
		saveToken(user.accessToken);
		saveUser({ name: user.name, email: user.email });
		window.location.href = "/profile/";
	} catch (error) {
		message.textContent = error.message;
	}
});
