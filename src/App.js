import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";
import axios from "axios";
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
// import Cart from '../pages/Cart';


import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Articles from "./components/Articles";
import IndividualWinePage from "./components/IndividualWinePage";
import FavoriteWines from "./components/ui/FavoriteWines";

import actions from "./store/actions";
// import winelist from "./wineList/list";

const consumer_key = "ck_1dba763719cb378e99ec68def39b18b16e9cb3c7";
const consumer_secret = "cs_fac9c617b03b9dc71562585a46772f4103585c48";

function App({
  saveFavWines,
  storeFetchedProducts,
  saveUser,
  saveUserAddress,
  user,
  products,
  updateCart,
  setLoading,
  setCities,
  updateTotals,
  showFav,
  toggleFavWines,
  saveArticles,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const [isLogoClicked, setIsLogoClicked] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const getPosts = async () => {
      try {
        const url = 'https://backend.vitivipedia.com/wp-json/vitivipedia/v1/posts';
        const response = await axios.get(url);
        const posts = response.data; // wordpress format
        if (isMounted) {
          saveArticles(posts);
        }

      } catch (err) {
        console.log(err);

      }
    };

    getPosts();

    return () => {
      isMounted = false;
    };
  }, [saveArticles]);


  // useEffect(() => {
  //   if (!winelist || winelist.length === 0) return;

  //   const favList = [];
  //   winelist.forEach((item) => {
  //     const isWineFav = localStorage.getItem(item.name);
  //     if (isWineFav) {
  //       favList.push(item);
  //     }
  //   });

  //   saveFavWines(favList);
  // }, [saveFavWines]);

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    const validateUser = async () => {
      const parsedUser = JSON.parse(localUser);
      setLoading(true);
      const url = "https://backend.vitivipedia.com/wp-json/jwt-auth/v1/token/validate";
      const response = await axios
        .post(
          url,
          null,
          {
            headers: {
              Authorization: `Bearer ${parsedUser.token}`,
            },
          }
        );
      if (!response.data || response.data.statusCode !== 200) return false;
      saveUser(parsedUser);
      setLoading(false);
      return true;
    }

    const getUserData = async () => {
      const isValid = await validateUser();
      if (!isValid) return;
      const parsedUser = JSON.parse(localUser);
      setLoading(true);
      const url = `https://backend.vitivipedia.com/wp-json/wc/v3/customers/${parsedUser.id}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`;
      const response = await axios.get(url);
      if (!response.data || response.data.statusCode !== 200) return false;

      const { data } = response;
      saveUserAddress(data.shipping);
      setLoading(false);
    }

    if (localUser) {
      getUserData();
    }

  }, [setLoading, saveUserAddress, saveUser]);

  useEffect(() => {
    if (!user || products.length === 0) return;

    const fetchCartItems = async () => {
      const url = "https://backend.vitivipedia.com/wp-json/cocart/v2/cart";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.data || response.data.statusCode !== 200) return false;
      const { data } = response;
      if (data && data.items.length > 0) {
        const updatedCart = data.items.map((item) => {
          const index = products.findIndex((i) => i.id === item.id);
          if (index !== -1) {
            const updatedItem = {
              ...products[index],
              price: parseFloat(item.price),
              quantity: parseInt(item.quantity.value),
              item_key: item.item_key,
              subtotal: parseFloat(item.totals.subtotal),
            };
            return updatedItem;
          }

          return {};
        });

        updateCart(updatedCart);
        updateTotals(data.totals);
      }
    }

    fetchCartItems();

  }, [user, products, updateCart, updateTotals]);

  useEffect(() => {
    const fetchCities = async () => {
      const url = 'https://backend.vitivipedia.com/wp-json/vitivipedia/v1/cities';
      const response = await axios.get(url);
      if (!response.data || response.data.statusCode !== 200) return false;
      const { data } = response;
      const cities = Object.entries(data).map(([key, value]) => {
        return { label: value, value: key };
      });
      setCities(cities);


    }
    fetchCities();
  }, [setCities]);

  useEffect(() => {
    const getRegionData = async () => {
      let data = null;
      const url = 'https://backend.vitivipedia.com/wp-json/vitivipedia/v1/category/espana';
      try {
        const response = await axios.get(url);
        if (!response.data) throw new Error('No Data from user') ;
        data = response.data; // wordpress format
      } catch (err) {
        console.log(err);
      }

      if (!data || !data.children || data.children.length === 0) return;

      let products = [];

      data.children.forEach((item) => {
        const prods = item.products.map((product) => {
          let itemProducer = null;
          if (item.category.parent > 0) {
            itemProducer = item.category;
          } else {
            itemProducer = item.category.children.filter((item) =>
              product.category_ids.includes(item.term_id)
            )[0];
          }

          const productInfo = {
            type: "",
            do: "",
            variedad: "",
            Tamaño: "",
            delivery: 0,
            id: product.id,
            name: product.name,
            producer: itemProducer.name,
            region: item.category.parent > 0 ? data.name : item.category.name,
            img: product.image,
            shortDescription: product.short_description,
            description: product.description,
            stock: product.stock_quantity,
            slug: product.slug,
            producerInfo: itemProducer,
            price: parseFloat(product.price),
            meta_data: product.meta_data
          };

          product.meta_data.forEach((meta) => {

            if (meta.key === "type") {
              productInfo.type = meta.value;
            }
            if (meta.key === "do") {
              productInfo.do = meta.value;
            }

            if (meta.key === "variedad") {
              productInfo.variedad = meta.value;
            }

            if (meta.key === "Tamaño") {
              productInfo.Tamaño = meta.value;
            }

            if (meta.key === "delivery") {
              productInfo.delivery = parseFloat(meta.value);
            }

            if (meta.key === "vinificacion") {
              productInfo.vinificacion = meta.value;
            }

            if (meta.key === "viñedo") {
              productInfo.viñedo = meta.value;
            }

            if (meta.key === "total_sales") {
              productInfo.total_sales = meta.value;
            }

            if (meta.key === "temp_serv") {
              productInfo.temp_serv = meta.value;
            }

            if (meta.key === "region") {
              productInfo.region = meta.value;
            }

            if (meta.key === "productor") {
              productInfo.productor = meta.value;
            }

            if (meta.key === "maridaje") {
              productInfo.maridaje = meta.value;
            }

            if (meta.key === "graduacion") {
              productInfo.graduacion = meta.value;
            }

            if (meta.key === "embotellado") {
              productInfo.embotellado = meta.value;
            }

            if (meta.key === "consumo") {
              productInfo.consumo = meta.value;
            }

            if (meta.key === "clima") {
              productInfo.clima = meta.value;
            }

            if (meta.key === "cepas") {
              productInfo.cepas = meta.value;
            }

            if (meta.key === "cata") {
              productInfo.cata = meta.value;
            }
          });
          return productInfo;
        });

        products = [...products, ...prods];
      });

      storeFetchedProducts(products);
    };

    getRegionData();
  }, [storeFetchedProducts]);

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
            <Route path="/blog/:page" component={() => <Articles />} />
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
    saveFavWines: (data) => dispatch(actions.saveFevoriteWines(data)),
    storeFetchedProducts: (products) => dispatch(actions.setProducts(products)),
    saveUser: (user) => dispatch(actions.saveUser(user)),
    saveUserAddress: (address) => dispatch(actions.saveUserAddress(address)),
    updateCart: (cart) => dispatch(actions.updateCart(cart)),
    setLoading: (value) => dispatch(actions.setLoading(value)),
    setCities: (value) => dispatch(actions.setCities(value)),
    updateTotals: (value) => dispatch(actions.updateTotals(value)),
    toggleFavWines: () => dispatch(actions.toggleFavWines()),
    saveArticles: (value) => dispatch(actions.saveArticles(value)),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    products: state.products,
    loading: state.loading,
    showFav: state.showFav,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
