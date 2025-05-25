// Redux Toolkit에서 스토어 생성과 리듀서 결합 함수 임포트
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// counter 슬라이스 리듀서 임포트
import counterReducer from "./features/counterSlice";
// redux-persist에서 지속성 관련 함수들 임포트
import { persistStore, persistReducer } from "redux-persist";
// localStorage 기반의 저장소 엔진 임포트 (기본 저장소)
import storage from "redux-persist/lib/storage";

// 1. 여러 개의 리듀서를 하나로 결합 (확장성을 위해)
const rootReducer = combineReducers({
  counter: counterReducer, // 'counter'라는 키로 counterReducer 등록
});

// 2. redux-persist 설정 객체
const persistConfig = {
  key: "root", // localStorage에 저장될 때 사용할 키 이름
  storage, // 사용할 저장소 엔진 (기본은 localStorage)
};

// 3. persist 적용된 리듀서 생성
const persistedReducer = persistReducer(
  persistConfig, // 위에서 정의한 설정
  rootReducer // 적용 대상 리듀서
);

// 4. Redux 스토어 생성
export const store = configureStore({
  reducer: persistedReducer, // persist가 적용된 리듀서 사용
  // 미들웨어는 기본값 사용 (자동으로 thunk 포함)
});

// 5. persistor 객체 생성 (스토어의 지속성 관리자)
export const persistor = persistStore(store);

// 6. 타입스크립트 타입 정의
export type RootState = ReturnType<typeof store.getState>; // 전체 상태 타입
export type AppDispatch = typeof store.dispatch; // dispatch 함수 타입

