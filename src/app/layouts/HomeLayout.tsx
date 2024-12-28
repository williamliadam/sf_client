import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { LanguageSwitch } from "@components/LanguageSwitch";
import { useLanguage } from "@utils/useLanguage";
import { useOutsideClick } from "@utils/useOutsideClick";
import Dish from "@assets/dish.svg?react";
import { logout } from "@features/auth/authSlice";
import { useTranslation } from "react-i18next";

export function HomeLayout() {
	const [language, setLanguage] = useLanguage();
	const [showLogout, setShowLogout] = useState(false);
	const dispatch = useDispatch();
	const ref = useOutsideClick<HTMLDivElement>(() => {
		setShowLogout(false);
	});
	const { t } = useTranslation("translation");
	return (
		<section className="min-h-screen flex flex-col">
			<header className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg">
				<div className="flex justify-between items-center">
					<div className="text-2xl font-bold text-white font-serif flex gap-2 items-center">
						<Dish />
						{t("brandName")}
						<nav className="flex gap-4">
							<NavLink
								to="/"
								className={({ isActive }) =>
									`${isActive ? "bg-blue-700" : "bg-blue-800"} text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition`
								}
							>
								{t("menu.home")}
							</NavLink>
							<NavLink
								to="/day_plan"
								className={({ isActive }) =>
									`${isActive ? "bg-blue-700" : "bg-blue-800"} text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition`
								}
							>
								{t("menu.dayPlan")}
							</NavLink>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<LanguageSwitch
							value={language === "zh"}
							onChange={(state) => {
								setLanguage(state ? "zh" : "en");
							}}
						/>
						<div ref={ref}>
							<div
								onClick={() => setShowLogout((prev) => !prev)}
								onKeyDown={() => {}}
								className="shadow-md hover:scale-105 cursor-pointer transition-transform ease-in-out rounded-full w-12 h-12 bg-slate-500 text-white flex justify-center items-center"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<title>Avatar</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
									/>
								</svg>
							</div>
							{showLogout && (
								<div className="absolute right-2 top-20 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
									<button
										type="button"
										className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										onClick={() => {
											dispatch(logout());
											setShowLogout(false);
										}}
									>
										{t("menu.logout")}
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
			<Outlet />
			<footer className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white text-center font-serif font-light text-sm italic">
				<div className="container mx-auto">
					<div className="flex justify-between items-center mb-4">
						<div className="text-lg font-bold">SFood</div>
						<div className="text-xs">
							version: {import.meta.env.VITE_APP_VERSION}
						</div>
						<nav className="flex gap-4">
							<a href="/about-us" className="hover:underline">
								About Us
							</a>
							<a href="/contact" className="hover:underline">
								Contact
							</a>
							<a href="/privacyPolicy" className="hover:underline">
								Privacy Policy
							</a>
						</nav>
					</div>
					<div className="text-xs">
						&copy; {new Date().getFullYear()} SFood. All rights reserved.
					</div>
				</div>
			</footer>
		</section>
	);
}
