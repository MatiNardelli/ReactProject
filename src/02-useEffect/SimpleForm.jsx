import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'strider',
        email: 'matias@google.com'
    });

    const {userName,email} = formState;

    // const onInputChange = (event)=>{
    //     console.log(event.target.value)
    // }
    const onInputChange = ({target})=>{
        const {name,value}=target;
        // console.log({name,value});
        setFormState({
           ...formState,
           [ name ]: value, 
        }) 

    };

    //es una funcion como todo hook y sirve para disparar efectos secundarios
    //no se recomienda poner un useEffect sin dependencias (el segundo argunmento a enviar, primero es el callback: funcion a ejecutar)
    //un arreglo vacio para que se ejecuta una vez, cuando se renderiza.
    useEffect(()=>{
        console.log('useEffect called')
    },[]);
    useEffect(()=>{
        console.log('userName has changed!')
    },[userName]);//formState: al cambiar cualquier campo llama al useEffect
    useEffect(()=>{
        console.log('email has changed!')
    },[email]);

    return (
        <div>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="UserName" 
                name="userName"
                value={userName}
                onChange={onInputChange}
            />
            <input 
                type="email"
                // mt: margen superior m: margen superior e izquierdo
                className="form-control mt-2"
                placeholder="example@google.com" 
                name="email"
                value={email}
                onChange={onInputChange}
            />

        {
            (userName==='strider2') && <Message />
        }
        

        </div>
    )
}
