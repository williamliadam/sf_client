import { ErrorBoundary } from "@components/ErrorBoundary";
import { Loading } from "@components/Loading";
import { DayPlanView } from "@features/day-plan/DayPlanView";
import { Suspense } from "react";

export const DayPlanPage = () => {
	return (
		<Suspense fallback={<Loading />}>
			<ErrorBoundary>
				<DayPlanView />
			</ErrorBoundary>
		</Suspense>
	);
};
