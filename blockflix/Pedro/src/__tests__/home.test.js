import React from "react";
import Home from "../pages/home";
import { CartMoviesProvider } from "../context/cartmoviescontext";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test("teste > Page > Checkout.js", () => {
    const { container, getByText } = render(<CartMoviesProvider><Home/></CartMoviesProvider>)
    // container.stateNode.context("{useState:''}")
})

