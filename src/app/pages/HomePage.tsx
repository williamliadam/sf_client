import { useTranslation } from "react-i18next";

const HomePage = () => {
	const { t } = useTranslation();

	return (
		<section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
			<h1 className="text-4xl font-bold text-white mb-4">{t("title")}</h1>
			<p className="text-lg text-white text-center max-w-2xl">
				{t("description.part1")}
			</p>
			<p className="text-lg text-white text-center max-w-2xl">
				{t("description.part2")}
			</p>
		</section>
	);
};

export default HomePage;
