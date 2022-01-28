import React, { useState, useEffect, memo } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { API_KEY } from "./Tmdb";
import axios from 'axios';
import SimilarMovies from "./SimilarMovies";
import { useRouter } from 'next/router'
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { add3Dots } from '../Utilities/add3Dots';
import { playIconAbleOrDisable } from '../Utilities/playIconAbleOrDisable';
import { showMoreCards } from '../Utilities/showMoreCards';
import { getListOfArray } from '../Utilities/getListOfArray';
import { movieDate } from '../Utilities/movieDate';

function MovieDetail({ item, handleClickOpen, close, anotherMovies, anotherMoviesNumber }) {

  const router = useRouter()
  const [movieDetail, setMovieDetail] = useState({})
  const [showMoreOrLess, setShowMoreOrLess] = useState(true)

  //Session Tabs 
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

    const fetch = async () => {
    await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}?api_key=${API_KEY}`)
    .then((response) => {
        setMovieDetail(response.data)
    }).catch(error => console.log(error))
    }

    useEffect(() => {
    fetch()
    },[])

    let arrayEpisodes = [];

    for( var i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
      arrayEpisodes.push(
        <>
          <div className="text-[#fff] flex flex-row">
            <div className="text-[#d2d2d2] flex justify-center items-center text-3xl w-2/12">{i+1}</div>
            <div className="h-[50vh] w-10/12 bg-no-repeat bg-center h-[140px]" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`, backgroundSize: "100%"}}>
              <div className="flex justify-center items-center h-full">
                <svg class="w-5/12 h-5/12 hidden" id={`episode-play-icon-${i}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
              <div className="flex flex-col">
                <div className="w-full flex flex-row justify-between">
                  <div className="text-xl pl-4 pt-4">{item?.original_title || item?.title || item?.name}</div>
                    <div className="text-xl pl-4 pt-4">{Math.floor(Math.random() * 60) + 1}min</div>
                  </div>
              <div className="text-md pl-4 pt-4 w-full">
                {add3Dots(item?.overview, 180)}
              </div>
            </div>
          </div>
        </>
      )
    }

    return (
        <>
        <Dialog
        open={handleClickOpen}
        onClose={close}
        maxWidth="md"
        scroll="body"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ padding: "0px" }}>
          <CloseIcon onClick={close} className="cursor-pointer absolute top-[10px] right-[10px] bg-black rounded-full p-1" style={{ fontSize: "40px", color: "#fff" }} />
          <div className="featured h-[50vh] bg-cover bg-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`}}>
                <div className="featured--vertical w-[inherit] h-[inherit]" style={{background: 'linear-gradient(rgb(17 17 17 / 0%) 30%, rgba(0, 0, 0) 90%)'}}>
                    <div className="featured--horizontal flex flex-col justify-end pl-6 pb-10 pt-9 w-[inherit] h-[inherit]">
                        <div className="featured--year mr-4 inline-block text-4xl text-white max-w-[40%] font-bold" style={{ textShadow: "2px 2px 4px rgb(0 0 0 / 45%)" }}>{item?.original_title || item?.title || item?.name}</div>
                        {movieDetail?.number_of_seasons ? 
                          <div className="featured--info text-lg font-bold mt-4">
                              <div className="featured-seasons inline-block mr-4">{movieDetail?.number_of_seasons !== 1 ? `${movieDetail?.number_of_seasons} Temporadas` : `${movieDetail?.number_of_seasons} Temporada`}</div>
                          </div>  
                          :
                          null
                          }
                        <div className="featured--buttons mt-4">
                            <a onClick={() => {
                                  router.push({
                                  pathname: "/Movie/[MovieInfoTv]/[tvMovieInfo]",
                                  query: {
                                      MovieInfoTv: movieDetail?.original_title || movieDetail?.title || movieDetail?.name,
                                      tvMovieInfo: movieDetail?.id,
                                      }
                                  });
                                  }}
                              className="cursor-pointer featured--watchbutton inline-block sm:text-2xl font-bold pt-0.5 pb-0.5 pr-5 pl-5 mr-3 rounded-md no-underline bg-white text-black opacity-100 hover:opacity-90 transition duration-[0.2s] ease-in-out">
                                <PlayArrowIcon style={{ fontSize: "35px" }} /> 
                                Play
                            </a>
                            <Tooltip 
                                    title={
                                        <div>
                                            <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">Add to My List</span>
                                        </div>
                                    }  
                                placement="top" arrow>
                              <AddIcon className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 text-white mr-3 opacity-50 hover:opacity-100 transition duration-[0.2s] ease-in-out" style={{ fontSize: "40px" }} />
                            </Tooltip>

                            <Tooltip 
                                    title={
                                        <div>
                                            <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">I like this</span>
                                        </div>
                                    }  
                                placement="top" arrow>
                              <ThumbUpOffAltIcon className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1 text-white mr-3 opacity-50 hover:opacity-100 transition duration-[0.2s] ease-in-out" style={{ fontSize: "40px" }} />
                            </Tooltip>

                            <Tooltip 
                                title={
                                        <div>
                                            <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">Not for me</span>
                                        </div>
                                    }  
                                placement="top" arrow>
                              <ThumbDownOffAltIcon className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1 text-white mr-3 opacity-50 hover:opacity-100 transition duration-[0.2s] ease-in-out" style={{ fontSize: "40px" }} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black p-3">
              <div className="flex flex-row justify-between">

                <div className="max-w-[50%] p-2">
                  <div className="text-lg font-bold">
                    <div className="featured--points inline-block mr-4 text-[#46d369]">{item?.vote_average} {item?.vote_average > 1 ? "Points" : "Point"}</div>
                    <div className="featured--year mr-4 inline-block text-white">{movieDate(item?.release_date)}</div>
                    <div className="inline-block bg-red-600 pl-1 pr-1 text-white rounded-sm mr-4 opacity-90">{item?.adult ? 18 : 16}</div>
                    {movieDetail?.number_of_seasons ?
                        <div className="featured-seasons inline-block mr-4 ">{movieDetail.number_of_seasons === 1 ? `${movieDetail.number_of_seasons} Season` : `${movieDetail.number_of_seasons} Seasons`}</div>
                        :
                        null
                    }
                    <div className="inline-block pl-1 pr-1 rounded-sm border-2 bg-black text-white bg-opacity-50 opacity-80">HD</div>
                  </div>
                  <div className="font-medium featured--description mt-4 sm:text-lg text-[#fff]">{add3Dots(item?.overview, 1000)}</div>
                </div>

                <div className="w-[50%] max-w-[50%] p-2">
                  <div className="featured--genres sm:text-lg text-white"><strong>Genres:</strong> {getListOfArray(movieDetail?.genres)}</div>
                  <div className="featured--genres sm:text-lg text-white"><strong>Creators:</strong> {getListOfArray(movieDetail?.production_companies)}</div>
                </div>

              </div>
            </div>
            <div className="bg-[#000] pl-6 pr-6">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab value={0} label={<span className="text-xl text-[#fff]">Session 1</span>} wrapped />
                <Tab value={1} label={<span className="text-xl text-[#fff]">Session 2</span>} />
                <Tab value={2} label={<span className="text-xl text-[#fff]">Session 3</span>} />
              </Tabs>
              <TabPanel className="mt-4" value={value} index={0}>

                {arrayEpisodes.map((episode, index) => {
                  return (
                    <>
                      <div 
                        onMouseOver={() => {playIconAbleOrDisable("able", index)}} 
                        onMouseOut={() => {playIconAbleOrDisable("disable", index)}} 
                        className={`w-auto cursor-pointer p-6 border-b-2 border-[#404040] ${index === 0 ? `bg-[#333] rounded-lg` : null}`} 
                        key={index}>{episode}
                      </div>      
                    </>
                  )
                })}

              </TabPanel>
              <TabPanel className="mt-4" value={value} index={1}>

              {arrayEpisodes.map((episode, index) => {
                  return (
                    <>
                      <div 
                        onMouseOver={() => {playIconAbleOrDisable("able", index)}} 
                        onMouseOut={() => {playIconAbleOrDisable("disable", index)}} 
                        className={`w-auto cursor-pointer p-6 border-b-2 border-[#404040] ${index === 0 ? `bg-[#333] rounded-lg` : null}`} 
                        key={index}>{episode}
                      </div>                    
                    </>
                  )
                })}

              </TabPanel>
              <TabPanel className="mt-4" value={value} index={2}>

              {arrayEpisodes.map((episode, index) => {
                  return (
                    <>
                      <div 
                        onMouseOver={() => {playIconAbleOrDisable("able", index)}} 
                        onMouseOut={() => {playIconAbleOrDisable("disable", index)}} 
                        className={`w-auto cursor-pointer p-6 border-b-2 border-[#404040] ${index === 0 ? `bg-[#333] rounded-lg` : null}`} 
                        key={index}>{episode}
                      </div>
                    </>
                  )
                })}

              </TabPanel>
            </div>
            <div className="bg-black p-4">
              <div className="text-white text-3xl font-bold">More Like This</div>
              <div className="grid grid-cols-3 gap-6 p-6 border-b-2 border-white">
                  {anotherMoviesNumber && anotherMovies.map((anotherMovie, index) => {
                      return (
                        <>{(!showMoreOrLess ? index : index <= 2) && anotherMovie?.backdrop_path && anotherMovie.overview && (anotherMovie.first_air_date || anotherMovie?.release_date) && anotherMovie?.id !== movieDetail?.id ?
                            <SimilarMovies
                            key={index}
                            anotherMovie={anotherMovie}
                            anotherMoviesNumber={anotherMoviesNumber}
                            anotherMovies={anotherMovies}
                            showMoreOrLess={showMoreOrLess}
                        />
                        :
                        null
                        }
                      </>
                      )
                  })}
              </div>
              <div className="flex w-full justify-center content-center">
                  {showMoreOrLess ?
                    <KeyboardArrowDownIcon onClick={() => showMoreCards(false, setShowMoreOrLess)} className="inline-block relative bottom-[21px] text-white border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1" style={{ fontSize: "45px" }} />
                    :
                    <KeyboardControlKeyIcon onClick={() => showMoreCards(true, setShowMoreOrLess)} className="inline-block relative bottom-[21px] text-white border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1" style={{ fontSize: "45px" }} />
                    }
              </div>
            </div>
          </DialogContent>  
      </Dialog>
        </>
    )
}

export default memo(MovieDetail);
