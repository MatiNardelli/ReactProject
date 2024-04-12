import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('prueba de TodoItem', () => { 

    const todo = {
        id:1,
        describe:'Piedra del tiempo',
        done:false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(()=>jest.clearAllMocks());

    test('debe de mostrar el todo pendiente de completar', () => {  
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        const liElement = screen.getByRole('listitem');
        // console.log(liElement);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        
        // expect del span -> necesito agregar el aria-label
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        // console.log(spanElement);

        // screen.debug();
    });


    test('debe de mostrar el todo completado', () => {  
        todo.done='true';

        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        // expect del span -> necesito agregar el aria-label
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('el span debe llamar el onToggleTodo', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    });

    test('el button debe llamar el onDeleteTodo', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>);

        // para varios buttons necesitamos el aria-label
        const deleteElement = screen.getByRole('button');
        // console.log(deleteElement);
        expect(deleteElement.className).toBe('btn btn-danger');

        fireEvent.click(deleteElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
})