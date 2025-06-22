import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import categorySlice from "../slices/categorySlice";

import {
 persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage"

// persist 대상 설정
const persistConfig = {
  key: "root", // 저장될 key 이름
  storage,  // 로컬 스토리지에 저장
  whitelist: ["carts"], // 이 항목만 저장
};

const rootReducer = combineReducers({
  categories: categorySlice,
  productData: productSlice, // 이 줄이 store에 "products"라는 키 생성
});
//상태트리
{/*
state = {
  products: {
    products: [], 
    productStatus: 'IDLE',
    ...
  }
}
*/}

// persist된 리듀서
const persistedReducer = persistReducer(persistConfig, rootReducer);
// 스토어 구성
export const store = configureStore({
  reducer: persistedReducer,
});


export const persistor = persistStore(store);