import { useContext } from "react";
import { CartMovieContext } from "../../context/cartmoviescontext";
import { moviePrice, APIKEY, LANGUAGE, movieDetailsReturn } from "../../dados/config";
import { CardContainer, CardImg, CardInfo, CardTextTitle, CardGroupButton, CardButtonAddCart, CardTextValue, CardTextDate, Text,Toast } from "./card.style";

function longData(date) {
    if (date === undefined) return "";
    const meses = { "01": "Janeiro", "02": "Fevereiro", "03": "Março", "04": "Abril", "05": "Maio", "06": "Junho", "07": "Julho", "08": "Agosto", "09": "Setembro", "10": "Outubro", "11": "Novembro", "12": "Dezembro" };
    const dateLong = date.split('-').reverse()
    return (dateLong[0] + " " + meses[String(dateLong[1])] + " de " + dateLong[2])
}

export default function Card({ movie }) {
    const movieValue = movie;
    const { addMovieCart } = useContext(CartMovieContext);
    let movieValues = moviePrice(movieValue);

    async function addMovie(props) {
        const movieDetails = await movieDetailsReturn(props.target.id, APIKEY, LANGUAGE)
        const movieDados = {}
        movieDados.id = movieDetails.id;
        movieDados.title = movieDetails.title;
        movieDados.poster_path = movieDetails.poster_path;
        movieDados.genres = movieDetails.genres;
        movieDados.release_date = movieDetails.release_date;
        movieDados.title = movieDetails.title;
        movieDados.vote_average = movieDetails.vote_average;
        addMovieCart(movieDados)
    }

    return (
        <div>
            <CardContainer>
                <CardImg src={movie.poster_path === null ? "./img/noposter.jpg" : "http://image.tmdb.org/t/p/w185" + movie.poster_path} />
                <CardInfo>
                    <CardTextTitle href={"/moviedetails/" + movie.id}>{movie.title}</CardTextTitle>
                    <CardTextDate>{longData(movie.release_date)}</CardTextDate>
                    <CardGroupButton>
                        <CardTextValue>
                            R$ {(movieValues.totalValue).toFixed(2)}<br />
                            {movieValues.discountMovieGenre.totalDiscount !== 0 ? <Text>R$ {(movieValues.originalValue).toFixed(2)}</Text> : ""}
                        </CardTextValue>
                        <CardButtonAddCart w="40" h="40" font="30" className="material-icons md-24" id={movie.id} onClick={addMovie}>add_shopping_cart</CardButtonAddCart>
                    </CardGroupButton>
            </CardInfo>
        </CardContainer>
        </div>
    )
}