const baseURL = 'https://api.themoviedb.org/3';

const urls ={
    movies: '/discover/movie',
    requests: '/search/movie',
    genres: '/genre/movie/list',
    image_path: 'https://image.tmdb.org/t/p/w500',
    genresById: '?&with_genres='
}

export {baseURL, urls}

// https://api.themoviedb.org/3/search/movie?query=
// https://api.themoviedb.org/3/discover/movie?&with_genres=28
