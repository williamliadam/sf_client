export function ModalLayout({
	onCancel,
	isOpen,
}: { onCancel: () => void; isOpen: boolean }) {
	return (
		<>
			<div
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
				onKeyDown={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
				className={` bg-slate-950 absolute w-full h-full top-0 transition-all ease-in-out duration-1000 ${isOpen ? "opacity-50 " : "opacity-0 "} pointer-events-none`}
			/>
			<div className="absolute w-full h-full top-0 flex justify-center items-center">
				<div
					className={`bg-orange-400 w-fit h-fit p-6 rounded-md shadow-md flex flex-col transition-all ease-in-out duration-1000 ${isOpen ? "opacity-100" : "opacity-0 "}`}
				>
					<div className=" text-lg text-white">Modal Title</div>
					<div className=" py-6 max-w-xl">
						Eiusmod anim deserunt reprehenderit minim sint pariatur sunt culpa
						ea aute aliquip. Mollit minim commodo veniam tempor do nostrud
						dolor. Cupidatat aute minim sint adipisicing minim aliqua laborum
						duis nulla nisi. Aute cupidatat quis laborum culpa enim cillum.
						Excepteur fugiat amet fugiat deserunt. Deserunt officia deserunt ea
						mollit ea.
					</div>
					<div className=" w-full flex flex-row justify-end">
						<button
							type="button"
							onClick={onCancel}
							className=" bg-orange-600 w-fit px-6 py-2 rounded-md shadow-md text-white transition-transform hover:scale-95"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
