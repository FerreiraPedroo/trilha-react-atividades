import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartMovieContext } from "../context/cartmoviescontext";
import { moviePrice, allMovieDiscountPrice } from "../dados/config";
import { ButtonDetails } from "../components/button/button.style";
import {
    ContainerCheckOut, ContainerListCard, CheckOutCard, ContainerMovieInfoLeft, ContainerMovieInfoCenter, ContainerMovieInfoRight, ContainerCart, ContainerCartValue, ContainerCartValueCenter,Container,Text, TextCart, ImgPoster,} from "../styles/checkout.style";

export default function CheckOut() {
    const { cartMovieList, setCartMovieList, removeMovieCart } = useContext(CartMovieContext);

    function removeItemCart(props) {
        removeMovieCart(props.target.id);
    }
    function cartItensResume() {
        const allValues = allMovieDiscountPrice(cartMovieList);
        return (
            <>
                <ContainerCartValueCenter>
                    <Text F="28" color="silver" >Subtotal </Text>
                    {allValues.allDiscountValue === 0 ? "" : <Text F="28" color="silver">Descontos</Text>}
                    <Text F="8" ><br></br></Text>
                    <Text F="28" >TOTAL</Text>
                </ContainerCartValueCenter>

                <ContainerCartValueCenter>
                    <Text F="28" >R$ {allValues.allMoviesWithoutDiscountValue.toFixed(2)}</Text>
                    {allValues.allDiscountValue === 0 ? "" : (<Text F="28" >R$ {allValues.allDiscountValue.toFixed(2)}</Text>)}
                    <Text F="8" ><br></br></Text>
                    <Text F="28" >R$ {allValues.allMoviesWithDiscountValue.toFixed(2)}</Text>
                </ContainerCartValueCenter>
            </>
        )
    }
    function finishOrder() {
        const orders = localStorage.orders === undefined ? [] : JSON.parse(localStorage.getItem("orders"));
        const allValues = allMovieDiscountPrice(cartMovieList);
        const calulatingAllPrices = cartMovieList.map(movie => {
            const cartMovie = movie
            const movieAllValues = moviePrice(movie);
            cartMovie.ALLPRICES = movieAllValues;
            return cartMovie;
        })
        console.log(allValues)

        const date = new Date(new Date().getTime())
        orders.push(
            {
                order: (parseInt(Math.random() * 10000) + 10000),
                date: date.toLocaleDateString("pt-BR"),
                movies: calulatingAllPrices,
                allValues: allValues
            }
        );
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("cartlist", "[]");
        setCartMovieList([]);
    }

    if (cartMovieList.length === 0) {
        return (<Container><ContainerCheckOut ><TextCart>Carrinho</TextCart><Text F="32" center>Seu carrinho está vasio</Text></ContainerCheckOut ></Container>)
    }
    return (
        <Container>
            <ContainerCheckOut>
            <TextCart>Carrinho</TextCart>                
                <ContainerCart>
                    <Text F="30">Resumo do pedido</Text>
                    <ContainerCartValue>
                        {cartItensResume()}
                    </ContainerCartValue>
                    <ButtonDetails font="20" w="160" h="40" center onClick={finishOrder}>FINALIZAR</ButtonDetails>
                </ContainerCart>

                <ContainerListCard>
                    {cartMovieList.map(movie => {
                        const movieAllValues = moviePrice(movie)
                        return (
                            <CheckOutCard key={movie.id}>
                                <ImgPoster src={"https://image.tmdb.org/t/p/w92/" + movie.poster_path} alt="" />
                                <ContainerMovieInfoLeft>
                                    <Text F="28">{movie.title}</Text>
                                    <Text F="20" color="silver">Lançamento:<Text F="20"> {movie.release_date.slice(0, 4)}</Text></Text>
                                    <Text F="20" color="silver">Gênero: {movie.genres.map((genre, index) => {
                                        return <Text F="20" >{genre.name}{index === movie.genres.length - 1 ? "" : ", "}</Text>
                                    })}</Text>
                                    <Link to={"/moviedetails/" + movie.id}><ButtonDetails font="18" w="128" h="30">Mais detalhes</ButtonDetails></Link>
                                </ContainerMovieInfoLeft>
                                <ContainerMovieInfoCenter>
                                    <Text F="26">R$ {(movieAllValues.totalValue).toFixed(2)}</Text>
                                    {movieAllValues.discountMovieGenre.discountPerGenre.length !== 0 ?
                                        <>
                                            <Text F="20" color="silver" decoration> R$ {(movieAllValues.originalValue).toFixed(2)} </Text>
                                            <Text F="20" color="silver" >Total descontos R$ {(movieAllValues.discountMovieGenre.totalDiscount).toFixed(2)}</Text>
                                            {
                                                movieAllValues.discountMovieGenre.discountPerGenre.map((discount) => {
                                                    return (<><Text F="20" nomargin nowraptext color="silver">&#8226; {discount[0]} R$ {discount[1].toFixed(2)}</Text><Text font="12" nomargin></Text></>)
                                                })
                                            }
                                        </>
                                        : ""
                                    }
                                </ContainerMovieInfoCenter>
                                <ContainerMovieInfoRight>
                                    <ButtonDetails w="40" h="40" id={movie.id} onClick={removeItemCart} font="32" className="material-icons md-48">delete</ButtonDetails>
                                </ContainerMovieInfoRight>
                            </CheckOutCard>
                        )
                    })}
                </ContainerListCard>
            </ContainerCheckOut>
        </Container>
    )
}