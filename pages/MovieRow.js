import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Movie from './Movie'

const MovieRow = ({ title, results, resultsNumber }) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRighttArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = resultsNumber * 250;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }

    return (
        <>
            <div className="movieRow mt-7">
                <h2 className="ml-7 mb-1 font-bold text-2xl max-w-lg tracking-wide">{title}</h2>
                <div className="movieRow--left">
                    <div onClick={handleLeftArrow} className="movieRow--left z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 left-0">
                        <NavigateBeforeIcon style={{width: '50px', height: '50px'}} style={{fontSize: 50}} />
                    </div>
                    <div onClick={handleRighttArrow} className="movieRow--right z-[99] transition duration-[0.5s] ease-in-out lg:opacity-0 cursor-pointer overflow-hidden flex justify-center items-center absolute w-[40px] h-[375px] bg-black bg-opacity-50 right-0">
                        <NavigateNextIcon style={{width: '50px', height: '50px'}} style={{fontSize: 50}} />
                    </div>
                </div>
                <div className="movieRow--listarea overflow-x-hidden pl-7">
                    <div className="movieRow--list" style={{marginLeft: scrollX, width: resultsNumber * 250}}>
                        {resultsNumber && results.map((item, index) => {
                            return (
                            <> 
                                <Movie
                                    key={index}
                                    item={item}
                                    poster={item?.poster_path}
                                />
                            </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieRow