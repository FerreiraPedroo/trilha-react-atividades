import React from "react";
import Recommendations from "../pages/moviedetails/recommendations";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const movieId = 580489;
const apiKey = "8c4b9c259a7ff3b6a1eba387b6b7faff";

test("teste > Pages > Moviedetails > Recomendations.js", async () => {
    const poster_test1 = render(<Recommendations id={movieId} apiKey={apiKey} />)

})
