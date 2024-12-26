import type React from "react";

const ErrorNotice: React.FC = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "10px",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="red"
			>
				<title>Error</title>
				<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 17h-2v-2h2v2zm0-4h-2v-8h2v8z" />
			</svg>
		</div>
	);
};

export default ErrorNotice;
