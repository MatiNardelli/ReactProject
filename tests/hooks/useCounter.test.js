import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

// renderHook nos permite renderizar un hook

describe('pruebas en el useCounter', () => { 
    test('devuelve valores', () => { 
        
        const {result} = renderHook(()=> useCounter())
        // console.log(result);
        const {counter,increment,decrement,reset} = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
    
    test('el counter debe devolver 100', () => { 
        const {result} = renderHook(()=> useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('debe incrementar el contador', () => { 
        const {result} = renderHook(()=>useCounter());
        const {counter,increment} = result.current;

        // el act es necesario para evaluar funciones 
        act(()=>{
            increment();
            // increment(2); para que funcione hay que modificar el useCounter.js como sigue
            // setCounter((current)=>current+value);

        })
        // si testeo el counter, me da error porque no actualiza el valor de la variable
        expect(result.current.counter).toBe(11);
    })
    test('debe decrementar el contador', () => { 
        const {result} = renderHook(()=>useCounter());
        const {decrement} = result.current;

        // el act es necesario para evaluar funciones 
        act(()=>{
            decrement();
        })
        // si testeo el counter, me da error porque no actualiza el valor de la variable
        expect(result.current.counter).toBe(9);
    })
    test('debe reinicializar el contador', () => { 
        const {result} = renderHook(()=>useCounter(100));
        const {increment,reset} = result.current;

        // el act es necesario para evaluar funciones 
        act(()=>{
            increment();
            reset();
        })
        // si testeo el counter, me da error porque no actualiza el valor de la variable
        expect(result.current.counter).toBe(100);
    })
    
})