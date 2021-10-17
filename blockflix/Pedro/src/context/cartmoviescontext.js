import React, { createContext, useState } from "react";
export const CartMovieContext = createContext();

export function CartMoviesProvider({ children }) {
    const [cartMovieList, setCartMovieList] = useState(localStorage.cartlist === undefined ? [] : JSON.parse(localStorage.getItem("cartlist")));
    const [loged, setLoged] = useState(sessionStorage.login === undefined ? null : sessionStorage.getItem("login"));
    const [orderList, setOrderList] = useState(localStorage.orders === undefined ? [] : JSON.parse(localStorage.getItem("orders")));
    const [toast, setToast] = useState(false)

    const addMovieCart = (movie) => {
        const movieDados = {}
        let toastNotification = true;
        movieDados.id = movie.id;
        movieDados.title = movie.title;
        movieDados.poster_path = movie.poster_path;
        movieDados.genres = movie.genres;
        movieDados.release_date = movie.release_date;
        movieDados.title = movie.title;
        movieDados.vote_average = movie.vote_average;
        setCartMovieList((prevstate) => {
            if (prevstate.find((m) => m.id === movieDados.id)) {
                toastNotification = false;
                return prevstate;
            }
            if(toastNotification === true ){ toastBar()};

            console.log("toastNotification")
            localStorage.setItem("cartlist", JSON.stringify(prevstate.concat(movieDados)));            
            return prevstate.concat(movieDados);
        });

    };

    const removeMovieCart = (id) => {
        const movieRemoveId = Number(id);
        setCartMovieList((prevState) => {
            const movieRemoveFiltered = prevState.filter((p) => p.id !== movieRemoveId);
            localStorage.setItem("cartlist", JSON.stringify(movieRemoveFiltered));
            return movieRemoveFiltered;
        });
    };

    const toastBar = () => {
        setToast(true)
        return setTimeout(() => setToast(false), 800);
    }

    return (
        <CartMovieContext.Provider
            value={{
                cartMovieList,
                setCartMovieList,
                loged,
                setLoged,
                addMovieCart,
                removeMovieCart,
                orderList,
                toast,
                toastBar
            }}>
            {children}
        </CartMovieContext.Provider>
    )
}
