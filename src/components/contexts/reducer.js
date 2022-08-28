export const initialState = {
   basket: [],
};

// eslint-disable-next-line consistent-return
const reducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TO_BASKET':
         return {
            ...state,
            basket: [...state.basket, action.item],
         };
      default:
         return state;
   }
};

export default reducer;
