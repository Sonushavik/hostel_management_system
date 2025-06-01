import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-800">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
  onClick={() => navigate(-1)}
  className="mt-6 inline-block bg-red-500 text-white px-6 py-3 rounded-md shadow hover:bg-red-600 transition-all duration-200"
>
  Go Back
</button>

    </div>
  );
};

export default ErrorPage;
