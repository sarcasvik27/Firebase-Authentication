export const Add_to_cart = element => {
  //console.log("Called from Action",element.item.title)
  return {type: "Add_to_cart", payload: element};
};
