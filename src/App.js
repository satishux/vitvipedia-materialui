import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";
import "./App.css";

import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import Sobre from "./pages/Sobre";
import Cookies from "./pages/Cookies";
import Afiliacion from "./pages/Afiliacion";
import Productores from "./pages/Productores";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import Producer from "./pages/Producer";
import AvisoLegal from "./pages/AvisoLegal";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import Checkout from "./pages/Checkout";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Articles from "./components/Articles";
import IndividualWinePage from "./components/IndividualWinePage";
import FavoriteWines from "./components/ui/FavoriteWines";

import actions from "./store/actions";

function App({
  user,
  showFav,
  toggleFavWines,
  getPosts,
  getProducts,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const [isLogoClicked, setIsLogoClicked] = useState(false);

  useEffect(() => {
    getPosts();
  }, [getPosts]);


  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setIsLogoClicked={setIsLogoClicked}
          />
          <SwipeableDrawer
            anchor="right"
            open={showFav}
            onClose={() => toggleFavWines()}
            onOpen={() => toggleFavWines()}
          >
            <FavoriteWines />
          </SwipeableDrawer>

          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Inicio
                  setIsLogoClicked={setIsLogoClicked}
                  isLogoClicked={isLogoClicked}
                />
              )}
            />
            <Route exact path="/blog" component={() => <Blog />} />
            <Route exact path="/sobre" component={() => <Sobre />} />
            <Route
              exact
              path="/aprende"
              component={() => <div>Aprende</div>}
            />
            <Route exact path="/contacto" component={() => <Contacto />} />
            <Route
              exact
              path="/productores"
              component={() => <Productores />}
            />
            <Route
              exact
              path="/aviso-legal"
              component={() => <AvisoLegal />}
            />
            {/* <Route exact path="/carrito" component={() => <Cart />} /> */}
            <Route exact path="/registro" component={() => <Register />} />
            <Route exact path="/login" component={() => <Login />} />
            {user && (
              <>
                <Route
                  exact
                  path="/cuenta"
                  component={() => <UserAccount />}
                />
                <Route
                  exact
                  path="/checkout"
                  component={() => <Checkout />}
                />
              </>
            )}
            <Route
              exact
              path="/politica-de-privacidad"
              component={() => <PoliticaPrivacidad />}
            />
            <Route
              exact
              path="/politica-sobre-cookies"
              component={() => <Cookies />}
            />
            <Route
              exact
              path="/afiliacion"
              component={() => <Afiliacion />}
            />
            <Route exact path="/blog/:page" component={() => <Articles />} />
            <Route path="/productores/:name" component={() => <Producer />} />
            <Route
              path="/vino/:name"
              component={() => <IndividualWinePage />}
            />
          </Switch>

          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setIsLogoClicked={setIsLogoClicked}
          />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

const mapDispachToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(actions.getPosts()),
    getProducts: () => dispatch(actions.getProducts()),
    saveFavWines: (data) => dispatch(actions.saveFevoriteWines(data)),
    toggleFavWines: () => dispatch(actions.toggleFavWines()),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    showFav: state.showFav,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
