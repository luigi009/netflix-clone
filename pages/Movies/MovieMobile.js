/* eslint-disable @next/next/no-img-element */
import React, { useState, memo } from "react";
import { useRouter } from "next/router";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Tooltip from "@mui/material/Tooltip";
import MovieDetail from "../MovieDetail";
import { movieDate } from "../../Utilities/movieDate";

function Movie({
  item,
  poster,
  index,
  anotherMovies,
  anotherMoviesNumber,
  category,
  searchMovie,
}) {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const imagePoster = prefix + "https://image.tmdb.org/t/p/w500" + poster;

  function movieInformationAble() {
    let movieInfo = document.getElementById(
      `${category}-${index}-movie-info-${
        item?.original_title || item?.title || item?.name
      }`
    );

    if (movieInfo) {
      movieInfo.classList.remove("hidden");
      movieInfo.classList.add("block");
    }
  }

  function movieInformationAbleSearch() {
    let movieInfo = document.getElementById(
      `${category}-${index}-movie-info-${
        item?.original_title || item?.title || item?.name
      }`
    );

    if (movieInfo) {
      movieInfo.classList.remove("hidden");
      movieInfo.classList.add("block");
      movieInfo.classList.add("z-[1000]");
    }
  }

  function movieInformationDisable() {
    let movieInfo = document.getElementById(
      `${category}-${index}-movie-info-${
        item?.original_title || item?.title || item?.name
      }`
    );

    if (movieInfo) {
      movieInfo.classList.remove("block");
      movieInfo.classList.add("hidden");
    }
  }

  function movieInformationDisableSearch() {
    let movieInfo = document.getElementById(
      `${category}-${index}-movie-info-${
        item?.original_title || item?.title || item?.name
      }`
    );

    if (movieInfo) {
      movieInfo.classList.remove("block");
      movieInfo.classList.add("hidden");
      movieInfo.classList.remove("z-[1000]");
    }
  }

  return (
    <>
      <div
        onMouseLeave={() => {
          if (!searchMovie?.length) {
            movieInformationDisable();
          } else {
            movieInformationDisableSearch();
          }
        }}
        id={`${category}-${index}-movie-card-${
          item?.original_title || item?.title || item?.name
        }`}
        className="movieRow--item sm:inline-block lg:hidden mobile:mr-72 w-[500px] transition duration-[0.2s] ease-in-out transform scale-[0.9] hover:scale-[1] mobile:inline-block mobile:mb-5 mobile:ml-5 mobile:mt-5 mobile:w-[200px] mobile:h-[300px]"
      >
        <div
          id={`movie-img-${item?.original_title || item?.title || item?.name}`}
        >
          <div
            className="cursor-pointer"
            onMouseOver={() => {
              if (!searchMovie?.length) {
                movieInformationAble();
              } else {
                movieInformationAbleSearch();
              }
            }}
          >
            <img
              className="w-auto max-w-screen-md cursor-pointer"
              src={imagePoster}
              alt={item?.original_title}
              title={item?.original_title}
            />
          </div>
          <div
            className="hidden absolute w-full bg-black pt-3 pb-3 pl-0.5 pr-0.5"
            id={`${category}-${index}-movie-info-${
              item?.original_title || item?.title || item?.name
            }`}
          >
            <div className="featured--info text-lg font-bold mt-4">
              <div className="featured--points inline-block pl-1 mr-4 text-[#46d369]">
                {item?.vote_average}{" "}
                {item?.vote_average > 1 ? "Points" : "Point"}
              </div>
              <div className="featured--year mr-4 inline-block ">
                {movieDate(item?.first_air_date || item?.release_date)}
              </div>
              <div className="inline-block bg-red-600 pl-1 pr-1 rounded-sm mr-4 opacity-90">
                {item?.adult ? 18 : 16}
              </div>
              <div className="inline-block pl-1 pr-1 rounded-sm border-2 bg-black bg-opacity-50 opacity-80">
                HD
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Movie);
