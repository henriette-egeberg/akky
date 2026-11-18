// Save token to localStorage
export function saveToken(token) {
	localStorage.setItem("authToken", token);
}

// Get token from localStorage
export function getToken() {
	return localStorage.getItem("authToken");
}

// Save user data to localStorage
export function saveUser(user) {
	localStorage.setItem("user", JSON.stringify(user));
}

// Get user data from localStorage
export function getUser() {
	const user = localStorage.getItem("user");
	return user ? JSON.parse(user) : null;
}

// Clear all data from localStorage
export function clearStorage() {
	localStorage.clear();
}
