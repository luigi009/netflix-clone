import React, { useEffect, useState } from 'react';
import { getHomeList, getMovieInfo } from './Tmdb';
import MovieRow from './MovieRow';
import FeaturedMovie from './FeaturedMovie';
import Header from './Header';
import { featuredMovieSimilar } from './Tmdb';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const home = () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
    const [load, setLoad] = useState(false)
    const [featureSimilarMovies, setFeatureSimilarMovies] = useState(null);
    const [searchCategory, setSearchCategory] = useState("");
    const [searchMovie, setSearchMovie] = useState("");
    const [filteredCategoryMovies, setFilteredCategoryMovies] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            setLoad(true)
            let list = await getHomeList();
            //Movie List
            setMovieList(list);

            //Featured Data
            let originals = list.filter(i => i.slug === 'Action');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await getMovieInfo(chosen.id, 'movie')
            setFeaturedData(chosenInfo);

            //Similar movies feature
            let featureSimilar = await featuredMovieSimilar('action')
            setFeatureSimilarMovies(featureSimilar)
            setLoad(false)
        }
        loadAll();
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, []);

    useEffect(() => {
        const filter = async () => {
            setLoad(true)
            let list = await getHomeList();
            setLoad(false)

            if (!searchCategory?.length) {
                setFilteredCategoryMovies(list);
              } else {
                const filteredCategory = list?.length && list?.filter((movie) => {
                  if (movie.title.toLowerCase().includes(searchCategory.toLowerCase())) {
                    return movie;
                  } else {
                    return "";
                  }
                });
    
                setFilteredCategoryMovies(filteredCategory);
            }

        }

        filter()
    }, [searchCategory, searchMovie])

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

              {
                featuredData && !searchMovie.length ?
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
                :
                null
                }

              <section className={`lists ${!searchMovie.length ? "mt-[-250px]" : "mt-[50px] grid gap-4 grid-cols-4"}`}>
                  {filteredCategoryMovies?.map((item, key) => (
                      <MovieRow 
                        searchCategory={searchCategory}
                        searchMovie={searchMovie}
                        key={key} 
                        title={item?.title} 
                        resultsNumber={item?.items?.results.length} 
                        results={item?.items?.results} 
                        items={item?.items} 
                        />
                  ))}
              </section>

              {load &&
                <div className="loading fixed left-0 right-0 top-0 bottom-0 z-[99] bg-black flex justify-center items-center">
                    <img src={prefix + 'https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif'} alt="Carregando" />
                </div>
              }

            <footer className="mt-7 mb-7 text-center">
                    Feito por Luigi Fanaro<br />
                    Direitos de imagem para Netflix<br />
                    Os dados foram utilizados do site Themoviedb.org
            </footer> 
          </div> 
        </>
    )
}

export default home