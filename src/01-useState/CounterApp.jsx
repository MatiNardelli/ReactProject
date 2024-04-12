import { useState } from "react"


export const CounterApp = () => {

    //useState para mostrar y manejar el contador
    const [state,setCounter] = useState({
                Counter1: 10,
                Counter2: 20,
                Counter3: 30,
        })    

    const {Counter1,Counter2,Counter3} = state;

    return (
        <>
            {/* <h1>Counter: {counter.Counter2}</h1> */}
            <h1>Counter: {Counter1}</h1>
            <h1>Counter: {Counter2}</h1>
            <h1>Counter: {Counter3}</h1>

            {/* hr es una linea */}
            <hr />

            {/* className es para que luzca como boostrap */}
            <button className="btn" onClick={()=>setCounter({
                ...state,
                Counter1: Counter1+1,
            })}>+1</button>
        </>
    )

}
