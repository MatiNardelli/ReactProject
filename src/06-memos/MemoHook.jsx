import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

// creo afuera para que no se reprocese
const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0 ; i<iterationNumber; i++){
        console.log('ahi vamos...');
    }

    return `${iterationNumber} iterations did`;
}


export const MemoHook = () => {

    const {counter,increment} = useCounter(10);
    const [show, setShow] = useState(true);

    // useMemo memoriza un valor -> se mantiene el valor original a menos que las dependencia cambien -> []: indica que se reprocesa si las dpendencias cambian. si esta vacio solo la primera vez.
    const memorizedValue = useMemo(()=>heavyStuff(counter),[counter])

    return (
            <>
                <h1>Counter: <small>{counter}</small></h1>
                <hr />

                <h4>{memorizedValue}</h4>

                <button
                    className="btn btn-primary"
                    onClick={()=>increment()}
                >+1</button>
                <button
                    className="btn btn-outline-primary"
                    onClick={()=>setShow(!show)}
                >
                    Show/Hide {JSON.stringify(show)}
                    {/* stringify porque es un valor booleano y no puedo mostrar en pantalla si eso. */}
                </button>
            </>
        
    )
}
