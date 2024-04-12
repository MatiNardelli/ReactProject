import { useRef } from "react"

export const FocusScreen = () => {
  
    // el userREf nos permite mantener una referencia y cuando cambia no volvamos a hacer la renderizacion
    const inputRef = useRef();



    const onClick = () =>{
        // tengo problemas si tengo mas de un input -> uso useRef
        // document.querySelector('input').select();
        // console.log(inputRef);

        inputRef.current.select();
    }
  
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
                
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
        
    )
}
