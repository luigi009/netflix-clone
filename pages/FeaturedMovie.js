import React, { useState, memo, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/router";
import MovieDetail from "./MovieDetail";
import { add3Dots } from "../Utilities/add3Dots";

const FeaturedMovie = ({
  genres,
  backdropPath,
  originalName,
  numberOfSeasons,
  overview,
  featureId,
  movie,
  title,
  featureSimilarMovies,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight - 350,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className="featured h-[80vh] bg-cover bg-center bg-no-repeat mb-44"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropPath})`,
          width: screenSize.width,
          height: screenSize.height,
        }}
      >
        <div
          className="featured--vertical w-[inherit] h-[inherit]"
          style={{
            background: "linear-gradient(to top, #111 10%, transparent 90%)",
          }}
        >
          <div
            className="featured--horizontal mobile:justify-end mobile:pb-96 flex flex-col justify-center pl-8 pb-10 pt-9 w-[inherit] h-[inherit]"
            style={{
              background:
                "linear-gradient(to right, rgb(17 17 17 / 38%) 30%, transparent 70%)",
            }}
          >
            <div className="featured--name mobile:text-9xl mobile:max-w-screen mobile:w-screen text-4xl font-bold">
              {originalName}
            </div>
            <div
              className="featured--year mobile:text-9xl mobile:max-w-screen mobile:w-screen mobile:contents mr-4 inline-block text-4xl max-w-[40%] font-bold"
              style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}
            >
              {title}
            </div>
            {numberOfSeasons ? (
              <div className="featured--info text-lg font-bold mt-4">
                <div className="featured-seasons inline-block mr-4">
                  {numberOfSeasons !== 1
                    ? `${numberOfSeasons} Temporadas`
                    : `${numberOfSeasons} Temporada`}
                </div>
              </div>
            ) : null}
            <div
              className="font-medium featured--description mobile:mt-12 mobile:text-6xl mt-4 sm:mr-3 sm:text-lg text-[#fff] sm:max-w-[40%]"
              style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}
            >
              {add3Dots(overview, 200)}
            </div>
            <div className="featured--buttons mobile:mt-20 mobile:flex mobile:flex-row mt-4 cursor-pointer">
              <div
                onClick={() => {
                  router.push({
                    pathname: "/Movie/[MovieInfoTv]/[tvMovieInfo]",
                    query: {
                      MovieInfoTv: title,
                      tvMovieInfo: featureId,
                    },
                  });
                }}
                className="mobile:text-6xl mobile:p-6 mobile:mr-24 mobile:w-3/12 mobile:text-center mobile:flex mobile:flex-row mobile:justify-evenly mobile:items-center cursor-pointer featured--watchbutton inline-block sm:text-2xl font-bold pt-2 pb-2 pr-5 pl-5 mr-3 rounded-md no-underline bg-white text-black opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out"
              >
                <PlayArrowIcon className="mobile:text-9xl text-4xl" />
                Play
              </div>
              <div
                onClick={handleClickOpen}
                className="mobile:text-6xl mobile:p-6 mobile:w-4/12 mobile:flex mobile:flex-row mobile:justify-evenly mobile:items-center cursor-pointer featured--mylistbutton inline-block sm:text-2xl font-bold pt-2 pb-2 pr-5 pl-5 mr-3 rounded-md no-underline bg-[#6d6d6e] text-white opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out"
              >
                <InfoIcon className="mobile:text-9xl text-4xl text-white pb-2" />
                More Info
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info */}
      <MovieDetail
        item={movie}
        handleClickOpen={open}
        close={handleClose}
        anotherMovies={featureSimilarMovies}
        anotherMoviesNumber={featureSimilarMovies?.length}
      />
    </>
  );
};

export default memo(FeaturedMovie);
