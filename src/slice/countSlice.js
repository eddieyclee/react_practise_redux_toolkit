import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    // name, initialState 是必要的屬性
    name: 'counter',
    initialState: {
        count: 100
    },
    reducers: { // 新增一個 reducers 物件，並添加方法;reducers 本身僅能處理同步的狀態
        addCount(state) {
            // console.log('addCount', state.count)
            state.count = state.count + 1
        },
        addCountByNum(state, action) {
            // console.log('addCountByNum', state, action)
            state.count = state.count + action.payload
        },
        // 此段無法執行非同步動作
        // 在 createSlice() 裡的 reducer 函數中，state 是一個由 Immer 管理的 Proxy 對象。
        // 這個 Proxy 只在該同步函數執行期間有效，當 reducer 結束後，Proxy 就會被「撤銷（revoked）」，
        // 任何後續對它的操作都會出錯。
        // addCountAsync(state) {
        //     setTimeout(() => {
        //         state.count = state.count + 1
        //     }, 100)
        // }
    }
})

// console.log(countSlice);

export const asyncAddCount = createAsyncThunk(
    'counterAsync/asyncAddCount', // action type 名稱
    async (num, {dispatch}) => { // payload 是 num，並取得 dispatch 函式
        // console.log(num, dispatch)
        setTimeout(() => {
            dispatch(addCountByNum(num)) // 1 秒後 dispatch 同步 action
        }, 1000)
    }
)

export default countSlice.reducer // 預設匯出該 countSlice 的 reducer

export const { addCount, addCountByNum, addCountAsync } = countSlice.actions // 從 countSlice 中的 reducers 中匯出該方法