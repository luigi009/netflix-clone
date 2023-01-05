import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";

export default function Header({
  black,
  searchCategory,
  setSearchCategory,
  searchMovie,
  setSearchMovie,
}) {
  return (
    <div id="header">
      <header
        className={`${
          black ? "black" : ""
        } z-[999] fixed top-0 left-0 right-0 sm:h-[250px] lg:h-[70px] grid gap-3 mobile:gap-y-14 items-center px-10 bg-transparent transition duration-[0.5s] ease-in-out mobile:h-[350px] mobile:p-12`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))",
        }}
      >
        <Link className="h-[30px] grid-rows-4" href="/">
          <svg
            height="677"
            viewBox=".238 .034 919.406 248.488"
            width="2500"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-96 h-full lg:w-32 mobile:w-96"
          >
            <path
              d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z"
              fill="#e50914"
            />
          </svg>
        </Link>
        <div className="flex justify-between items-center w-full mobile:w-auto mobile:hidden">
          <div
            className="font-bold sm:text-6xl lg:text-lg mobile:text-5xl"
            onClick={() => {
              setSearchCategory("");
            }}
          >
            <Link href="/">Home</Link>
          </div>
          <div className="font-bold sm:text-6xl lg:text-lg mobile:text-5xl">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSearchCategory("Action");
                setSearchMovie("");
              }}
            >
              Action
            </div>
          </div>

          <div className="font-bold sm:text-6xl lg:text-lg mobile:text-5xl">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSearchCategory("Originals");
                setSearchMovie("");
              }}
            >
              Originals
            </div>
          </div>

          <div className="font-bold sm:text-6xl lg:text-lg mobile:text-5xl">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSearchCategory("Recommended");
                setSearchMovie("");
              }}
            >
              Recommended
            </div>
          </div>
        </div>
        <div className="flex md:justify-end sm:justify-start items-center w-auto mobile:ml-24">
          <div className="flex justify-between items-center w-fit mobile:col-span-2 mobile:w-8/12">
            <div className="flex justify-center items-center font-bold bg-[#000] text-lg border-2 border-[#fff] p-1">
              <SearchIcon className="bg-[#000] sm:mx-4 lg:mx-2 mobile:mx-4 text-white sm:text-7xl lg:text-2xl mobile:text-8xl" />
              <input
                className="text-gray-700 bg-[#000] focus:outline-none sm:text-5xl lg:text-lg mobile:text-6xl h-auto"
                placeholder="search movie..."
                value={searchMovie}
                onChange={(e) => {
                  setSearchMovie(e.target.value);
                  setSearchCategory("");
                }}
              />
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <NotificationsIcon className="mobile:mx-6 sm:mx-2 md:mx-4 sm:text-7xl lg:text-2xl mobile:text-8xl" />
            </div>
          </div>
          {/* {!session ? <button onClick={()=> signIn('google') } className="items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded">
                        Sign In
                    </button> : <button onClick={()=> signOut() } className="items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded">
                        Sign out
                    </button>} */}
        </div>
        <div className="hidden mobile:flex mobile:justify-between mobile:items-center mobile:col-span-2 mobile:w-full">
          <div
            className="font-bold text-lg mobile:text-7xl drop-shadow-lg"
            onClick={() => {
              setSearchCategory("");
            }}
          >
            <Link href="/">Home</Link>
          </div>
          <div className="font-bold text-lg mobile:text-7xl drop-shadow-lg">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSearchCategory("Action");
                setSearchMovie("");
              }}
            >
              Action
            </div>
          </div>

          <div className="font-bold text-lg mobile:text-7xl drop-shadow-lg">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSearchCategory("Originals");
                setSearchMovie("");
              }}
            >
              Originals
            </div>
          </div>

          <div className="font-bold text-lg mobile:text-7xl drop-shadow-lg">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSearchCategory("Recommended");
                setSearchMovie("");
              }}
            >
              Recommended
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
