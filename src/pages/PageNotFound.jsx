import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import svg from "../assets/404.svg";

const PageNotFound = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>

      <img src={svg} alt="404 Illustration" className="max-w-md mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6 text-center">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
