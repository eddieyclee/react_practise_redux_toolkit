import { useDispatch } from "react-redux"
import { addCount, addCountByNum, addCountAsync, asyncAddCount } from "../slice/countSlice";
import { useState } from "react";

function CounterButton() {
    const [num, setNum] = useState(1);
    const dispatch = useDispatch();

    return (<>
    <button onClick={() => 
        // dispatch({type: 'counter/addCount'})
        dispatch(addCount())
    }>按我++</button>

    <button onClick={() => 
        // dispatch({type: 'counter/addCountByNum', payload:5})
        dispatch(addCountByNum(5))
    }>按我+5</button>

    <hr />
    <input type="number" value={num} onChange={(event) => {
        setNum(Number(event.target.value))
    }}/>
    <button onClick={() => 
        dispatch(addCountByNum(num))
    }>按我依照輸入的數字</button>

    <hr />
    <h2>非同步Redux</h2>
    <button onClick={() => 
        // 此段無法執行非同步動作
        // dispatch(addCountAsync())

        // 元件裡處理完非同步;直接元件使用setTimeout處理 而不是在countSlice內執行
        // setTimeout(() => {
        //     dispatch(addCount())
        // }, 500)
        
        dispatch(asyncAddCount(10))
    }>按我++</button>

    </>
    )
}

export default CounterButton