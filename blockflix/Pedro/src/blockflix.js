import "./styles/globalstylesIndex.css";
import { routes } from "./route/route.js";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import { useContext } from "react";
import { CartMovieContext } from "./context/cartmoviescontext";

export default function BlockFlix() {
  const { loged, setLoged } = useContext(CartMovieContext);
  const useLoc = useLocation();
  setLoged(sessionStorage.getItem("login"));
  
  return (
    <>
      <Switch>
        {
          routes.map((route) => {
            const Component = route.component;
            return (
              <Route key={route.path} path={route.path} exact >
                {
                  route.path === "/" ? "" : <NavBar />
                }
                {
                  route.path === "/" && useLoc.pathname === "/" && loged !== null ? <Redirect to="/home" /> : ""
                }
                {
                  route.path !== "/" && useLoc.pathname !== "/" && loged === null ? <Redirect to="/" /> : ""
                }
                <Component />
              </Route>
            )
          })
        }
        <Redirect to="/" />
      </Switch>
    </>
  );
}

