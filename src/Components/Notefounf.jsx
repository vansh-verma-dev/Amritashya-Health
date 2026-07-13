import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
          <AlertTriangle className="w-12 h-12 text-green-700" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-7xl md:text-8xl font-extrabold text-green-700">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Please return to the homepage and continue exploring Amritasya
          Ayurveda.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/"
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-7 py-3 rounded-xl font-semibold transition duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

        </div>

      </div>
    </section>
  );
};

export default NotFound;