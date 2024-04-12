// import { useEffect, useReducer } from "react"
// import { todoReducer } from "./TodoReducer"
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks/';



export const TodoApp = () => {
    
    const {todos,todosCount,pendingTodosCount,handleNewTodo,handleDeleteTodo,handleToggleTodo} = useTodos()    


    return (
        <>
            <h1>TodoApp: {todosCount} - <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="col d-flex justify-content-between">

                <div className="row">
                    <div className="col">
                        {/* para que se pueda manda property todo={todo} poner como arg de la funcion este formato en el componente({}) */}
                        <TodoList 
                            todo={todos} 
                            onDeleteTodo={handleDeleteTodo}
                            onToggleTodo={handleToggleTodo}   
                        />
                    </div>
                </div>
                
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />

                    {/* <TodoAdd  onNewTodo={todo => handleNewTodo(todo)} /> */}
                    <TodoAdd  onNewTodo={handleNewTodo} />

                </div>
            </div>
        </>       
        
    )
}
