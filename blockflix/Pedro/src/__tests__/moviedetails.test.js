import React from "react";
import MovieDetails from "../pages/moviedetails";
import { CartMoviesProvider } from "../context/cartmoviescontext";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// jest.mock("styled-components", ()=>{
//     const styled = (props)=>{return props}
//     return styled
// })    

jest.mock("react-router-dom", () => {
    const useParams = () => { return { id: "" } }
    const useHistory = () => { return {} }
    return { useParams, useHistory }

})

test("teste > Page > Moviesdetaisl.js", () => {
    const { container, getByText } = render(<CartMoviesProvider><MovieDetails /></CartMoviesProvider>)
    // console.log(container)
})
