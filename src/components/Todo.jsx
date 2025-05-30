import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectData, asyncFetchTodo } from "../slice/todoSlice"

function Todo() {
    const [title, setTitle] = useState('')
    const data = useSelector(selectData)
    const dispatch = useDispatch()
    // console.log(data)

    useEffect(() => {
        (async () => {
            dispatch(asyncFetchTodo())
        })()
    }, [])


    return (<>
    <h1>Todo</h1>
    <div>
        <label htmlFor="">Title: {title}</label><br />
        <input type="text" onChange={(e) => {
            setTitle(e.target.value)
        }}/>
    </div>

    <div>
        {data.map((item) => {
            return(<div key={item.id}>
                <h3>{item.title}</h3>
            </div>)
        })}
    </div>
    </>)
}

export default Todo