
const initialState = [{
    id: 1,
    todo: 'Recolectar',
    done: false,
}];

// action: le digo como quiere que cambia el estado.
const todoReducer = ( state=initialState,action={} ) => {

    if(action.type ==='[TODO] add todo'){
        return [...state,action.payload]
        // no mutamos el state -> no se usa el push esto lo reemplaza
    }

    // siempre devuelve estado
    return state;
}

let todo = todoReducer();


const newTodo = {
        id:2,
        todo:'trasladar',
        done:false,
};

const addTodoAction = {
    type:'[TODO] add todo',
    // newTodo: newTodo,
    // se le suele llamar payload y no necesario que vaya siempre. Ej. en borrar
    payload: newTodo,
}

todo = todoReducer(todo,addTodoAction);


// se considera mala practica. El map no funciona en este caso
// todo.push({
//     id:2,
//     todo:'trasladar',
//     done:false,
// })

console.log(todo);

