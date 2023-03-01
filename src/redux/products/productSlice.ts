import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios, { Axios, AxiosError } from "axios";
import { IProduct } from "../../model";
import { RootState } from "../store";

interface IProductState {
  products: IProduct[];
  errorLoading: string;
  isLoading: boolean;
  product: IProduct;
}
const initialState: IProductState = {
  products: [],
  errorLoading: "",
  isLoading: false,
  product: { title: " ", price: 0, description: "", category: "", image: "" },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductsOnPage: (state, action: PayloadAction<IProduct[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    addErrorOnPage: (state, action: PayloadAction<string>) => {
      state.errorLoading = action.payload;
    },
    addLoadingOnPage: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    createProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const {
  addProductsOnPage,
  addErrorOnPage,
  addLoadingOnPage,
  createProduct,
} = productSlice.actions;

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(addLoadingOnPage(true));
      const response = await axios.request<IProduct[]>({
        method: "get",
        url: "https://fakestoreapi.com/products?limit=5",
      });
      dispatch(addProductsOnPage(response.data));
      dispatch(addLoadingOnPage(false));
    } catch (e: unknown) {
      const error = e as AxiosError;
      dispatch(addErrorOnPage(error.message));
    }
  };
};

export const fetchCreateProduct = (payload: IProduct) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.request({
        method: "post",
        url: "https://fakestoreapi.com/products",
        data: payload,
      });

      dispatch(createProduct(response.data));
    } catch (e: unknown) {
      const error = e as AxiosError;
      dispatch(addErrorOnPage(error.message));
    }
  };
};

export default productSlice.reducer;
export const errorLoadingSelector = (state: RootState) =>
  state.products.errorLoading;
export const productSelector = (state: RootState) => state.products.products;
export const isLoadingSelector = (state: RootState) => state.products.isLoading;
