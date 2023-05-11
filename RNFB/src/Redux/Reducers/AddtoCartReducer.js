const initialstate = {products: []};
const Add = (state = initialstate, action) => {
  switch (action.type) {
    case 'Add_to_cart':
      return{
        products:[...state.products,action.payload]
      }
    default:
      return state;
  }
};
export default Add;
