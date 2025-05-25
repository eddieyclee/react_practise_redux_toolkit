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
    'todo/asyncFetchTodo',
    async(payload, {dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log('createAsyncThunk', res.data)
        dispatch(updateTodo(res.data))
    }
)

const { updateTodo } = todoSlice.actions

export const selectData = (state) => state.todo.data //在 slice 檔案，就先寫好 callback function

export default todoSlice.reducer