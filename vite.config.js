import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				login: resolve(__dirname, "auth/login/index.html"),
				register: resolve(__dirname, "auth/register/index.html"),
			},
		},
	},
});
