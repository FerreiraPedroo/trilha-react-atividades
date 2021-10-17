import React from "react";
import Card from "../components/card/card";
import Carousel from "../components/carrousel/carousel";
import { CartMoviesProvider } from "../context/cartmoviescontext"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'


const movie ={
    "adult": false,
    "backdrop_path": "/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg",
    "genre_ids": [
        878,
        28
    ],
    "id": 580489,
    "original_language": "en",
    "original_title": "Venom: Let There Be Carnage",
    "overview": "O relacionamento entre Eddie e Venom (Tom Hardy) está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados.",
    "popularity": 12374.3,
    "poster_path": "/kz7xJLowO4x0BpcB1IJb9uIXgrq.jpg",
    "release_date": "2021-09-30",
    "title": "Venom: Tempo de Carnificina",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 395
}

test("teste > Component > Carrousel.js", async () => {
    const { container, getByText } = render(<CartMoviesProvider><Carousel show="1"><Card movie={movie} /></Carousel></CartMoviesProvider>)
    expect(getByText("Venom: Tempo de Carnificina")).toBeInTheDocument()

})

