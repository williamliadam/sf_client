import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store/index.ts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter } from "react-router";
import "./i18n";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
	apiKey: "AIzaSyDrwMLAKBHHXtoW_SQx4arpGsWiijE-D-I",
	authDomain: "danshi-50419.firebaseapp.com",
	databaseURL: "https://danshi-50419.firebaseio.com",
	projectId: "danshi-50419",
	storageBucket: "danshi-50419.firebasestorage.app",
	messagingSenderId: "911621412811",
	appId: "1:911621412811:web:e50e2d513c22468f5d884e",
	measurementId: "G-05MJ340E48",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
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
					<DndProvider backend={HTML5Backend}>
						<BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL || "/"}>
							<App />
						</BrowserRouter>
					</DndProvider>
				</Provider>
			</StrictMode>,
		);
	}
}

enableMocking().then(initApp);
