import { setupLogout, showCredits } from "../utils/logout.js";
setupLogout();
showCredits();
import { registerUser, loginUser } from "../api/auth.js";
import { saveToken, saveUser } from "../utils/storage.js";

const form = document.querySelector("#register-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const data = Object.fromEntries(new FormData(form));

	if (!data.email.endsWith("@stud.noroff.no")) {
		message.textContent = "Email must end with @stud.noroff.no";
		return;
	}

	try {
		await registerUser(data);
		const user = await loginUser({ email: data.email, password: data.password });
		saveToken(user.accessToken);
		saveUser({ name: user.name, email: user.email });
		window.location.href = "/profile/";
	} catch (error) {
		message.textContent = error.message;
	}
});
