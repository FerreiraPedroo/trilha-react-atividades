import React from "react";
import Actors from "../pages/moviedetails/actors";
import Carousel from "../components/carrousel/carousel";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const movieId = 580489;
const apiKey = "8c4b9c259a7ff3b6a1eba387b6b7faff";

test("teste > Pages > Moviedetails > Actors.js", async () => {
    const { container, getByText } = render(<Carousel show="1"><Actors id={movieId} apiKey={apiKey} /></Carousel>)


})

