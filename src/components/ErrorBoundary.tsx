import React from "react";
import ErrorNotice from "./ErrorNotice";

type ErrorBoundaryProps = {
	children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	{ hasError: boolean }
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_: Error) {
		// 更新 state，下一次渲染将展示备选 UI。
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// 可以渲染任意自定义的备选 UI
			return <ErrorNotice />;
		}

		return this.props.children;
	}
}
