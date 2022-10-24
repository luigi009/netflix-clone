import React, { useEffect, useState, memo, Fragment } from "react";
import { getHomeList, getMovieInfo } from "./Tmdb";
import MovieRow from "./MovieRow";
import MovieRowSearch from "./MovieRowSearch";
import FeaturedMovie from "./FeaturedMovie";
import Header from "./Header";
import { featuredMovieSimilar } from "./Tmdb";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { getResultSearch } from "../Utilities/getResultSearch";
import Image from "next/image";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [load, setLoad] = useState(false);
  const [featureSimilarMovies, setFeatureSimilarMovies] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");
  const [searchMovie, setSearchMovie] = useState("");
  const [filteredCategoryMovies, setFilteredCategoryMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  const imageLoadingSource = `${prefix}/img/loading.gif`;

  useEffect(() => {
    const loadAll = async () => {
      setLoad(true);
      let list = await getHomeList();
      //Movie List
      setMovieList(list);

      //Featured Data
      let originals = list.filter((i) => i.slug === "Action");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, "movie");
      setFeaturedData(chosenInfo);

      //Similar movies feature
      let featureSimilar = await featuredMovieSimilar("action");
      setFeatureSimilarMovies(featureSimilar);
      setLoad(false);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const filter = async () => {
      setLoad(true);
      let list = await getHomeList();
      setLoad(false);

      if (!searchCategory?.length) {
        setFilteredCategoryMovies(list);
      } else {
        const filteredCategory =
          list?.length &&
          list?.filter((movie) => {
            if (
              movie.title.toLowerCase().includes(searchCategory.toLowerCase())
            ) {
              return movie;
            } else {
              return "";
            }
          });

        setFilteredCategoryMovies(filteredCategory);
      }
    };

    filter();
  }, [searchCategory, searchMovie]);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRighttArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = getResultSearch() * 250;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <>
      <div className="page">
        <Header
          black={blackHeader}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
        />

        {featuredData && !searchMovie.length ? (
          <FeaturedMovie
            movie={featuredData}
            title={featuredData?.title}
            featureId={featuredData?.id}
            overview={featuredData?.overview}
            numberOfSeasons={featuredData?.number_of_seasons}
            voteAverage={featuredData?.vote_average}
            originalName={featuredData?.original_name}
            backdropPath={featuredData?.backdrop_path}
            genres={featuredData?.genres}
            date={featuredData?.release_date}
            featureSimilarMovies={featureSimilarMovies?.results}
          />
        ) : null}

        {!searchMovie?.length ? (
          <section className={`lists mt-[-250px]`}>
            {filteredCategoryMovies?.map((item, key) => (
              <Fragment key={key}>
                <MovieRow
                  searchCategory={searchCategory}
                  searchMovie={searchMovie}
                  title={item?.title}
                  resultsNumber={item?.items?.results.length}
                  results={item?.items?.results}
                  items={item?.items}
                />
              </Fragment>
            ))}
          </section>
        ) : (
          <div className="mt-20">
            <h2 className="mobile:text-8xl mobile:mb-24 mobile:mt-36 mobile:w-max ml-7 mb-1 font-bold text-2xl max-w-lg tracking-wide">
              Results
            </h2>
            <div>
              <div className="movieRow--left">
                <div
                  onClick={handleLeftArrow}
                  className="movieRow--left z-[99] transition duration-[0.5s] ease-in-out cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 left-0"
                >
                  <NavigateBeforeIcon
                    style={{ width: "50px", height: "50px", fontSize: 50 }}
                  />
                </div>
                <div
                  onClick={handleRighttArrow}
                  className="movieRow--right z-[99] transition duration-[0.5s] ease-in-out cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 right-0"
                >
                  <NavigateNextIcon
                    style={{ width: "50px", height: "50px", fontSize: 50 }}
                  />
                </div>
              </div>
              <div
                style={{ marginLeft: scrollX, width: getResultSearch() * 250 }}
              >
                <section className={`lists mt-[50px] flex flex-row`}>
                  {filteredCategoryMovies?.map((item, key) => (
                    <Fragment key={key}>
                      <MovieRowSearch
                        searchCategory={searchCategory}
                        searchMovie={searchMovie}
                        key={key}
                        title={item?.title}
                        resultsNumber={item?.items?.results.length}
                        results={item?.items?.results}
                        items={item?.items}
                      />
                    </Fragment>
                  ))}
                </section>
              </div>
            </div>
          </div>
        )}

        {load && (
          <div className="loading fixed left-0 right-0 top-0 bottom-0 z-[99] bg-black flex justify-center items-center">
            <Image
              src={imageLoadingSource}
              alt="Carregando"
              width={1000}
              height={500}
            />
          </div>
        )}

        <footer className="mt-7 mb-7 text-center">
          Feito por Luigi Fanaro
          <br />
          Direitos de imagem para Netflix
          <br />
          Os dados foram utilizados do site Themoviedb.org
        </footer>
      </div>
    </>
  );
};

export default memo(Home);
