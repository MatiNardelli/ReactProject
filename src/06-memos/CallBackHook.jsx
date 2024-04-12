import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {
    
    const [counter, setCounter] = useState(10);

    // useCallback -> sirve como useMemo para memorizar funciones y se vuelve a reprocesar cuando cambie 
    const incrementFather = useCallback(
      (value) => {
        setCounter((valOrig)=> valOrig+value); 
      },
      [],
    );

    // const incrementFather = () =>{
    //     setCounter(counter+1);
    // }
    
    // al llamar la funcion incrementar y no usar el memo -> [incrementFather] al final, se haría un ciclo infinito. Con este seteo logro que solo se dispare ante un cambio
    useEffect(() => {
        // incrementFather();
    }, [incrementFather])
    
    

    return (  

    <>
        <h1>useCallBack Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
