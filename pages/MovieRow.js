import React, { useState, useEffect, memo, Fragment } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Movie from "./Movies/Movie";
import MovieMobile from "./Movies/MovieMobile";

const MovieRow = ({
  title,
  results,
  resultsNumber,
  searchCategory,
  searchMovie,
}) => {
  const [scrollX, setScrollX] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState(results || []);
  const mobileScreen =
    typeof window !== "undefined" && window.matchMedia("(max-width: 480px)");

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRighttArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = resultsNumber * (mobileScreen ? 510 : 250);
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  function movieRowAble() {
    let movieRow = document.getElementById(`movie-row-${title}`);

    if (movieRow) {
      movieRow.classList.add("relative");
      movieRow.classList.add("z-[10]");
    }
  }

  function movieRowDisable() {
    let movieRow = document.getElementById(`movie-row-${title}`);

    if (movieRow) {
      movieRow.classList.remove("relative");
      movieRow.classList.remove("z-[10]");
    }
  }

  useEffect(() => {
    const filter = () => {
      if (!searchMovie?.length) {
        setFilteredMovies(results);
      } else {
        const filteredMovie =
          results?.length &&
          results?.filter((movie) => {
            let name =
              movie?.title?.toLowerCase() ||
              movie?.original_title?.toLowerCase() ||
              movie?.name?.toLowerCase();

            if (name?.includes(searchMovie.toLowerCase())) {
              return movie;
            } else {
              return "";
            }
          });

        setFilteredMovies(filteredMovie);
      }
    };

    filter();
  }, [results, searchCategory, searchMovie]);

  const rightArrowResponsive = () => {
    let movieRow = document.getElementById(`movie-row-${title}`);
    let movieRowWidth = movieRow?.offsetWidth;
    let movieRowRightArrow = document.getElementById(
      `movie-row-right-arrow-${title}`
    );
    let resizeTimer;

    if (movieRowRightArrow) {
      if (typeof window !== "undefined") {
        resizeTimer = setTimeout(() => {
          if (movieRowWidth < 1024) {
            movieRowRightArrow.style.right = `${movieRowWidth * -3}px`;
          } else {
            movieRowRightArrow.style.right = "0";
          }
        }, 100);
      }
    }
  };

  useEffect(() => {
    rightArrowResponsive();
  }, []);

  window.addEventListener("resize", rightArrowResponsive);

  return (
    <>
      <div
        className="movieRow mobile:mt-[30rem] lg:mt-6"
        id={`movie-row-${title}`}
        onMouseOver={movieRowAble}
        onMouseLeave={movieRowDisable}
      >
        <h2 className="mobile:text-8xl mobile:mb-24 mobile:mt-36 mobile:w-max ml-7 mb-1 font-bold sm:text-6xl lg:text-2xl max-w-lg tracking-wide">
          {title}
        </h2>
        <div className="movieRow--left">
          <div
            id={`movie-row-left-arrow-${title}`}
            onClick={handleLeftArrow}
            className="movieRow--left mobile:h-screen mobile:w-24 z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute sm:w-[70px] sm:h-[725px] lg:w-[40px] lg:h-[375px] bg-black bg-opacity-50 left-0"
          >
            <NavigateBeforeIcon className="mobile:text-28 mobile:h-28 mobile:w-28 text-[50px] sm:w-[100px] sm:h-[100px] lg:h-[50px] lg:w-[50px]" />
          </div>
          <div
            id={`movie-row-right-arrow-${title}`}
            onClick={handleRighttArrow}
            className="movieRow--right mobile:h-screen mobile:w-24 mobile:right-[-300vw] z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute sm:w-[70px] sm:h-[725px] lg:w-[40px] lg:h-[375px] bg-black bg-opacity-50 sm:right-[-225vh] lg:right-0"
          >
            <NavigateNextIcon className="mobile:text-28 mobile:h-28 mobile:w-28 text-[50px] sm:w-[100px] sm:h-[100px] lg:h-[50px] lg:w-[50px]" />
          </div>
        </div>
        <div className="pl-7" id={`row-${title}`}>
          <div
            className="movieRow--list"
            style={{
              marginLeft: scrollX,
              width: resultsNumber * (mobileScreen ? 510 : 250),
            }}
          >
            {resultsNumber &&
              filteredMovies?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <Movie
                      index={index}
                      category={title}
                      item={item}
                      poster={item?.poster_path}
                      anotherMovies={results}
                      anotherMoviesNumber={resultsNumber}
                    />
                  </Fragment>
                );
              })}
            {resultsNumber &&
              filteredMovies?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <MovieMobile
                      index={index}
                      category={title}
                      item={item}
                      poster={item?.poster_path}
                      anotherMovies={results}
                      anotherMoviesNumber={resultsNumber}
                    />
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MovieRow);
