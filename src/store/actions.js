import axios from 'axios';

// OPERATION
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
