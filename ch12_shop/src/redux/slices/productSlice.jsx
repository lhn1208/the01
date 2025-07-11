import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

const initialState = {
   products: [],
   productStatus: STATUS.IDLE,
   productDetails: [],
   productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});
export const getCategoryProduct = createAsyncThunk(
  "getcategoryproduct",
  async (product) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${product}`
    );
    const data = response.json();
    return data;
  }
);
export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const data = response.json();
  return data;
});

const productSlice = createSlice({
 name: "products",
  initialState,
  reducers: {}, //동기적 상태 변경
  extraReducers: (builder) => { //비동기 처리 중 상태 변경
      builder
      //API 호출 시작
      .addCase(getProducts.pending, (state) => {
         state.productStatus = STATUS.LOADING;
      })
      //API 호출 성공 → 데이터 응답
      .addCase(getProducts.fulfilled, (state, action) => {
         state.productStatus = STATUS.SUCCESS;
         state.products = action.payload;  // 여기에 API에서 가져온 product 배열이 저장됨
      })
      .addCase(getProducts.rejected, (state) => {
         state.productStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProduct.pending, (state) => {
              state.productStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
         state.productStatus = STATUS.SUCCESS;
         state.products = action.payload;
      })
      .addCase(getCategoryProduct.rejected, (state) => {
         state.productStatus = STATUS.FAIL;
      })
      .addCase(getDetailProduct.pending, (state) => {
         state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
         state.productDetailStatus = STATUS.SUCCESS;
         state.productDetails = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state) => {
         state.productDetailStatus = STATUS.FAIL;
      })
   },
});

export default productSlice.reducer;
