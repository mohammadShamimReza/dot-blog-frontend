// components/error/ErrorPage.tsx
import React from "react";

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-4">Oops! An error occurred.</h1>
        <p className="text-gray-600 mb-4">
          {statusCode
            ? `Server error: ${statusCode}`
            : "Client error occurred on the browser."}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
