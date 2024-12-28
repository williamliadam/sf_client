import type React from "react";
import {
	createContext,
	useContext,
	useState,
	useCallback,
	type PropsWithChildren,
} from "react";

interface Toast {
	id: number;
	message: string;
	type: "success" | "error" | "info";
}

interface ToastContextType {
	addToast: (message: string, type: "success" | "error" | "info") => void;
	removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error("useToast must be used within a ToastProvider");
	}
	return context;
};

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const addToast = useCallback(
		(message: string, type: "success" | "error" | "info") => {
			const id = Date.now();
			setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
			setTimeout(() => removeToast(id), 3000); // 自动移除通知
		},
		[],
	);

	const removeToast = useCallback((id: number) => {
		setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
	}, []);

	return (
		<ToastContext.Provider value={{ addToast, removeToast }}>
			{children}
			<div className="fixed bottom-4 right-4 space-y-2">
				{toasts.map((toast) => (
					<div
						key={toast.id}
						className={`p-4 rounded-md shadow-md text-white ${
							toast.type === "success"
								? "bg-green-500"
								: toast.type === "error"
									? "bg-red-500"
									: "bg-blue-500"
						}`}
					>
						{toast.message}
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
};
