import { useRef } from "react";
import { TodoList } from "./TodoList";
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange,onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }


        onNewTodo(newTodo);
        onResetForm(newTodo);
    }


    return (

        <>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text" 
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregrar
                </button>
            </form>
        </>

        
    )
}
