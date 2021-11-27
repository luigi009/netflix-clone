import React from "react";
import { useRouter } from 'next/router'

function Movie({ item, poster }) {

const router = useRouter()
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <div className="movieRow--item inline-block w-[250px]">
        <a
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
            className="w-auto cursor-pointer transition duration-[0.2s] ease-in-out transform scale-[0.9] hover:scale-[1]"
            src={prefix + `https://image.tmdb.org/t/p/w300${poster}`}
            alt={item?.original_title}
          />
        </a>
      </div>
    </>
  );
}

export default Movie;
