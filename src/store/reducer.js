const initState = {
  fevoriteWineList: [],
  showFav: false,
  headerMapToggle: false,
  selectedProducer: null,
  products: [],
  cart: [],
  cartTotals: [],
  user: null,
  loading: false,
  userAddress: null,
  cities: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SAVE_FEVORITE_WINES':
      return {
        ...state,
        fevoriteWineList: action.payload
      };
    case 'SHOW_FAV_WINES':
      return {
        ...state,
        showFav: true
      };
    case 'HIDE_FAV_WINES':
      return {
        ...state,
        showFav: false
      };
    case 'TOGGLE_FAV_WINES':
      return {
        ...state,
        showFav: !state.showFav
      };
    case 'HEADER_MAP_TOGGLE':
      return {
        ...state,
        headerMapToggle: !state.headerMapToggle
      };
    case 'SET_SELECTED_PRODUCER':
      return {
        ...state,
        selectedProducer: action.payload
      };
    case 'RESET_SELECTED_PRODUCER':
      return {
        ...state,
        selectedProducer: null
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_FROM_CART':
      const updatedCart = [...state.cart].filter(
        item => item.slug !== action.payload.slug
      );
      return {
        ...state,
        cart: updatedCart
      };

    case 'UPDATE_CART':
      return {
        ...state,
        cart: action.payload
      };
    case 'SAVE_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };

    case 'SET_CART_TOTALS':
      return {
        ...state,
        cartTotals: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };

    case 'SAVE_ADDRESS':
      return {
        ...state,
        userAddress: action.payload
      };
    case 'SET_CITIES':
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
