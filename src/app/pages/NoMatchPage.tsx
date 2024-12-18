import { Link } from "react-router";

export const NoMatchPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-3xl mb-8">Page Not Found</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};