import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/index.ts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router";

async function enableMocking() {
	if (process.env.NODE_ENV !== "development") {
		return;
	}
	const { worker } = await import("./mocks/browser");
	return worker.start({
		onUnhandledRequest: "bypass",
	});
}

function initApp() {
	console.log("import.meta.env: ", import.meta.env);
	console.log("process.env: ", process.env);
	const root = document.getElementById("root");
	if (root) {
		createRoot(root).render(
			<StrictMode>
				<Provider store={store}>
					<DndProvider backend={HTML5Backend}>
						<BrowserRouter basename={import.meta.env.BASE_URL}>
							<App />
						</BrowserRouter>
					</DndProvider>
				</Provider>
			</StrictMode>,
		);
	}
}

enableMocking().then(initApp);
