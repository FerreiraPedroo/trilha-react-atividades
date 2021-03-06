import React, { useEffect, useState, useContext } from "react";
import { CartMovieContext } from "../context/cartmoviescontext";
import { LANGUAGE, APIKEY, HomeNowPlayingQtd, movieTopRatedReturn, movieFilterReturn } from "../dados/config";

import Card from "../components/card/card";
import { Toast } from "../components/toast/toast";
import {
    ContainerPage, ContainerTop, ContainerTopCard, TextTop, TextMiddle,
    ContainerMiddleBar, SelectMovieGenreEspecific, SelectOptions,
    ContainerCenter, ContainerCenterCard
} from "../styles/home.style";

const filteredMovieListOrder = (filteredMovies) => {
    let movies = filteredMovies;
    const moviesOrder = [];
    movies.map(movie => moviesOrder.push(...movie));
    movies = moviesOrder;
    return movies.map(movie => {
        return <Card key={movie.id} movie={movie} />
    })
}

export default function Home() {
    const [nowPlayingList, setNowPlayingList] = useState();
    const [filteredMovies, setFilteredMovies] = useState();
    const { toast } = useContext(CartMovieContext);
    const [filters, setFilters] = useState({ genre: "", year: "", pages: 1 });

    const filterSelectedListMovies = async (filterOption = "") => {
        let filterResult = filters;
        let pagesQtd = [];

        if (filterOption === "") {
            filterResult = { genre: "", year: "", pages: 1 };
        } else if (filterOption.target.name === "filterSelectGenre") {
            filterResult = { ...filterResult, "genre": filterOption.target.value };
        } else if (filterOption.target.name === "filterSelectYear") {
            filterResult = { ...filterResult, "year": filterOption.target.value };
        } else if (filterOption.target.name === "filterSelectPage") {
            filterResult = { ...filterResult, "pages": filterOption.target.value };
        }

        for (let p = 1; p <= Number(filterResult.pages); p++) {
            pagesQtd.push(await movieFilterReturn(APIKEY, LANGUAGE, filterResult.genre, filterResult.year, p));
        }

        setFilteredMovies(pagesQtd)
        setFilters(prevstate => ({ ...prevstate, ...filterResult }))
    }

    useEffect(() => {
        (async () => {
            setNowPlayingList(await movieTopRatedReturn(APIKEY, LANGUAGE));
            filterSelectedListMovies();
        })()
    }, []);

    if (nowPlayingList === undefined || filteredMovies === undefined) return (<></>)
    return (
        <ContainerPage>
            {toast === true ? (<Toast className="show" id="snackbar">Filme adicionado ao carrinho</Toast>) : ""}
            <TextTop>LAN??AMENTOS</TextTop>
            <ContainerTop>
                <ContainerTopCard>
                    {nowPlayingList.results.slice(0, HomeNowPlayingQtd).map(movie => {
                            return <Card key={movie.id} movie={movie} />
                        })}
                </ContainerTopCard>
            </ContainerTop>
            <ContainerMiddleBar>
                <TextMiddle>SELECIONE</TextMiddle>
                <div>
                    <SelectMovieGenreEspecific name="filterSelectPage" onChange={filterSelectedListMovies}>
                        <SelectOptions value="">Quantidade </SelectOptions>
                        <SelectOptions value="1">20 Filmes</SelectOptions>
                        <SelectOptions value="2">40 Filmes</SelectOptions>
                        <SelectOptions value="3">60 Filmes</SelectOptions>
                    </SelectMovieGenreEspecific>
                    <SelectMovieGenreEspecific name="filterSelectGenre" onChange={filterSelectedListMovies}>
                        <SelectOptions value="">G??nero</SelectOptions>
                        <SelectOptions value="28">A????o</SelectOptions>
                        <SelectOptions value="12">Aventura</SelectOptions>
                        <SelectOptions value="16">Anima????o</SelectOptions>
                        <SelectOptions value="35">Com??dia</SelectOptions>
                        <SelectOptions value="80">Crime</SelectOptions>
                        <SelectOptions value="99">Document??rio</SelectOptions>
                        <SelectOptions value="18">Drama</SelectOptions>
                        <SelectOptions value="10751">Fam??lia</SelectOptions>
                        <SelectOptions value="14">Fantasia</SelectOptions>
                        <SelectOptions value="37">Faroeste</SelectOptions>
                        <SelectOptions value="878">Fic????o cient??fica</SelectOptions>
                        <SelectOptions value="10752">Guerra</SelectOptions>
                        <SelectOptions value="36">Hist??ria</SelectOptions>
                        <SelectOptions value="9648">Mist??rio</SelectOptions>
                        <SelectOptions value="10749">Romance</SelectOptions>
                        <SelectOptions value="27">Terror</SelectOptions>
                        <SelectOptions value="53">Thriller</SelectOptions>
                    </SelectMovieGenreEspecific>
                    <SelectMovieGenreEspecific name="filterSelectYear" onChange={filterSelectedListMovies}>
                        <SelectOptions value="">Ano</SelectOptions>
                        <SelectOptions value="2021">2021</SelectOptions>
                        <SelectOptions value="2020">2020</SelectOptions>
                        <SelectOptions value="2019">2019</SelectOptions>
                        <SelectOptions value="2018">2018</SelectOptions>
                        <SelectOptions value="2017">2017</SelectOptions>
                        <SelectOptions value="2016">2016</SelectOptions>
                        <SelectOptions value="2015">2015</SelectOptions>
                        <SelectOptions value="2014">2014</SelectOptions>
                        <SelectOptions value="2013">2013</SelectOptions>
                        <SelectOptions value="2012">2012</SelectOptions>
                        <SelectOptions value="2011">2011</SelectOptions>
                        <SelectOptions value="2010">2010</SelectOptions>
                    </SelectMovieGenreEspecific>
                </div>
            </ContainerMiddleBar>
            <ContainerCenter>
                <ContainerCenterCard>
                    {filteredMovieListOrder(filteredMovies)}
                </ContainerCenterCard>
            </ContainerCenter>
        </ContainerPage>
    )
}
