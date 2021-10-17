import React from "react";
import Orders from "../pages/orders"; 
import { CartMoviesProvider } from "../context/cartmoviescontext";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


test("teste > Page > Orders.js", () => {
    const { container, getByText } = render(<CartMoviesProvider><Orders /></CartMoviesProvider>)
    // console.log(container)
})
