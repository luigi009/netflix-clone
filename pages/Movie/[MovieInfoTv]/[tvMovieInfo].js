import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import { API_KEY } from '../../Tmdb';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import MoreIcon from '@mui/icons-material/More';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PeopleIcon from '@mui/icons-material/People';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'

function movie() {

    const router = useRouter();
    const [movie, setMovie] = useState({});
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const [ready, setReady] = useState(router.isReady);
    let firstDate =new Date(movie?.release_date);

    const fetch = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${router.query.tvMovieInfo}?api_key=${API_KEY}`)
        .then((response) => {
            setMovie(response.data)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        if(router.asPath !== router.route) {
            fetch()
            setReady(router.isReady)
        }
    }, [router])

    console.log(router)

    let productionCompanies = movie?.production_companies

    let productionCompaniesArray = []
    for(let i in productionCompanies) {
        productionCompaniesArray.push(productionCompanies[i].name)
    }

    let genresMovie = movie?.genres

    let genresArray = [];
    for(let i in genresMovie) {
        genresArray.push(genresMovie[i].name)
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
            <div className="absolute top-[10px] left-[30px]">
                <a onClick={() => router.back()}><ArrowBackIcon className="cursor-pointer opacity-50 hover:opacity-100 transition duration-[0.2s] ease-in-out" style={{ fontSize: "35px" }} /></a>
            </div>
            {ready ?
                    <section className="featured h-screen bg-cover bg-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`}}>
                            <div className="featured--vertical w-[inherit] h-[inherit]" style={{background: 'linear-gradient(to top, #111 10%, transparent 90%)'}}>
                                <div className="featured--horizontal flex flex-col justify-center pl-8 pb-10 pt-9 w-[inherit] h-[inherit]" style={{background: 'linear-gradient(to right, rgb(17 17 17 / 81%) 30%, transparent 70%)'}}>
                                    <div className="featured--name text-4xl font-bold max-w-[40%]" style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}>{movie?.original_title}</div>
                                    <div className="featured--info text-lg font-bold mt-4">
                                        <div className="featured--points inline-block mr-4 text-[#46d369]">{movie?.vote_average} {movie?.vote_average > 1 ? "Points" : "Point"}</div>
                                        <div className="featured--year mr-4 inline-block ">{firstDate.getFullYear()}</div>
                                        <div className="inline-block bg-red-600 pl-1 pr-1 rounded-sm mr-4 opacity-90">{movie?.adult ? 18 : 16}</div>
                                        {movie?.number_of_seasons ?
                                            <div className="featured-seasons inline-block mr-4 ">{movie.number_of_seasons === 1 ? `${movie.number_of_seasons} Season` : `${movie.number_of_seasons} Seasons`}</div>
                                            :
                                            null
                                        }
                                        <div className="inline-block pl-1 pr-1 rounded-sm border-2 bg-black bg-opacity-50 opacity-80">HD</div>
                                    </div>
                                    <div className="featured--description mt-4 sm:mr-3 sm:text-lg text-[#fff] sm:max-w-[40%] font-medium" style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}>{add3Dots(movie?.overview, 200)}</div>
                                    <div className="text-lg font-normal mt-4">
                                        <div className="featured--genres sm:text-lg text-[#999] max-w-[40%]">Genres: {genresArray.join(', ')}</div>
                                        <div className="featured--genres sm:text-lg text-[#999] max-w-[40%]">Creators: {productionCompaniesArray.join(', ')}</div>
                                    </div>
                                    <div className="font-normal mt-6 text-xl">
                                        <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                            <ThumbUpIcon style={{ margin: "0px 15px", fontSize: "25px" }} />
                                            Rate This Title
                                        </div>
                                        <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                            <PlayArrowIcon style={{ margin: "0px 10px", fontSize: "35px" }} />
                                            Play {movie?.number_of_seasons && "Season 1: Episode 1"}
                                        </div>
                                        {
                                        movie?.number_of_seasons ?
                                            <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                                <AutoAwesomeMotionIcon style={{ margin: "0px 15px", fontSize: "25px" }} />
                                                Episodes & More
                                            </div>
                                            : 
                                            null
                                        }
                                        <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                            <MoreIcon style={{ margin: "0px 15px", fontSize: "25px" }} />
                                            More Like This
                                        </div>
                                        <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                            <CommentIcon style={{ margin: "0px 15px", fontSize: "25px" }} />
                                            Audio & Subtitles
                                        </div>
                                        <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                            <PlaylistAddIcon style={{ margin: "0px 15px", fontSize: "25px" }} />
                                            Add to My List
                                        </div>
                                        <div className="flex items-center max-w-[40%] border-2 border-transparent hover:border-2 hover:border-[#fff] transition duration-[0.2s] ease-in-out p-1 mb-2 cursor-pointer text-[#fff] opacity-50 hover:opacity-100">
                                            <PeopleIcon style={{ margin: "0px 15px", fontSize: "25px" }} />
                                            Credits & More Info
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section> 
                :   
                <div className="loading fixed left-0 right-0 top-0 bottom-0 z-[99] bg-black flex justify-center items-center">
                    <img src={prefix + 'https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif'} alt="Carregando" />
                </div>
            }
 
        </>
    )
}

export default movie
