import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-[100vh] px-5 bg-gray-200 text-center font-semibold ">
      <div className="pt-[25vh] flex flex-col items-center gap-3">
        <h2 className="text-customBlack text-7xl sm:text-9xl font-bold">
          {error.status}
        </h2>

        <h3 className="sm:text-2xl text-slate-700 text-lg">
          Oops! There was an unexpected error.
        </h3>

        <p className="text-gray-500">Status: {error.statusText}</p>

        <p className="text-gray-500">{error.data}</p>

        <Link
          to="/"
          className="btn bg-slate-900 text-gray-50 sm:text-2xl px-7 glass hover:bg-slate-700 text-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
