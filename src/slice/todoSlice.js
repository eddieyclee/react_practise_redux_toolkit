import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: [
            {
                userId: 1,
                id: 1,
                title: "哈哈",
                completed: false
            }
        ]
    },
    reducers: {
        updateTodo(state, {payload}) {
            state.data = payload
        }
    }
})

export const asyncFetchTodo = createAsyncThunk(
    'todo/asyncFetchTodo', // action type 名稱
    async (payload, {dispatch}) => { // { dispatch }：是 thunkAPI 提供的工具之一，讓你可以 dispatch 其他 action
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log('createAsyncThunk', res.data)
        dispatch(updateTodo(res.data)) // 將 API 資料丟到你的同步 reducer
    }
)

const { updateTodo } = todoSlice.actions

export const selectData = (state) => state.todo.data //在 todoSlice 檔案，就先寫好 callback function

export default todoSlice.reducer