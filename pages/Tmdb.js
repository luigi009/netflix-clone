export const API_KEY = '48573f16a89b6336dd846c1202ddf5ba';
const API_BASE = 'https://api.themoviedb.org/3';

export const basicFetch = async (endpoint) => {
    const req = fetch(`${API_BASE}${endpoint}`).then((response) => response.json())
    return req;
}

export const getHomeList = async () => {
    return [
        {
            slug: 'Originals',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
        },
        {
            slug: 'Action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
        },
        {
            slug: 'Comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
        },
        {
            slug: 'Horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
        },
        {
            slug: 'Romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
        },
        {
            slug: 'Documentary',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
        },
    ];
}

export const getMovieInfo = async (movieId, type) => {
    let info = {};

    if(movieId) {
        switch(type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
            break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
            break;
            default:
                info = null;
            break
        }
    }

    return info
}

function Tmdb() {
    return(
        <>
        </>
    )

}

export default (Tmdb)