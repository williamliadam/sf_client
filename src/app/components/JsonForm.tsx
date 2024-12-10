export const JsonForm = () => {
	return (
		<>
			<form className=" w-full bg-slate-400 p-2 grid gap-2 grid-cols-3 grid-rows-3">
				<input type="text" className=" col-span-1 rounded-md px-2" />
				<input type="email" className=" col-span-1 rounded-md  px-2" />
				<input type="number" className=" col-span-1 rounded-md  px-2" />
				<input type="search" className=" col-span-1 rounded-md px-2" />
				<input type="tel" className=" col-span-1 rounded-md px-2" />
				<input type="url" className=" col-span-1 rounded-md px-2" />
				<input type="range" className=" col-span-1 rounded-md px-2" />
			</form>
			<form className=" w-full bg-slate-400 p-2 grid gap-2 grid-cols-3 grid-rows-3">
				<select className=" p-4 rounded-md col-span-1">
					<option value="someOption">Some option</option>
					<option value="otherOption">Other option</option>
				</select>
				<input type="checkbox" className=" col-span-1 rounded-md  px-2" />
				<input type="radio" className=" col-span-1 rounded-md px-2" />
				<input type="file" className=" col-span-1 rounded-md  px-2" />
				<input type="color" className=" col-span-1 rounded-md  px-2" />
			</form>
			<form className=" w-full bg-slate-400 p-2 grid gap-2 grid-cols-3 grid-rows-3">
				<input type="month" className=" col-span-1 rounded-md  px-2" />
				<input type="week" className=" col-span-1 rounded-md px-2" />
				<input type="date" className=" col-span-1 rounded-md  px-2" />
				<input type="datetime-local" className=" col-span-1 rounded-md  px-2" />
				<input type="time" className=" col-span-1 rounded-md px-2" />
			</form>
			<form className=" w-full bg-slate-400 p-2 grid gap-2 grid-cols-3 grid-rows-3">
				<input type="reset" className=" col-span-1 rounded-md px-2" />
				<input type="submit" className=" col-span-1 rounded-md px-2" />
				<input
					type="button"
					value="Button"
					className=" col-span-1 rounded-md  px-2"
				/>
				<input
					type="image"
					alt="image"
					className=" col-span-1 rounded-md  px-2"
				/>
				<input type="hidden" className=" col-span-1 rounded-md  px-2" />
			</form>
		</>
	);
};
