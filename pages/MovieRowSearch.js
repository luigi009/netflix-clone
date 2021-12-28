import React, { useState, useEffect } from 'react';
import MovieSearch from './MovieSearch';


const MovieRowSearch = ({ title, results, resultsNumber, searchCategory, searchMovie, setSearchResult }) => {
    const [filteredMovies, setFilteredMovies] = useState( results || [])

      useEffect(() => {
        const filter = () => {

            if (!searchMovie?.length) {
                setFilteredMovies(results);
              } else {
                const filteredMovie = results?.length && results?.filter((movie) => {
                let name = movie?.title?.toLowerCase() || movie?.original_title?.toLowerCase() || movie?.name?.toLowerCase()

                  if (name?.includes(searchMovie.toLowerCase())) {
                    return movie;
                  } else {
                    return "";
                  }
                });
    
                setFilteredMovies(filteredMovie);
            }

        }
        filter()
      }, [searchCategory, searchMovie])

    return (
        <>
                <div className="movieRow--list--result flex flex-row">
                        {resultsNumber && filteredMovies?.map((item, index) => {
                            return (
                            <> 
                                <MovieSearch
                                    index={index}
                                    category={title}
                                    searchMovie={searchMovie}
                                    item={item}
                                    poster={item?.poster_path}
                                    anotherMovies={results}
                                    anotherMoviesNumber={resultsNumber}
                                    setSearchResult={setSearchResult}
                                />
                            </>
                            )
                        })}
                </div>
        </>
    )
}

export default MovieRowSearch