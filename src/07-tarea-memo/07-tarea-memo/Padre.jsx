
import { Hijo } from './Hijo'
import { useCallback, useEffect, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementarFdr = useCallback(
        ( num2 ) => {
            setValor((num1)=> num1 + num2 )
      }, [],
    ); 
    
    // const incrementarFdr = (num2) =>{
    //     setValor((num1)=> num1 + num2 )
    // };

    // useEffect(() => {
    //     // incrementarFdr();
    // }, [incrementarFdr])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementarFdr }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
