import React from "react";
import Login from "../pages/login"
import { CartMoviesProvider , CartMovieContext} from "../context/cartmoviescontext";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

test("teste > Page > Login.js", () => {
    const sessionStorage = { login: "" }
    const setLoged = (eve) => { console.log(eve) }
    const loged = null;

        render(
            <CartMoviesProvider>
                <CartMovieContext.Provider value={{
                    setLoged,
                    loged
                }}>
                    <Login />
                </CartMovieContext.Provider>
            </CartMoviesProvider>
        );
    const loginInput = screen.getAllByPlaceholderText("Usuário");
    const passwordInput = screen.getAllByPlaceholderText("Senha");
    const buttonSubmit = screen.getAllByText("Entrar");

    userEvent.type(loginInput, "master");
    userEvent.type(passwordInput, "master");
    userEvent.click(buttonSubmit[0]);
})

test("teste 2> Page > Login.js", () => {
    render(<CartMoviesProvider><Login/></CartMoviesProvider>);
    const loginInput = screen.getAllByPlaceholderText("Usuário");
    const passwordInput = screen.getAllByPlaceholderText("Senha");
    const buttonSubmit = screen.getElementById("formikId");

    userEvent.type(loginInput, "");
    userEvent.type(passwordInput, "");
    fireEvent.submit(buttonSubmit);

})
