import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    productListCont: [],
    product: {
      pname: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
    },
  },
  reducers: {
    getProduct: (state, action) => {
      state.product = state.productList.find(
        (item) => item.id === action.payload
      );
    },
    clearProduct: (state) => {
      state.product = {
        pname: "",
        description: "",
        price: "",
        quantity: "",
        image: "",
      };
    },
    saveProduct: (state, action) => {
      state.productList = [action.payload, ...state.productList];
    },
    updateProduct: (state, action) => {
      state.productList = state.productList.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },

    searchProductByName: (state, action) => {
      state.productList = state.productListCont.filter((product) =>
        product.pname.toLowerCase().includes(action.payload)
      );
    },
    sortProductByQnt: (state, action) => {
      state.productList = state.productList.sort((a, b) =>
        a.quantity > b.quantity ? 1 : -1
      );
    },
    sortProductByPrice: (state, action) => {
      state.productList = state.productList.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
    },
  },
});

export const {
  saveProduct,
  updateProduct,
  getProduct,
  clearProduct,
  sortProductByQnt,
  searchProductByName,
  sortProductByPrice,
} = productSlice.actions;
export const selectProductList = (state) => state.product.productList;
export const selectProduct = (state) => state.product.product;
export default productSlice.reducer;
