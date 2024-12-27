import { http, HttpResponse, delay } from "msw";
import { createId } from "@paralleldrive/cuid2";
const token = createId();
export const handlers = [
	http.get("/api/test", () => {
		return HttpResponse.json({
			id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
			firstName: "John",
			lastName: "Maverick",
		});
	}),
	http.get("/api/recipe", () => {
		return HttpResponse.json([
			{ id: 1, name: "Burger" },
			{ id: 2, name: "Pizza" },
			{ id: 3, name: "Dumpling" },
			{ id: 4, name: "Rice" },
		]);
	}),
	http.post("/api/auth/login", async () => {
		await delay(1000);
		return HttpResponse.json({
			user: {
				first_name: "Test",
				last_name: "User",
			},
			token,
		});
	}),
	http.post("/api/auth/refreshToken", async () => {
		await delay(1000);
		return HttpResponse.json({
			user: {
				first_name: "Test",
				last_name: "User",
			},
			token,
		});
	}),
];
