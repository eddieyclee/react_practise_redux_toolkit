import { useSelector } from "react-redux"

function CounterRender() {
    // 透過useSelector取得store.js內counter.count資料
    const count = useSelector((state) => state.counter.count) // counter: {count:100}

    return (<>
    <h2>計數器</h2>
    {count}
    </>
    )
}

export default CounterRender