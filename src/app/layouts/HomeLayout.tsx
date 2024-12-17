import { NavLink, Outlet } from "react-router";
import Dish from "@assets/dish.svg?react";

export function HomeLayout() {
	return (
		<section className=" h-screen bg-orange-200 flex flex-col justify-between">
			<header className=" bg-orange-400 px-6 py-4  flex flex-row gap-2 justify-between items-center ">
				<div className=" flex gap-6 justify-center items-center">
					<div className="text-2xl font-bold text-white font-serif flex gap-2 justify-center items-center">
						<Dish />
						SFood
					</div>
					<nav className=" flex gap-2 ">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`${isActive ? "bg-orange-700" : "bg-orange-800"} text-white px-4 py-2 rounded-md shadow-md btn`
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/day_plan"
							className={({ isActive }) =>
								`${isActive ? "bg-orange-700" : "bg-orange-800"} text-white px-4 py-2 rounded-md shadow-md btn`
							}
						>
							Day Plan
						</NavLink>
					</nav>
				</div>
				<div className=" shadow-md hover:scale-105 cursor-pointer transition-transform ease-in-out rounded-full size-12 bg-slate-500 text-white text-center align-middle flex justify-center items-center">
					U
				</div>
			</header>
			<section className=" bg-orange-200 flex-1 p-6">
				<Outlet />
			</section>
			<footer className=" bg-slate-800 p-6 text-white text-center  font-serif font-light text-sm italic ">
				Footer
			</footer>
		</section>
	);
}
