import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="w-[100%] h-[100%]">
      <div className="flex text-center justify-center w-[100vw] h-[100vh] items-center">
        <div className="bg-slate-400 p-6 rounded-xl w-auto relative" >
          <h1 className="m-4 text-4xl">Oops!</h1>
          <p className="mt-4">Sorry, an unexpected error has occurred.</p>
          <p>
            <i>Page {error.statusText || error.message}</i>
          </p>
          <div className="m-6">
            <Link className="relative p-2 border-black border-2 rounded-md hover:bg-sky-200 bg-sky-400 transition duration-200" to='/'>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}