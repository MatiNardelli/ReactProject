import { useEffect } from "react"

export const Message = () => {

    

    useEffect(()=>{

        //para remover tengo que hacer referencia a la funcion al espacio en memoria
        const onMouseMove = ({x,y}) =>{
            const coords = {x,y};
            console.log(coords);
        }

        //cuando el componente se monta creo el listener mousemove y apunta a la funcion onMouseMove
        //si creamos la funcion en el addEvent no funciona porque no es el mismo espacio en memoria, hay que mandarlo por referencia.
        window.addEventListener('mousemove', onMouseMove);

        return()=>{
            window.removeEventListener('mousemove', onMouseMove);
        };
        
    },[])


    return (
        <>
            <h3>Usuario ya existe!</h3>
        </>
    )
}
