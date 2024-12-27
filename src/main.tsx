import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "@app/App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "@store/index.ts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router";
import "./i18n";
import { PersistGate } from "redux-persist/integration/react";
import { Loading } from "@components/Loading";
async function enableMocking() {
	if (
		import.meta.env.MODE !== "development" ||
		import.meta.env.VITE_USE_MOCKS !== "true"
	) {
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
								<Suspense fallback={<Loading />}>
									<App />
								</Suspense>
							</BrowserRouter>
						</DndProvider>
					</PersistGate>
				</Provider>
			</StrictMode>,
		);
	}
}

enableMocking().then(initApp);
