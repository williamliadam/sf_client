import React from "react";
import { isNode } from "./isNode";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
	const ref = React.useRef<T>(null);

	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				ref.current &&
				isNode(event.target) &&
				!ref.current.contains(event.target)
			) {
				callback();
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [callback]);

	return ref;
}
