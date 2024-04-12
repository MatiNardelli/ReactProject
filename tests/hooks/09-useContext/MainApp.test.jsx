import { render, screen } from "@testing-library/react"
import { MainApp } from "../../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('prueba de </MainApp>', () => { 
    test('debe de mostrar el HomePage', () => { 
        
        render(
            // necesitamos el memoryRouter que es como el BrowserRouter q esta en el main.jsx como proveedor de otro hooks necesarios
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
        )
        
        
        expect(screen.getByText('HomePage')).toBeTruthy(); 

        // screen.debug(); 
    });

    test('debe de mostrar el LoginPage', () => { 
        
        render(
            // necesitamos el memoryRouter que es como el BrowserRouter q esta en el main.jsx como proveedor de otro hooks necesarios
            // tenemos que configurar el initialEntries para establecer la ruta de busqueda. Selecciona el submenu Login Page.
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
        </MemoryRouter>
        )
        
        
        expect(screen.getByText('LoginPage')).toBeTruthy(); 
        // screen.debug(); 
    }); 
    
    
    test('debe de mostrar el AboutPage', () => { 
        
        render(
            // necesitamos el memoryRouter que es como el BrowserRouter q esta en el main.jsx como proveedor de otro hooks necesarios
            // tenemos que configurar el initialEntries para establecer la ruta de busqueda. Selecciona el submenu Login Page.
        <MemoryRouter initialEntries={['/about']}>
            <MainApp/>
        </MemoryRouter>
        )
        
        
        expect(screen.getByText('AboutPage')).toBeTruthy(); 
        // screen.debug(); 
    }); 
})