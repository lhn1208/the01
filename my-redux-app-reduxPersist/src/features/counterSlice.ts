import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// 1. 상태 타입 정의 (TypeScript 인터페이스)
// - value: 숫자 타입의 카운터 값
// - status: 'idle'|'loading'|'failed' 문자열 리터럴 타입으로 상태 관리
interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

// 2. 초기 상태 설정
// - value는 0부터 시작
// - status는 'idle'(대기 상태)로 초기화
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// 3. 슬라이스 생성 (Redux Toolkit의 핵심 기능)
const counterSlice = createSlice({
  name: "counter", // 3-1. 슬라이스 이름 (액션 타입 생성 시 prefix로 사용)
  initialState,    // 3-2. 위에서 정의한 초기 상태
  reducers: {      // 3-3. 동기 액션 생성자들
    // 3-3-1. 증가 액션 (payload 필요 없음)
    increment: (state) => {
      state.value += 1; // Immer 라이브러리로 불변성 자동 관리
    },
    // 3-3-2. 감소 액션 (payload 필요 없음)
    decrement: (state) => {
      state.value -= 1;
    },
    // 3-3-3. 특정 값 증가 액션 (number 타입 payload 필요)
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; // action.payload로 전달된 값 사용
    },
    // 3-3-4. 리셋 액션 (payload 필요 없음)
    reset: (state) => {
      state.value = 0;
    },
  },
  // 4. extraReducers (주석 처리됨)
  // - 비동기 액션 처리 시 사용 (createAsyncThunk로 생성된 액션 등)
  // - 다른 슬라이스의 액션에 반응할 때도 사용
});

// 5. 생성된 액션 생성자(actions) 내보내기
// - 컴포넌트에서 dispatch(increment()) 형태로 사용
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// 6. 슬라이스 리듀서 내보내기
// - 스토어 설정 시 combineReducers에 등록용
export default counterSlice.reducer;