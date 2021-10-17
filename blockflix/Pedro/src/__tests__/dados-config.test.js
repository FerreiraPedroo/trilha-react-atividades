const movieAPI = require("../dados/config")
export const APIKEY = movieAPI.APIKEY;
export const LANGUAGE = movieAPI.LANGUAGE;

test("teste > Dados > Config.js", async() => {
const movieTopRatedReturn = await movieAPI.movieTopRatedReturn(APIKEY,LANGUAGE);
const movieDetailsReturn = await movieAPI.movieDetailsReturn(movieTopRatedReturn.results[0].id,APIKEY,LANGUAGE);
const movieActorsReturn = await movieAPI.movieActorsReturn(movieTopRatedReturn.results[0].id,APIKEY,LANGUAGE);
const movieImagensReturn = await movieAPI.movieImagensReturn(movieTopRatedReturn.results[0].id,APIKEY,LANGUAGE);
const movieRecomendationsReturn = await movieAPI.movieRecomendationsReturn(movieTopRatedReturn.results[0].id,APIKEY);
const movieFilterReturn = await movieAPI.movieFilterReturn(APIKEY,LANGUAGE,movieDetailsReturn.genres,movieTopRatedReturn.results[0].release_date.slice(0,3));
const moviePrice = await movieAPI.moviePrice(movieTopRatedReturn.results[0]);
const allMovieDiscountPrice = await movieAPI.allMovieDiscountPrice([movieDetailsReturn]);
})


