import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/router'
import MovieDetail from "./MovieDetail";

const FeaturedMovie = ({ genres, backdropPath, originalName, numberOfSeasons, overview, featureId, movie, title, featureSimilarMovies }) => {

    const router = useRouter()
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      };

    let genresArray = [];
    for(let i in genres) {
        genresArray.push(genres[i].name)
    }

    function add3Dots(string = '', limit)
    {
    var dots = "...";
    if(string.length > limit) {
        string = string.substring(0,limit) + dots;
    }

        return string;
    }

    return (
        <>
          <section className="featured h-[80vh] bg-cover bg-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropPath})`}}>
              <div className="featured--vertical w-[inherit] h-[inherit]" style={{background: 'linear-gradient(to top, #111 10%, transparent 90%)'}}>
                  <div className="featured--horizontal flex flex-col justify-center pl-8 pb-10 pt-9 w-[inherit] h-[inherit]" style={{background: 'linear-gradient(to right, rgb(17 17 17 / 38%) 30%, transparent 70%)'}}>
                      <div className="featured--name text-4xl font-bold">{originalName}</div>
                      <div className="featured--year mr-4 inline-block text-4xl max-w-[40%] font-bold" style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}>{title}</div>
                      {numberOfSeasons ? 
                        <div className="featured--info text-lg font-bold mt-4">
                            <div className="featured-seasons inline-block mr-4">{numberOfSeasons !== 1 ? `${numberOfSeasons} Temporadas` : `${numberOfSeasons} Temporada`}</div>
                        </div>  
                        :
                        null
                        }
                      <div className="font-medium featured--description mt-4 sm:mr-3 sm:text-lg text-[#fff] sm:max-w-[40%]" style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}>{add3Dots(overview, 200)}</div>
                      <div className="featured--buttons mt-4">
                          <a onClick={() => {
                                router.push({
                                pathname: "/Movie/[MovieInfoTv]/[tvMovieInfo]",
                                query: {
                                    MovieInfoTv: title,
                                    tvMovieInfo: featureId,
                                    }
                                });
                                }}
                             className="cursor-pointer featured--watchbutton inline-block sm:text-2xl font-bold pt-2 pb-2 pr-5 pl-5 mr-3 rounded-md no-underline bg-white text-black opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out">
                              <PlayArrowIcon style={{ fontSize: "35px" }} /> 
                              Play
                          </a>
                          <a onClick={handleClickOpen} className="cursor-pointer featured--mylistbutton inline-block sm:text-2xl font-bold pt-2 pb-2 pr-5 pl-5 mr-3 rounded-md no-underline bg-[#6d6d6e] text-white opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out">
                              <InfoIcon style={{ color: "#fff", fontSize: "35px" }} /> 
                              More Info
                          </a>
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
    )
}

export default FeaturedMovie