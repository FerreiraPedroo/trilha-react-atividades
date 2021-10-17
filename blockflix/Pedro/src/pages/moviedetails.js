import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import YouTube from "react-youtube";
import { CartMovieContext } from "../context/cartmoviescontext";
import { APIKEY, LANGUAGE, movieDetailsReturn, moviePrice, movieImagensReturn } from "../dados/config";

import Actors from "./moviedetails/actors";
import Poster from "./moviedetails/posters";
import Recommendations from "./moviedetails/recommendations";
import {
    ContainerPage, ContainerCenter, ContainerLeft, ContainerRight, ContainerMiddle,
    TextTitle, TextTagLine, TextInfo, TextTrailer, CartIcon,
    ImgPoster, ButtonAddCart
} from "../styles/moviedetails.style"

export default function MovieDetails() {
    const { id } = useParams();
    const { addMovieCart } = useContext(CartMovieContext)
    const [movieDetailsData, setMovieDetailsData] = useState();
    const [movieImages, setMovieImages] = useState();
    const history = useHistory();
    let movieValues = {};

    async function addMovie() {
        addMovieCart(movieDetailsData)
        history.push("/checkout")
    }
    
    useEffect(() => {
        (async () => {
            setMovieDetailsData(await movieDetailsReturn(id, APIKEY, LANGUAGE))
            setMovieImages(await movieImagensReturn(id, APIKEY, LANGUAGE))
        })()
    }, [])

    if (movieDetailsData !== undefined) movieValues = moviePrice(movieDetailsData)
    if (movieImages === undefined || movieDetailsData === undefined) return (<></>)

    return (
        <ContainerPage>
            <ContainerCenter key={"movieDetailsData.id"} bg={movieImages.backdrops.length !== 0 ? "http://image.tmdb.org/t/p/w1280" + movieImages.backdrops[parseInt(Math.random() * movieImages.backdrops.length)].file_path : ""}>
                <ContainerLeft>
                    <TextTitle>{movieDetailsData.title}</TextTitle>
                    <TextTagLine>{movieDetailsData.tagline}</TextTagLine>
                    <TextInfo F="24" grey>{movieDetailsData.release_date.slice(0, 4)} | {movieDetailsData.runtime} minutos</TextInfo>
                    <TextInfo F="24" grey>Gêneros:
                        {movieDetailsData.genres.map((genre, index) => {
                            return <TextInfo F="22" key={genre.name}> {genre.name}{index === movieDetailsData.genres.length - 1 ? "" : ", "}</TextInfo>
                        })}
                    </TextInfo>
                    {movieDetailsData.overview.length === 0 ? "" : <TextInfo F="24" grey>Sinopse: <TextInfo F="24">{movieDetailsData.overview}</TextInfo></TextInfo>}
                </ContainerLeft>
                <ContainerRight>
                    <ImgPoster src={"http://image.tmdb.org/t/p/w300" + movieDetailsData.poster_path} alt="POSTER" />
                    <ButtonAddCart font="24" id={movieDetailsData.id} onClick={addMovie}>
                        <CartIcon className="material-icons md-48">add_shopping_cart</CartIcon>
                        <div>
                            R${movieValues.totalValue.toFixed(2)}
                            <br />
                            {
                                movieValues.discountMovieGenre.totalDiscount === 0 ? "" :
                                    <TextInfo decoration grey>
                                        R${movieValues.originalValue.toFixed(2)}
                                    </TextInfo>
                            }
                        </div>
                    </ButtonAddCart>
                </ContainerRight>
            </ContainerCenter>
            <ContainerMiddle>
                {
                    movieDetailsData.videos.results.length > 0 ?
                        <>
                            <TextTrailer >TRAILER</TextTrailer>
                            <YouTube className="global-style-css-youtube-size" videoId={movieDetailsData.videos.results[0].key} />
                        </>
                        : ""
                }

                <Actors id={id} apiKey={APIKEY} />

                {
                    movieImages.posters.length > 0 ?
                        <Poster id={id} postersImg={movieImages} />
                        : ""
                }

                <Recommendations id={id} apiKey={APIKEY} />
            </ContainerMiddle>
        </ContainerPage>
    )
}