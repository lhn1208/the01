import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const user = createSlice({
    name : 'user',
    initialState : {id : 1, name : '이창현', job : '개발자'},
    reducers : {
        changeName(state){
            state.name = '이귀엽';
        },
        increase(state, actions){
            state.id+=actions.payload;
        }
    }
})

export const {changeName, increase} = user.actions;

const stock = createSlice({
    name : 'stock',
    initialState : [500, 600, 700],
    reducers : {}
})

export interface CartItem{
    id : number;
    name : string;
    quantity : number;
    price : number;
}

export interface CartArray{
    cart : CartItem[];
}

const cart = createSlice({
    name : 'cart',
    initialState : {
        cart : [
            {id : 0, name : '백엔드 입문자를 위한 모던 자바스크립트&Node.js', quantity:1, price : 34000},
            {id : 1, name : 'HTML5와 자바스크립트 기반의 웹프로그래밍 정석', quantity:1, price : 28000},
        ]
    } as CartArray,
    reducers : {
        plusCount(state, action){
            const item = state.cart.find((item)=>item.id === action.payload);
            if(item){
                item.quantity++;
            }
        },
        minusCount(state, action){
            const item = state.cart.find((item)=>item.id === action.payload);
            if(item && item.quantity > 0){
                item.quantity--;
            }
        },
        addItem(state, action){
            const existingItem = state.cart.find((item)=>item.id === action.payload.id);

            if(existingItem){
                existingItem.quantity++;
            }else{
                state.cart.push({
                    id : action.payload.id,
                    name : action.payload.name,
                    quantity : 1,
                    price : action.payload.price,
                });
            }
        },
        resetCart(state){
            state.cart = [];
        },
    }
})

export const {plusCount, minusCount, addItem, resetCart} = cart.actions;

const rootReducer = combineReducers({
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
});

const persistConfig = {
    key : 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer : persistedReducer,
});

export const persistor = persistStore(store);
export default store;

// export default configureStore({
//     reducer:{
//         user : user.reducer,
//         stock : stock.reducer,
//         cart : cart.reducer
//     }
// })