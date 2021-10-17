import Login from "../pages/login";
import Home from "../pages/home";
import MovieDetails from "../pages/moviedetails";
import CheckOut from "../pages/checkout";
import Orders from "../pages/orders";

const title = "BlockFlix";

export const routes = [
    {
        path: "/orders",
        component: Orders,
        title: title + "- Ordens",
        login: false,
    },
    {
        path: "/checkout",
        component: CheckOut,
        title: title + "- Checkout",
        login: false,
    },
    {
        path: "/moviedetails/:id",
        component: MovieDetails,
        title: title + "- Descrição",
        login: false,
    },
    {
        path: "/home",
        component: Home,
        title: title + "- Inicio",
        login: false,
    },
    {
        path: "/",
        component: Login,
        title: title + "- Login",
        login: false,
    },
]
