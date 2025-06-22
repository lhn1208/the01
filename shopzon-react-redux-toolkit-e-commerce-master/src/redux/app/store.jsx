// redux/app/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../slices/categorySlice";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage 기본 저장소
import { combineReducers } from "redux";

// persist 대상 설정
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carts"], // 이 항목만 저장
};

const rootReducer = combineReducers({
  categories: categorySlice,
  products: productSlice,
  carts: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 구성
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
