import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/09-useContext/LoginPage';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { useContext } from 'react';

describe('prueba de LoginPage', () => { 

    const setUserMock = jest.fn();

    beforeEach(()=>jest.clearAllMocks());
    
    test('debe de mostrar el componente sin usuario', () => { 
        render(
            <UserContext.Provider value={{ user:null}}>
                <LoginPage />
            </UserContext.Provider>         
        );

        // const preTit  =  screen.getByLabelText('h1');
        // console.log(preTit.innerHTML);
        expect(screen.getByLabelText('h1').textContent).toBe('LoginPage');
        expect(screen.getByLabelText('pre').textContent).toBe('null');
        // screen.debug();
    }); 

    
    test('debe de llamar el setUser cuando se presiona el button', () => { 
        
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{ user:null, setUser:setUserMock}} >
                <LoginPage />
            </UserContext.Provider>         
        );

        // screen.debug();

        const newUser = screen.getByRole('button');
        fireEvent.click(newUser);
        
        // console.log(screen.getByLabelText('pre'));
        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({id:123, name:'Mati', email:'mati@mati.com'});
    }); 

})