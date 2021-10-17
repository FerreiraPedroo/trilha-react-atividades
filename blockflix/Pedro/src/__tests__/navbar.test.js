import React from "react";
import NavBar from "../components/navbar/navbar";

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import {CartMoviesProvider,CartMovieContext} from "../context/cartmoviescontext";

const cartMovieList = [
    {
        "id": 580489,
        "title": "Venom: Tempo de Carnificina",
        "poster_path": "/kz7xJLowO4x0BpcB1IJb9uIXgrq.jpg",
        "genres": [
            {
                "id": 878,
                "name": "Ficção científica"
            },
            {
                "id": 28,
                "name": "Ação"
            }
        ],
        "release_date": "2021-09-30",
        "vote_average": 7.2
    },
    {
        "id": 550988,
        "title": "Free Guy: Assumindo o Controle",
        "poster_path": "/jXlGeLOg2RKHmV9CinVaIB4ijKU.jpg",
        "genres": [
            {
                "id": 35,
                "name": "Comédia"
            },
            {
                "id": 28,
                "name": "Ação"
            },
            {
                "id": 12,
                "name": "Aventura"
            },
            {
                "id": 878,
                "name": "Ficção científica"
            }
        ],
        "release_date": "2021-08-11",
        "vote_average": 7.9
    },
    {
        "id": 568620,
        "title": "G.I. Joe Origens: Snake Eyes",
        "poster_path": "/6IxMW3939dOCjzenwzkWEjgICVq.jpg",
        "genres": [
            {
                "id": 28,
                "name": "Ação"
            },
            {
                "id": 12,
                "name": "Aventura"
            }
        ],
        "release_date": "2021-07-22",
        "vote_average": 6.9
    }
];

afterEach(cleanup)

test("teste : RENDENIZANDO 0 - Carrinho com items : Component > Navbar.js", async () => {

})

test("teste : RENDENIZANDO 1 - Carrinho com items : Component > Navbar.js", async () => {
    const { getByText } = render(
        <CartMoviesProvider>
            <CartMovieContext.Provider value={{
                cartMovieList
            }}>
                <NavBar />
            </CartMovieContext.Provider>
        </CartMoviesProvider>
    )
    expect(getByText("3").textContent).toBe("3");
    expect(getByText("BLOCKFLIX").textContent).toBe("BLOCKFLIX");

})


test("teste : RENDENIZANDO 2 - Carrinho vasio : Component > Navbar.js", async () => {
    render(
        <CartMoviesProvider>
            <CartMovieContext.Provider value={{
                cartMovieList:[]
            }}>
                <NavBar />
            </CartMovieContext.Provider>
        </CartMoviesProvider>
    )
})

