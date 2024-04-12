import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";


jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');


describe('prueba en MultipleCustomHooks', () => { 
// lo defino aca sino tengo que definir en cada test
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    // limpiamos cada una de las funciones para asegurar que la prueba no tenga alguna variable en memoria
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })       

        render(<MultipleCustomHooks/>);
        // screen tiene la info tal cual esta en este momento
        // screen.debug(); 

        expect(screen.getByText('Pokemon Information'));
        expect(screen.getByText('Cargando'));

        const nextButton = screen.getByRole('button',
        {name:'Siguiente'});
        // console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeFalsy();


    });

    test('debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{
                name: 'Matias',
                
            }],
            isLoading: false,
            hasError: null
        })       
        
        render(<MultipleCustomHooks/>);
        screen.debug();
        
    });
    
    test('debe llamar la funcion incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: [{
                name: 'Matias',
                
            }],
            isLoading: false,
            hasError: null
        });       
        
        render(<MultipleCustomHooks/>);
        const nextButton=screen.getByRole('button',{name:'Siguiente'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    })

})