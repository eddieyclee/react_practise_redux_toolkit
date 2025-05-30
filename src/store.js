import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slice/countSlice';
import todoReducer from './slice/todoSlice';

export default configureStore({
    reducer: { // 必要加入 reducer 算是一個集合管理器，將 slice 匯入後統一進行管理
        counter: countReducer, // 匯入countSlice
        todo: todoReducer // todoSlice
    }
})