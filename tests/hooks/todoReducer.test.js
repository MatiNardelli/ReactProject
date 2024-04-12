import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe('pruebas en todoReducer', () => { 
    
    const initialState=[
    {
        id: 1,
        description:'Demo todo',
        done:false,
    },
    // {
    //     id:2,
    //     description:'Nuevo todo #2',
    //     done:false,
    // },
    ]
    
    test('debe de regresar el estado inicial', () => { 
        const newState = todoReducer(initialState,{});
        expect(newState).toBe(initialState);
     }); 

     test('debe de agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                description:'Nuevo todo #2',
                done:false,
            }
        };
        
        const newState = todoReducer(initialState,action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    // case '[TODO] Remove Todo':
    test('debe de eliminar un todo', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };
        

        const newState = todoReducer(initialState,action);
        // expect(newState).toEqual(initialState);
        expect(newState.length).toBe(0);
    });


    //case '[TODO] ToggleTodo':
    test('debe de cambiar el estado del todo', () => { 
        const action = {
            type: '[TODO] ToggleTodo',
            payload: 1
        };
        

        const newState = todoReducer(initialState,action);
        expect(newState[0].done).toBe(true);
        // expect(newState.length).toBe(0);
    });



})