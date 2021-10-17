import { useContext } from "react";
import { OrdersContainer, ContainerOrders, CheckOutCard, ContainerMovieInfoLeft, ContainerMovieInfoCenter, Text, TextCart, Button, ImgPoster, Accordion, ContainerOrder, ContainerMovieInfoRight, Container } from "../styles/orders.style"
import { CartMovieContext } from "../context/cartmoviescontext";


export default function Orders() {
    const { orderList } = useContext(CartMovieContext);

    function AccordionOnCLick(props) {
        props.target.classList.toggle("act");
        const accordionPanel = props.target.nextSibling;
        if (accordionPanel.style.maxHeight) {
            accordionPanel.style.maxHeight = null;
        } else {
            accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
        }
    };

    if (orderList.length === 0) {
        return (<><Container><OrdersContainer><TextCart>Histórico de compras</TextCart><Text F="32" center>Sem histórico</Text></OrdersContainer></Container></>);
    }
    return (
        <Container>
        <OrdersContainer>
            <TextCart>Histórico de compras</TextCart>
            {orderList.map(order => {
                return (
                    <Accordion>
                        {console.log(order)}
                        <Button h="48" F="20" className="accordion" onClick={AccordionOnCLick}>Pedido {order.order} - Data {order.date} - Total R${(order.allValues.allMoviesWithoutDiscountValue).toFixed(2)} - Status: Conluido</Button>
                        <ContainerOrders className="panel">
                            {
                                order.movies.map(orderunit => {
                                    return (
                                        <CheckOutCard>
                                            <ImgPoster src={"https://image.tmdb.org/t/p/w92" + orderunit.poster_path} alt="" />
                                            <ContainerMovieInfoLeft>
                                                <Text F="26">{orderunit.title}</Text>
                                            </ContainerMovieInfoLeft>
                                            <ContainerMovieInfoCenter>
                                                <Text F="20" color="silver">Lançamento:<Text F="20"> {orderunit.release_date.slice(0, 4)}</Text></Text>
                                                <Text F="20" color="silver">Duração:<Text F="20"> {orderunit.runtime} minutos</Text></Text>
                                                <Text F="20" color="silver">Gênero: <Text F="20"> {orderunit.genres.map((genre, index) => {
                                                    return (<Text F="20" key={genre.name}>{genre.name}{index === orderunit.genres.length - 1 ? "" : ", "}</Text>)
                                                })}</Text></Text>
                                            </ContainerMovieInfoCenter>
                                            <ContainerMovieInfoRight>
                                                <Text F="24"  color="silver">R$<Text F="24"> {(orderunit.ALLPRICES.totalValue).toFixed(2)}</Text></Text>
                                                {/* <Text font="16" color="silver">Descontos:<Text font="16">6.75</Text></Text> */}
                                            </ContainerMovieInfoRight>
                                        </CheckOutCard>
                                    )
                                })
                            }
                        </ContainerOrders>
                    </Accordion>
                )
            })
            }
        </OrdersContainer>
        </Container>
    )
}