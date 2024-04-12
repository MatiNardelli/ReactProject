import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../../src/08-useReducer/TodoApp"
import { useTodos } from "../../../src/hooks/useTodos";

jest.mock('../../../src/hooks/useTodos');

describe('prueba en <TodoApp/>', () => { 

    useTodos.mockReturnValue({
        todos: [
            {id:1,description:'Todo #1',done:false},
            {id:2,description:'Todo #2',done:true},
        ],
        handleNewTodo:2,
        handleDeleteTodo:1,
        handleToggleTodo: jest.fn(),
        todosCount:jest.fn(),
        pendingTodosCount:jest.fn(),
    })
    
    test('debe de mostar el componente correctamente', () => {  
        render(<TodoApp />);

        // screen.debug();

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        // console.log(screen.getByRole('textbox'));
        expect(screen.getByRole('textbox')).toBeTruthy();
    }) 
})