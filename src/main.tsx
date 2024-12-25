import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store/index.ts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router";
import "./i18n";
import { PersistGate } from "redux-persist/integration/react";
async function enableMocking() {
	if (import.meta.env.MODE !== "development") {
		return;
	}
	const { worker } = await import("./mocks/browser");
	return worker.start({
		onUnhandledRequest: "bypass",
	});
}

function initApp() {
	const root = document.getElementById("root");
	if (root) {
		createRoot(root).render(
			<StrictMode>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<DndProvider backend={HTML5Backend}>
							<BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL || "/"}>
								<App />
							</BrowserRouter>
						</DndProvider>
					</PersistGate>
				</Provider>
			</StrictMode>,
		);
	}
}

enableMocking().then(initApp);
