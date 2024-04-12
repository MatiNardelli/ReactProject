import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('prueba en useForm', () => { 

    const initialForm = {
        name: 'Matias',
        email: 'matias@google.com',
        // done: true,
        }

    test('debe de regresar los valores x defecto', () => { 
        const {result} = renderHook(()=>useForm(initialForm));
        // console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange:expect.any(Function) ,
            onResetForm: expect.any(Function),
        });        
    }) 

    test('debe de cambiar el nombre del formulario', () => { 
        const newValue = 'Fernando';

        const {result} = renderHook(()=>useForm(initialForm));

        const {onInputChange} = result.current;

        act(()=>{
            onInputChange({target: {name: 'name', value: newValue}});
        });

        // console.log(result.current.name);
        expect(result.current.name).toBe('Fernando');
        expect(result.current.formState.name).toBe('Fernando');
    });
    
    
    test('debe dejar los campos en blanco', () => { 
        const newValue = 'Fernando';
        
        const {result} = renderHook(()=>useForm(initialForm));
        console.log(result.current.name);
        const {onInputChange,onResetForm} = result.current;

        act(()=>{
            onInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        });

        expect(result.current.formState.name).toBe('Fernando');
    }); 


})