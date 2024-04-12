import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {


    const {formState,onInputChange,userName,email,password,onResetForm}=useForm({
        userName: 'strider',
        email: 'matias@google.com',
        password: ''
    });
    // otra forma de hacer lo mismo 
    // const {userName,email,password} = formState;

    //es una funcion como todo hook y sirve para disparar efectos secundarios
    //no se recomienda poner un useEffect sin dependencias (el segundo argunmento a enviar, primero es el callback: funcion a ejecutar)
    //un arreglo vacio para que se ejecuta una vez, cuando se renderiza.
    // useEffect(()=>{
    //     // console.log('useEffect called')
    // },[]);
    // useEffect(()=>{
    //     // console.log('userName has changed!')
    // },[userName]);//formState: al cambiar cualquier campo llama al useEffect
    // useEffect(()=>{
    //     // console.log('email has changed!')
    // },[email]);

    return (
        <div>
            <h1>Formulario Con Custom Hook</h1>
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
            <input 
                type="password"
                // mt: margen superior m: margen superior e izquierdo
                className="form-control mt-2"
                placeholder="Password" 
                name="password"
                value={password}
                onChange={onInputChange}
            />
            
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </div>
    )
}
