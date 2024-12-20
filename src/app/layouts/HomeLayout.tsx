import { NavLink, Outlet } from "react-router";
import Dish from "@assets/dish.svg?react";
import { useLanguage } from "@app/utils/useLanguage";
import { LanguageSwitch } from "@app/components/LanguageSwitch";
import { useRef, useState } from "react";
import { useClickAway } from "ahooks";

export function HomeLayout() {
	const [language, setLanguage] = useLanguage();
	const [showLogout, setShowLogout] = useState(false);
	const ref = useRef<HTMLButtonElement>(null);
	useClickAway(() => {
		setShowLogout(false);
	}, ref);
	return (
		<section className="min-h-screen flex flex-col">
			<header className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg">
				<div className="flex justify-between items-center">
					<div className="text-2xl font-bold text-white font-serif flex gap-2 items-center">
						<Dish />
						SFood
						<nav className="flex gap-4">
							<NavLink
								to="/"
								className={({ isActive }) =>
									`${isActive ? "bg-blue-700" : "bg-blue-800"} text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition`
								}
							>
								Home
							</NavLink>
							<NavLink
								to="/day_plan"
								className={({ isActive }) =>
									`${isActive ? "bg-blue-700" : "bg-blue-800"} text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition`
								}
							>
								Day Plan
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
						<div
							onClick={() => setShowLogout(!showLogout)}
							onKeyDown={() => {}}
							className="shadow-md hover:scale-105 cursor-pointer transition-transform ease-in-out rounded-full w-12 h-12 bg-slate-500 text-white flex justify-center items-center"
						>
							U
						</div>

						{showLogout && (
							<div className="absolute right-2 top-20 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
								<button
									ref={ref}
									type="button"
									className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									onClick={() => {
										// 处理退出逻辑
										console.log("Logout");
									}}
								>
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			</header>
			<Outlet />
			<footer className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white text-center font-serif font-light text-sm italic">
				<div className="container mx-auto">
					<div className="flex justify-between items-center mb-4">
						<div className="text-lg font-bold">SFood</div>
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
