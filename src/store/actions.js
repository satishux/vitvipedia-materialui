import axios from 'axios';

// OPERATION
const getPosts = () => {
  return async dispatch => {
    try {
      const url = 'https://backend.vitivipedia.com/wp-json/vitivipedia/v1/posts';
      const response = await axios.get(url);
      const posts = response.data; // wordpress format
      dispatch(saveArticles(posts));
    } catch (err) {
      console.log(err);

    }
  }
};

const getProducts = () => {

  return async dispatch => {
    let data = null;
    const url = 'https://backend.vitivipedia.com/wp-json/vitivipedia/v1/category/espana';
    try {
      const response = await axios.get(url);
      if (!response.data) throw new Error('No Data from user');
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

    dispatch(setProducts(products));
  }
};


const updateServerCart = (updatedProduct, products, token) => {
  return dispatch => {
    axios
      .post(
        'https://backend.vitivipedia.com/wp-json/cocart/v2/cart/add-item',
        {
          id: updatedProduct.id.toString(),
          quantity: updatedProduct.quantity.toString()
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => response.data)
      .then(data => {
        const updatedCart = data.items.map(item => {
          const index = products.findIndex(i => i.id === item.id);
          if (index !== -1) {
            const updatedItem = {
              ...products[index],
              price: parseFloat(item.price),
              quantity: parseInt(item.quantity.value),
              item_key: item.item_key,
              subtotal: parseFloat(item.totals.subtotal)
            };
            return updatedItem;
          }

          return {};
        });

        dispatch(updateCart(updatedCart));
        dispatch(updateTotals(data.totals));
      });
  };
};

const updateItemInCart = (updatedProduct, products, token) => {
  return dispatch => {
    axios
      .post(
        `https://backend.vitivipedia.com/wp-json/cocart/v2/cart/item/${updatedProduct.item_key}`,
        {
          quantity: updatedProduct.quantity.toString(),
          return_cart: true
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => response.data)
      .then(data => {
        const updatedCart = data.items.map(item => {
          const index = products.findIndex(i => i.id === item.id);
          if (index !== -1) {
            const updatedItem = {
              ...products[index],
              price: parseFloat(item.price),
              quantity: parseInt(item.quantity.value),
              item_key: item.item_key,
              subtotal: parseFloat(item.totals.subtotal)
            };
            return updatedItem;
          }

          return {};
        });

        dispatch(updateCart(updatedCart));
        dispatch(updateTotals(data.totals));
      });
  };
};

const removeFromCart = (product, cart, token) => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .delete(
        `https://backend.vitivipedia.com/wp-json/cocart/v2/cart/item/${product.item_key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => response.data)
      .then(data => {
        const updatedCart = cart.filter(item => item.id !== product.id);
        dispatch(updateCart(updatedCart));
        dispatch(updateTotals(data.totals));
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setLoading(false));
      });
  };
};

//ACTIONS
const saveFevoriteWines = wineList => {
  return {
    type: 'SAVE_FEVORITE_WINES',
    payload: wineList
  };
};

const headerMapToggle = () => {
  return {
    type: 'HEADER_MAP_TOGGLE'
  };
};

const showFavWines = () => {
  return {
    type: 'SHOW_FAV_WINES'
  };
};

const hideFavWines = () => {
  return {
    type: 'HIDE_FAV_WINES'
  };
};

const toggleFavWines = () => {
  return {
    type: 'TOGGLE_FAV_WINES'
  };
};

const setSelectedProducer = id => {
  return {
    type: 'SET_SELECTED_PRODUCER',
    payload: id
  };
};
const resetSelectedProducer = () => {
  return {
    type: 'RESET_SELECTED_PRODUCER'
  };
};

const setProducts = products => {
  return {
    type: 'SET_PRODUCTS',
    payload: products
  };
};

const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

const removeCartItem = product => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  };
};

const updateTotals = totals => {
  return {
    type: 'SET_CART_TOTALS',
    payload: totals
  };
};

const updateCart = cart => {
  return {
    type: 'UPDATE_CART',
    payload: cart
  };
};

const saveUser = user => {
  return {
    type: 'SAVE_USER',
    payload: user
  };
};

const setLoading = value => {
  return {
    type: 'SET_LOADING',
    payload: value
  };
};

const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

const saveUserAddress = addr => {
  return {
    type: 'SAVE_ADDRESS',
    payload: addr
  };
};

const setCities = value => {
  return {
    type: 'SET_CITIES',
    payload: value
  };
};

const saveArticles = value => {
  return {
    type: 'SAVE_ARTICLES',
    payload: value
  }
};

const toggleDrawer = value => {
  return {
    type: 'TOGGLE_DRAWER',
    payload: value
  }
};



const actions = {
  getPosts,
  getProducts,
  saveFevoriteWines,
  showFavWines,
  hideFavWines,
  toggleFavWines,
  headerMapToggle,
  setSelectedProducer,
  resetSelectedProducer,
  setProducts,
  addToCart,
  removeFromCart,
  updateCart,
  saveUser,
  logout,
  updateServerCart,
  removeCartItem,
  setLoading,
  updateItemInCart,
  updateTotals,
  saveUserAddress,
  setCities,
  saveArticles,
  toggleDrawer,
};

export default actions;
