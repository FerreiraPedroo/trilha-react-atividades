import React from "react";
import Poster from "../pages/moviedetails/posters";
import Carousel from "../components/carrousel/carousel";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const moviePosters =
    {
    "posters": [
        {
            "aspect_ratio": 0.667,
            "height": 3000,
            "iso_639_1": "en",
            "file_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
            "vote_average": 5.69,
            "vote_count": 15,
            "width": 2000
        },
        {
            "aspect_ratio": 0.667,
            "height": 1500,
            "iso_639_1": "en",
            "file_path": "/dpZiZ6RfhzZzqlN0em0OgJPgs4r.jpg",
            "vote_average": 5.384,
            "vote_count": 2,
            "width": 1000
        },
        {
            "aspect_ratio": 0.667,
            "height": 1500,
            "iso_639_1": "en",
            "file_path": "/p0pFdTE0qQGixIEVJVvlYuDK2om.jpg",
            "vote_average": 5.318,
            "vote_count": 3,
            "width": 1000
        },
        {
            "aspect_ratio": 0.667,
            "height": 1500,
            "iso_639_1": "en",
            "file_path": "/bsqsBWbqRGENS9x17Xa0WIuGvpb.jpg",
            "vote_average": 5.258,
            "vote_count": 6,
            "width": 1000
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/73oOU4JpvLjaVnTploprWQZvYnU.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/dg3k7s1Gcz2UofulP7iBE4qULXX.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/7l0E2HuBzcjjuYoa9F6txMlnjRj.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/lYsw2eM6kMDkklVpHTU9chGSXV6.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/vPpGVoSuJkcTgHlPuWhHIC94HAn.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 3000,
            "iso_639_1": "en",
            "file_path": "/fIHzn5W9ghnHnMvc3iSoZlwsy5m.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 2000
        },
        {
            "aspect_ratio": 0.667,
            "height": 1500,
            "iso_639_1": "en",
            "file_path": "/cbQBRW29dBVr2SvqifMMW0JIF0y.jpg",
            "vote_average": 5.246,
            "vote_count": 2,
            "width": 1000
        },
        {
            "aspect_ratio": 0.667,
            "height": 2883,
            "iso_639_1": "en",
            "file_path": "/rgvvOSusEA4b5vpIbtR6G6xvbUL.jpg",
            "vote_average": 5.19,
            "vote_count": 5,
            "width": 1922
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/klHhFgtUwbrv6V4K8tbmZRhFl2C.jpg",
            "vote_average": 5.19,
            "vote_count": 5,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/mS5vvcAG3Veb4fZmV6v3lLdxAJu.jpg",
            "vote_average": 5.19,
            "vote_count": 5,
            "width": 1900
        },
        {
            "aspect_ratio": 0.667,
            "height": 2850,
            "iso_639_1": "en",
            "file_path": "/9lV28WXUBTz8m1IRAgLYDM5CyS3.jpg",
            "vote_average": 5.18,
            "vote_count": 3,
            "width": 1900
        },
        {
            "aspect_ratio": 0.679,
            "height": 1236,
            "iso_639_1": "en",
            "file_path": "/dhGEtzWqOC2ib0PRo7zO6iQ0WSm.jpg",
            "vote_average": 5.172,
            "vote_count": 1,
            "width": 839
        },
        {
            "aspect_ratio": 0.675,
            "height": 1500,
            "iso_639_1": "en",
            "file_path": "/v7a352UJSCXzSPFnSr5f6WYLbaH.jpg",
            "vote_average": 5.138,
            "vote_count": 8,
            "width": 1012
        },
        {
            "aspect_ratio": 0.676,
            "height": 977,
            "iso_639_1": "en",
            "file_path": "/abvP0LwdxkachOqlleQJbxipq41.jpg",
            "vote_average": 0,
            "vote_count": 0,
            "width": 660
        },
        {
            "aspect_ratio": 0.679,
            "height": 1236,
            "iso_639_1": "en",
            "file_path": "/3PWUU9jbo3Aq9rkcmvps94PbH9x.jpg",
            "vote_average": 0,
            "vote_count": 0,
            "width": 839
        },
        {
            "aspect_ratio": 0.679,
            "height": 1236,
            "iso_639_1": "en",
            "file_path": "/bkxXWHUMnpR5oIE30GaM1AeOEKN.jpg",
            "vote_average": 0,
            "vote_count": 0,
            "width": 839
        }
    ]
}

test("teste > Pages > Moviedetails > Posters.js", async () => {
    const poster_test1 = render(<Carousel show="1"><Poster postersImg={moviePosters} /></Carousel>)
    // cobertura de ramificação "IF"
    const poster_test2 = render(<Carousel show="1"><Poster postersImg={{posters:[]}} /></Carousel>)

})

