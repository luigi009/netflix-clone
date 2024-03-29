import React from "react";
import Head from "next/head";
import Link from "next/link";

function Login() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className="sm:flex flex-col items-center justify-center min-h-screen bg-netflix"
      style={{
        backgroundImage:
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/img/hero-bg.jpg)",
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href={prefix + "/favicon.ico"} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="flex justify-between w-full px-8 py-8">
        <div>
          <svg
            style={{ width: "112px", height: "30px" }}
            height="677"
            viewBox=".238 .034 919.406 248.488"
            width="2500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z"
              fill="#e50914"
            />
          </svg>
        </div>
        <div></div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 sm:px-20 text-center">
        <div className="bg-[#0000008c] w-full p-10">
          <div className="flex flex-col text-left w-full">
            <h1 className="text-4xl font-medium text-white max-w-lg tracking-wide">
              Login
            </h1>
          </div>
          <div className="flex flex-col mt-4">
            <input
              placeholder="Email or cell phone"
              className="bg-[#333] rounded-md p-4 my-2"
            />
            <input
              placeholder="Password"
              className="bg-[#333] rounded-md p-4 my-2"
            />

            <button className="bg-red-600 rounded-md text-white p-4 mt-4 sm:mt-8 sm:px-8 sm:py-4 sm:min-w-[400px]">
              Entrar
            </button>
          </div>

          <div className="flex w-full flex-col my-2 sm:justify-between sm:flex-row">
            <div className="flex flex-row justify-start items-center w-full">
              <input type="checkbox" className="m-2" />
              <span className="text-[#b3b3b3]">Remember me</span>
            </div>
            <div className="flex flex-row justify-start items-center w-full sm:justify-end">
              <Link href="/" className="text-[#b3b3b3] hover:underline">
                Do you need help?
              </Link>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <span className="text-[#b3b3b3]">Are you new?</span>
            <Link className="text-white mx-2 hover:underline" href="/">
              Subscribe now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
