import axios from "axios";
export const APIKEY = "8c4b9c259a7ff3b6a1eba387b6b7faff";
export const LANGUAGE = "pt-BR";
export const HomeNowPlayingQtd = 5

export async function movieTopRatedReturn(apiKey, language, page = 1) {
   const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey + "&language=" + language + "&page=" + page)
   return data.data;
}
export async function movieDetailsReturn(id, apiKey, language) {
   const data = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey + "&language=" + language + "&append_to_response=videos,images&include_image_language=" + language + ",null")
   return data.data;
}
export async function movieActorsReturn(id, apiKey) {
   const data = await axios.get("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=" + apiKey)
   return data.data
}
export async function movieImagensReturn(id, apiKey, language) {
   const data = await axios.get("https://api.themoviedb.org/3/movie/" + id + "/images?api_key=" + apiKey + "&language=" + language + ",en")
   return data.data;
}
export async function movieRecomendationsReturn(id, apiKey) {
   const data = await axios.get("https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=" + apiKey + "&language=" + LANGUAGE + "&page=1")
   return data.data.results
}
export async function movieFilterReturn(apiKey, language, genre, year, page = 1) {
   const genreUrl = genre !== undefined ? "&with_genres=" + genre : ""
   const url = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=" + language + "&sort_by=popularity.desc&include_adult=false&include_video=false&page=" + page + "&primary_release_year=" + year + genreUrl + "&with_watch_monetization_types=flatrate"
   const data = await axios.get(url)
   return data.data.results
}
export function moviePrice(movie) {
   const valueBase = movie.vote_average * 1;
   const genreType = !!movie.genres === true ? 1 : !!movie.genre_ids === true ? 2 : []
   const allGenres = !!movie.genres === true ? movie.genres : !!movie.genre_ids === true ? movie.genre_ids : []

   // desconto geral para todos os filmes
   const discountAll = 0.0;
   // desconto para cade genero especifico do total de generos do filme - verificar "const:genresInfo"
   function genreMovieDiscount(genreIds) {
      const genresMovieIds = genreIds;
      let discountPerGenre = [];
      let totalDiscount = 0;
      // verifica todos os codigos do genero que tem desconto, dos dois tipos, detalhes e geral.
      if (genreType === 1) {
         for (let g = 0; g < genresMovieIds.length; g++) {
            if (genresInfo.genresDiscount[genresMovieIds[g].id] !== undefined && genresInfo.genresDiscount[genresMovieIds[g].id] !== 0) {
               totalDiscount = genresInfo.genresDiscount[genresMovieIds[g].id] + totalDiscount;
               discountPerGenre.push([genresMovieIds[g].name, genresInfo.genresDiscount[String(genresMovieIds[g].id)]]);
            }
         }
      } else {
         for (let g = 0; g < genresMovieIds.length; g++) {
            if (genresInfo.genresDiscount[genresMovieIds[g]] !== undefined && genresInfo.genresDiscount[genresMovieIds[g]] !== 0) {
               totalDiscount = genresInfo.genresDiscount[genresMovieIds[g]] + totalDiscount;
               discountPerGenre.push([genresInfo.genresNames[genresMovieIds[g]], genresInfo.genresDiscount[genresMovieIds[g]]]);
            }
         }
      }
      return { "totalDiscount": totalDiscount, "discountPerGenre": discountPerGenre }
   }
   // pegando todos os descontos por genero
   const discountMovieGenre = genreMovieDiscount(allGenres);
   // Ternário para nenhum filme ficar com o valor negativo, case o seu genero tenha algum desconto grande.
   const totalValue = (valueBase - (discountMovieGenre.totalDiscount + discountAll)).toFixed(2) < 0 ? 0 : (valueBase - (discountMovieGenre.totalDiscount + discountAll)).toFixed(2);
   return { originalValue: parseFloat(valueBase), totalValue: parseFloat(totalValue), discountMovieGenre: discountMovieGenre };
}
export function allMovieDiscountPrice(allCartMovies) {
   const allMovies = allCartMovies;
   let allMoviesValue = [];
   let allValues = { allMoviesWithoutDiscountValue: 0, allMoviesWithDiscountValue: 0, allDiscountValue: 0, allDiscountPerGenre: {} };

   // RETORNA O VALOR DO DESCONTO TOTAL E SEPARADO POR GÊNERO
   function genreMovieDiscount(genreIds) {
      const genresMovieIds = genreIds;
      let discountPerGenre = [];
      let totalDiscount = 0;
      // verifica todos os codigos do genero que tem desconto
      for (let g = 0; g < genresMovieIds.length; g++) {
         if (genresInfo.genresDiscount[genresMovieIds[g].id] !== undefined && genresInfo.genresDiscount[genresMovieIds[g].id] !== 0) {
            totalDiscount = genresInfo.genresDiscount[genresMovieIds[g].id] + totalDiscount;
            discountPerGenre.push([genresMovieIds[g].name, genresInfo.genresDiscount[genresMovieIds[g].id]]);
         }
      }
      return { "totalDiscount": totalDiscount, "discountPerGenre": discountPerGenre }
   }

   // DEFINE O VALOR DE: VALOR DO FILME, VALOR DO FILME COM DESCONTO, VALOR TOTAL DO DESCONTO, VALOR DO DESCONTO POR CATEGORIA.
   allMoviesValue = allMovies.map((movie) => {
      const prices = {};
      prices.ALLPRICE = genreMovieDiscount(movie.genres);
      prices.ALLPRICE.movieValue = movie.vote_average * 1;
      prices.ALLPRICE.movieValueWithDiscount = prices.ALLPRICE.movieValue < prices.ALLPRICE.totalDiscount ? 0 : prices.ALLPRICE.movieValue - prices.ALLPRICE.totalDiscount
      return (prices.ALLPRICE)
   })

   // CALCULA TODOS OS VALORES DE TODOS OS FILMES JUNTOS
   allMoviesValue.forEach((moviesValues) => {
      allValues.allMoviesWithoutDiscountValue = parseFloat((moviesValues.movieValue + allValues.allMoviesWithoutDiscountValue).toFixed(2));
      allValues.allMoviesWithDiscountValue = parseFloat((moviesValues.movieValueWithDiscount + allValues.allMoviesWithDiscountValue).toFixed(2));
      allValues.allDiscountValue = parseFloat((moviesValues.totalDiscount + allValues.allDiscountValue).toFixed(2))
      moviesValues.discountPerGenre.forEach((genre) => {
         allValues.allDiscountPerGenre[genre[0]] = genre[1] + (allValues.allDiscountPerGenre[genre[0]] === undefined ? 0 : allValues.allDiscountPerGenre[genre[0]]);
      })
   })

   return allValues;
}
export const genresInfo =
{
   "genres": [
      {
         "id": 28,
         "name": "Ação"
      },
      {
         "id": 12,
         "name": "Aventura"
      },
      {
         "id": 16,
         "name": "Animação"
      },
      {
         "id": 35,
         "name": "Comédia"
      },
      {
         "id": 80,
         "name": "Crime"
      },
      {
         "id": 99,
         "name": "Documentário"
      },
      {
         "id": 18,
         "name": "Drama"
      },
      {
         "id": 10751,
         "name": "Família"
      },
      {
         "id": 14,
         "name": "Fantasia"
      },
      {
         "id": 36,
         "name": "História"
      },
      {
         "id": 27,
         "name": "Terror"
      },
      {
         "id": 10402,
         "name": "Música"
      },
      {
         "id": 9648,
         "name": "Mistério"
      },
      {
         "id": 10749,
         "name": "Romance"
      },
      {
         "id": 878,
         "name": "Ficção científica"
      },
      {
         "id": 10770,
         "name": "Cinema TV"
      },
      {
         "id": 53,
         "name": "Thriller"
      },
      {
         "id": 10752,
         "name": "Guerra"
      },
      {
         "id": 37,
         "name": "Faroeste"
      }
   ],
   "genresDiscount":
   {
      "28": 0,//"Ação"
      "12": 0,//"Aventura"
      "16": 0,//"Animação"
      "35": 0,//"Comédia"
      "80": 0,//"Crime"
      "99": 0,//"Documentário"
      "18": 0,//"Drama"
      "10751": 0,//"Família"
      "14": 0,//"Fantasia"
      "36": 0,//"História"
      "27": 0,//"Terror"
      "10402": 0,//"Música"
      "9648": 0,//"Mistério"
      "10749": 0,//"Romance"
      "878": 1.0,//"Ficção científica"
      "10770": 0,//"Cinema TV"
      "53": 0,//"Thriller"
      "10752": 0,//"Guerra"
      "37": 0,//"Faroeste"
   },
   "genresNames":
   {
      "28": "Ação",
      "12": "Aventura",
      "16": "Animação",
      "35": "Comédia",
      "80": "Crime",
      "99": "Documentário",
      "18": "Drama",
      "10751": "Família",
      "14": "Fantasia",
      "36": "História",
      "27": "Terror",
      "10402": "Música",
      "9648": "Mistério",
      "10749": "Romance",
      "878": "Ficção científica",
      "10770": "Cinema TV",
      "53": "Thriller",
      "10752": "Guerra",
      "37": "Faroeste",
   }

}
export const certification = {
   "BR": [
      {
         "certification": "12",
         "meaning": "Not recommended for minors under twelve. Scenes can include physical aggression, use of legal drugs and sexual innuendo.",
         "order": 3
      },
      {
         "certification": "14",
         "meaning": "Not recommended for minors under fourteen. More violent material, stronger sex references and/or nudity.",
         "order": 4
      },
      {
         "certification": "10",
         "meaning": "Not recommended for minors under ten. Violent content or inappropriate language to children, even if of a less intensity.",
         "order": 2
      },
      {
         "certification": "18",
         "meaning": "Not recommended for minors under eighteen. Scenes featuring explicit sex, incest, pedophilia, praising of the use of illegal drugs and violence of a strong imagery impact.",
         "order": 6
      },
      {
         "certification": "L",
         "meaning": "General Audiences. Do not expose children to potentially harmful content.",
         "order": 1
      },
      {
         "certification": "16",
         "meaning": "Not recommended for minors under sixteen. Scenes featuring production, trafficking and/or use of illegal drugs, hyper-realistic sex, sexual violence, abortion, torture, mutilation, suicide, trivialization of violence and death penalty.",
         "order": 5
      }
   ],
}
