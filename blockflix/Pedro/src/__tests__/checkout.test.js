import React from "react";
import CheckOut from "../pages/checkout";
import { CartMoviesProvider } from "../context/cartmoviescontext";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


test("teste > Page > Checkout.js", () => {
    
    const { container, getByText } = render(<CartMoviesProvider><CheckOut/></CartMoviesProvider>)
    // console.log(container)

})

