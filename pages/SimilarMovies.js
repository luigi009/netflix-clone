import React, { memo } from "react";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { add3Dots } from '../Utilities/add3Dots';
import { movieDate } from "../Utilities/movieDate";

function SimilarMovies({
  anotherMovie,
}) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <div>
        <div
          className="bg-no-repeat bg-center h-[140px]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${anotherMovie?.backdrop_path})`,
            backgroundSize: "100%",
          }}
        ></div>

        <div className="bg-[#2f2f2f] p-3 flex flex-row justify-between font-bold text-white">
          <div>
            <div className="featured--year mr-4 inline-block text-white">
              {movieDate(
                anotherMovie?.first_air_date || anotherMovie?.release_date
              )}
            </div>
            <div className="inline-block text-md bg-red-600 pl-1 pr-1 rounded-sm mr-4 opacity-90">
              {anotherMovie?.adult ? 18 : 16}
            </div>
          </div>
          <Tooltip
            title={
              <div>
                <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">
                  Add to My List
                </span>
              </div>
            }
            placement="top"
            arrow
          >
            <AddIcon
              className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 text-white opacity-50 hover:opacity-100 transition duration-[0.2s] ease-in-out"
              style={{ fontSize: "30px" }}
            />
          </Tooltip>
        </div>
        <div className="text-white text-md bg-[#2f2f2f] p-3">
          {add3Dots(anotherMovie?.overview, 105)}
        </div>
      </div>
    </>
  );
}

export default memo(SimilarMovies);
