import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40 text-8xl">
      <h1>oops!!!!</h1>
      <h1>Page not found</h1>
      <Link
        className="bg-blue-500 text-white font-bold rounded-3xl px-8 py-6 mt-20 text-2xl"
        to="/"
      >
        Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
