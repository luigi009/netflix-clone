import React, { useState } from "react";
import { useRouter } from 'next/router'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tooltip from '@mui/material/Tooltip';
import MovieDetail from "./MovieDetail";

function Movie({ item, poster, index, anotherMovies, anotherMoviesNumber, category, searchMovie }) {

const [open, setOpen] = useState(false);
const router = useRouter()
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
let firstDate =new Date(item?.first_air_date || item?.release_date);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

function movieInformationAble() {
  let movieInfo = document.getElementById(`${category}-${index}-movie-info-${item?.original_title || item?.title || item?.name}`)

  if(movieInfo) {
    movieInfo.classList.remove("hidden")
    movieInfo.classList.add("block")
  }

}

function movieInformationAbleSearch() {
  let movieInfo = document.getElementById(`${category}-${index}-movie-info-${item?.original_title || item?.title || item?.name}`)

  if(movieInfo) {
    movieInfo.classList.remove("hidden")
    movieInfo.classList.add("block")
    movieInfo.classList.add("z-[1000]")
  }

}

function movieInformationDisable() {
  let movieInfo = document.getElementById(`${category}-${index}-movie-info-${item?.original_title || item?.title || item?.name}`)

  if(movieInfo) {
    movieInfo.classList.remove("block")
    movieInfo.classList.add("hidden")
  }

}

function movieInformationDisableSearch() {
  let movieInfo = document.getElementById(`${category}-${index}-movie-info-${item?.original_title || item?.title || item?.name}`)

  if(movieInfo) {
    movieInfo.classList.remove("block")
    movieInfo.classList.add("hidden")
    movieInfo.classList.remove("z-[1000]")
  }

}

  return (
    <>
      <div 
        onMouseLeave={() => {
          if(!searchMovie?.length)
           { 
             movieInformationDisable();
            } else {
              movieInformationDisableSearch();
            }
          }
        } 
        id={`${category}-${index}-movie-card-${item?.original_title || item?.title || item?.name}`}
        className="movieRow--item inline-block w-[250px] transition duration-[0.2s] ease-in-out transform scale-[0.9] hover:scale-[1]">
          <div id={`movie-img-${item?.original_title || item?.title || item?.name}`}>
        <a
          
          onMouseOver={() => {
            if(!searchMovie?.length) {
              movieInformationAble();
            } else {
              movieInformationAbleSearch();
            }
          }}
          onClick={() => {
            router.push({
              pathname: "/Movie/[MovieInfoTv]/[tvMovieInfo]",
              query: {
                MovieInfoTv: item?.original_title || item?.title || item?.name,
                tvMovieInfo: item?.id,
              }
            });
          }}
        >
          <img
            className="w-auto cursor-pointer"
            src={prefix + `https://image.tmdb.org/t/p/w500${poster}`}
            alt={item?.original_title}
          />
        </a>
        <div className="hidden absolute w-full bg-black pt-3 pb-3 pl-0.5 pr-0.5" id={`${category}-${index}-movie-info-${item?.original_title || item?.title || item?.name}`}>
            <div className="flex justify-evenly">
              <PlayCircleFilledIcon 
                onClick={() => {
                  router.push({
                    pathname: "/Movie/[MovieInfoTv]/[tvMovieInfo]",
                    query: {
                      MovieInfoTv: item?.original_title || item?.title || item?.name,
                      tvMovieInfo: item?.id,
                    }
                  });
                }}
                className="inline-block cursor-pointer" 
                style={{ fontSize: "40px" }} 
                />

              <Tooltip 
                  title={
                  <div>
                    <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">Add to My List</span>
                  </div>
                }  
                placement="top" arrow>
                <AddIcon className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900" style={{ fontSize: "35px" }} />
              </Tooltip>

              <Tooltip 
                title={
                  <div>
                    <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">I like this</span>
                  </div>
                }  
                placement="top" arrow>
                <ThumbUpOffAltIcon className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1" style={{ fontSize: "35px" }} />
              </Tooltip>

              <Tooltip 
                title={
                  <div>
                    <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">Not for me</span>
                  </div>
                }  
                placement="top" arrow>
                <ThumbDownOffAltIcon className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1" style={{ fontSize: "35px" }} />
              </Tooltip>

              <Tooltip 
                title={
                  <div>
                    <span className="bg-white text-black text-base font-bold pt-1 pb-1 pr-2 pl-2 w-screen">More info</span>
                  </div>
                }  
                placement="top" arrow>
                <KeyboardArrowDownIcon onClick={handleClickOpen} className="inline-block border-2 rounded-full border-white cursor-pointer bg-gray-900 p-1" style={{ fontSize: "35px" }} />
              </Tooltip>
            </div>
            <div className="featured--info text-lg font-bold mt-4">
                <div className="featured--points inline-block pl-1 mr-4 text-[#46d369]">{item?.vote_average} {item?.vote_average > 1 ? "Points" : "Point"}</div>
                <div className="featured--year mr-4 inline-block ">{firstDate.getFullYear()}</div>
                <div className="inline-block bg-red-600 pl-1 pr-1 rounded-sm mr-4 opacity-90">{item?.adult ? 18 : 16}</div>
                <div className="inline-block pl-1 pr-1 rounded-sm border-2 bg-black bg-opacity-50 opacity-80">HD</div>
            </div>
          </div>
          </div>
      </div>

      {/* More Info */}
      <MovieDetail
        item={item}
        handleClickOpen={open}
        close={handleClose}
        anotherMovies={anotherMovies}
        anotherMoviesNumber={anotherMoviesNumber} 
      />
    </>
  );
}

export default Movie;
