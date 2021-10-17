import { useContext } from "react";
import { CartMovieContext } from "../../context/cartmoviescontext";
import { ContainerNavBar, NavBarButton, NavBarButtonCart, NavBarButtonRight, NavBarButtonCartIcon, TextInfo, TextTitle } from "./navbar.style"

export default function NavBar() {
    const { cartMovieList } = useContext(CartMovieContext);

    return (
        <>
            <ContainerNavBar>
                <NavBarButton>
                    <TextTitle href="/home">BLOCKFLIX</TextTitle>
                </NavBarButton>
                <NavBarButtonRight>
                    <a href="/checkout">
                        <NavBarButtonCart>
                            <TextInfo className="material-icons md-48">shopping_cart</TextInfo>
                            {cartMovieList.length === 0 ? "" :
                                <NavBarButtonCartIcon >{cartMovieList.length > 0 ? cartMovieList.length : ""}</NavBarButtonCartIcon>
                            }
                        </NavBarButtonCart>
                    </a>
                    <a href="/orders">
                        <NavBarButtonCart>
                            <TextInfo className="material-icons md-48">receipt_long</TextInfo>
                        </NavBarButtonCart>
                    </a>
                    <NavBarButtonCart>
                        <TextInfo className="material-icons md-48">account_circle</TextInfo>
                    </NavBarButtonCart>
                </NavBarButtonRight>
            </ContainerNavBar>
        </>
    )
}