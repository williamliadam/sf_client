import { useState } from "react";
import { ModalLayout } from "@layouts/ModalLayout";
import { createPortal } from "react-dom";

export const ModalButton = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => {
					setOpen(true);
				}}
				className=" bg-orange-600 w-fit px-6 py-2 rounded-md shadow-md text-white transition-transform hover:scale-95"
			>
				Open Modal
			</button>
			{open &&
				createPortal(
					<ModalLayout
						isOpen={open}
						onCancel={() => {
							setOpen(false);
						}}
					/>,
					document.getElementById("modal") || document.body,
				)}
		</>
	);
};
