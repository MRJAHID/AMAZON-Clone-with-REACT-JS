export const initialState = {
   basket: [],
};

// Selector
export const getBasketTotals = (basket) =>
   basket?.reduce((amount, item) => item.price + amount, 0);

// eslint-disable-next-line consistent-return
const reducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TO_BASKET':
         return {
            ...state,
            basket: [...state.basket, action.item],
         };

      case 'REMOVE_FROM_BASKET':
         // eslint-disable-next-line no-case-declarations
         const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id,
         );
         // eslint-disable-next-line no-case-declarations
         const newBasket = [...state.basket];

         if (index >= 0) {
            newBasket.splice(index, 1);
         } else {
            console.warn(
               `Cant remove product (id: ${action.id}) as its not in basket!`,
            );
         }

         return {
            ...state,
            basket: newBasket,
         };

      case 'SET_USER':
         return {
            ...state,
            user: action.user,
         };

      default:
         return state;
   }
};

export default reducer;
