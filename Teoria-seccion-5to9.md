## SECCION 5

## PRUEBAS 

UNITARIAS -> ENFOCADAS EN PEQUEÑAS FUNCIONALIDADES
INTEGRACION -> ENFOCADAS EN COMO REACCIONAN VARIAS PIEZAS EN CONJUNTO

Tipos
    - arrange(arreglar)
    - act(actuar)
    - assert(afirmars)

## TESTING LIBRARY

Sitio oficial de jest
    https://jestjs.io/

Sirve para hacer prueba en app de javaScript

Instalamos el jest
    yarn add --dev jest
Agregamos el test en package.json->"script"
    "test":"jest"
Creamos un nueva carpeta en el mismo directorio que src y nombramos test
Clonamos todos los archivos con la extension ".test.js" (es solo ejemplo)

Queremos escuchar cualquier cambio, para eso:
en package.json agregamos
    "test":"jest --watchAll"

Los tres pasos para las pruebas:
1. Inicializacion

2. estimulo

3. observar el comportamiento...esparedo?

El siguiente comando nos ayuda a que no tengamos que recordar de memoria toda las sintaxis (se lo conoce como intellegent)
    yarn add -D @types/jest

Nota de Fernando del futuro

En la siguiente clase se hace la configuración para las pruebas de nuestros distintos archivos, en caso de ver el error "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously."


Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs

bibliografia:

https://nodejs.org/docs/latest/api/modules.html#enabling

https://jestjs.io/docs/getting-started

crear el archivo babel.config.js  o 
babel.config.cjs
fuera del src y agregar la siguiente linea (todo esto esta en la documentacion)

module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };

//EJEMPLO

ejecutamos el comando en commander
    - yard dev
y en otro 
    -yarn test



para que se puede probar tiene que estar exportado

en la carpeta test>base-prueba>02-template-string.test.js

import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas en 02-template', () => { 
    test('getSaludo debe retornar Hola + name', () => { 
        const name = 'Matias';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
     })
 })

 en el scr>base-prueba>02-template-string.js

 
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}



//FIN EJEMPLO


## TOEQUAL OR TOSTRICTEQUAL

toEqual or toStricEqual pueden usar usados. Ver documentacion para saber diferencia.

//EJEMPLO 

en src>base-prueba>05-funciones.js


export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})


en tests>base-prueba>05-funciones.test.js

import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('prueba de 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {    
        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //console.log(user)

        expect(testUser).toStrictEqual(user);
    });
    
    test('getUserioActivo debe retornar un objeto', () => {
        const name = 'Matias';
        
        const testUser={
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);

        //console.log(user)

        expect(testUser).toEqual(user);
    });
    
});


//FIN DE EJEMPLO


OBS:

proceso:
    -elijo el archivo que quiero probar.
    -exporto la funcion a ser testeada.
    -creo en la carpeta test el archivo espejo y le agrego ".test" antes de la extension ".js", ".jsx", ".ts", etc.
    -defino el bloque describe y test.
    -llamo la funcion dentro del test.
    -realizo tanto expect como test quiero hacer.
    -en el commander busco el nombre del archivo a ser testeado. (w + p + nombre).

expect(received).toBe(expected)

//MAS EJEMPLO


export const retornaArreglo = () =>{
    return ['ABC', 123];
}


ARCHIVO TEST

import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Prueba retornar 07-deses-arr', () => { 
    
    test('Debe retornar 07-deses-arr', () => { 
        const [letters,number] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(number).toBe(123);

        expect(typeof letters).toBe('string');

        expect(letters).toEqual(expect.any(String));

     })
 })


 //FIN EJEMPLO


//Otro ejemplo pero con otras funciones

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('prueba de 08-imp-exp',()=>{
    test('getHoreoById', () => {

        const id = 3;
        const heroe = getHeroeById(id);      
    
        if(!heroe){
            expect(heroe).toBeFalsy();
        }else{
            expect(heroe).toStrictEqual({ id: 3, name: 'Superman', owner: 'DC' });
        }


    })

    test('getHeroesByOwner', () => {

        const owner = 'DC';
        const owner1 = 'Marvel';
        const answer = getHeroesByOwner(owner);
        const answer1 = getHeroesByOwner(owner1);
    
        // console.log(answer);

        expect(answer).toHaveLength(3);
        // expect(answer.length).toBe(3);
        // expect(answer).toEqual(
        //     [{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}]
        // );
        expect(answer).toEqual(answer.filter((heroe)=>heroe.owner === owner))

        
        expect(answer1).toHaveLength(2);
        expect(answer1).toEqual(answer1.filter((heroe)=>heroe.owner === owner1))
        // expect(answer1).toEqual(
        //     [{ id: 2, name: 'Spiderman', owner: 'Marvel' },
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' }]
        // );

    })
})


//FIN EJEMPLO


## PRUEBAS CON TAREAS ASINCRONAS

usanos .then y .catch

//EJEMPLO

import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('prueba de 09-promesas', () => {
    test('getHeroeByIdAsync devuelve heroe', (done) => { 

        //done es una funcion que llamamos para no usar el async...

        const id = 100;
        //como es sincrona puedo hacer then
        getHeroeByIdAsync(id)
            .then( hero => {

                
                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
                
                done();
            })
        getHeroeByIdAsync(id)
            //esto se puede usar para Fernando esta demas 
            // .then(heroe => {
            //     expect(heroe).toBeFalsy();
            //     done();
            // })
            .catch(error =>{
                
                expect(error).toBe('No se pudo encontrar el héroe..');
                
                done();
            })
    })    
})


//FIN DE EJEMPLO

## PRUEBAS CON ASYNC-AWAIT

1. Creamos el archivo jest.config.js

este archivo lo busca y bien lanzamos el jest...(es codigo de node -> javaScript). Es cuando se requiere cierta inicializacion previa.

module.exports = {
    //TODO: jsdom,
    setupFiles: ['./jest.setup.js']
}

2. el jest.config busca el archivo jest.setup. Creamos ese archivo que instala un codigo que permita a node ejectuar el API (busca un polify o algo asi).

ejecutamos 

yarn add -D whatwg-fetch

D es para dependencia de desarrollo y no se hace en produciton

en CRA esto viene predeterminado...

en jest.setup.js


import 'whatwg-fetch';

y cerramos.

Obs: tenia un error y lo soluciones haciendo

module = {
    //TODO: jsdom,
    setupFiles: ['./jest.setup.js']
}

exports = {
    module,
}


y cambiando la extension de jest.config de .js a .cjs

## evaluar la parte del error en async and await

con try and catch

import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('prueba de 11-async-await', () => { 
    test('getImagen devuelve un url', async() => {  

        const url = await getImagen();
        console.log(url);

        //aca tengo que comprar que el tipo url sea string porque cada que se genera cambia y no puede ser igual al anterior
        try {
            expect(typeof url).toBe('string');
        } catch (error) {
            expect(typeof url).toBe('no se encontro la imagen');
        }
    })    
}) 


## PRUEBA SOBRE COMPONENTE REACT

Jest vs React testing library:

testing library (React): https://testing-library.com/

jest: https://jestjs.io/docs/getting-started

React es una libreria que esta enfocada en lo que sucede en la pantalla o en el DOM en las interacciones.
Jest esta mas orientada a SMOC de funciones o aserciones. Esta mas relacionada al backend. Jest recomienda la parte del DOM probarla con testing library.

para hacer prueba de una app tenemos que recrear el path de cada app

OBS: todas las instalaciones deben hacer dentro del proyecto. hacer un "cd" a la carpeta y despues instalar cada uno de los pasquete.

Hacemos la instalacion de 

yarn add --dev @testing-library/react

adicionamos en jest.config

module = {
    //TODO: jsdom,
    testEnviroment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

Y, Hacemos la instalacion de 

yarn add -D jest-environment-jsdom

luego, abrimos babel.config

module.exports = {
    presets: [
      ['@babel/preset-env',{targets: {esmodules:true}}],
      ['@babel/preset-react',{runtime: 'automatic'}],
    ]

  };


  Y, finalmente hacemos la instalacion de 

  yarn add -D @babel/preset-react

## Update SnapShot

con "u" se puede actualizar el snapShot

DocumentObjectModule (DOM) o nodo de html. Nuestro componente renderizado es el DOM.

en este ejercicio comparamos que el titulo sea h1. Es sorprendente el nivel de detalle al que se puede llegar.

ademas, probamos que cuente la cantidad de subTitle, que busque un title por id, etc.

//EJEMPLO

CourseApp.jsx


import PropTypes from 'prop-types';

export const App = ({title,age,subTitle}) => {



    return (
        <>
            <div data-testid='test-title'>{title} </div>
            <p>¿Es mayor de {age}?</p>
            {/* <p>{subTitle}</p> */}
            {/* <h1>{getMessage(5,-2)}</h1> */}
            {/* <code>{JSON.stringify( newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
        </>
    );
}

App.propTypes={
    title: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
    
}

App.defaultProps = {
    title: 'Ingrese Titulo',
    subTitle: 'weeeep',
    age: 'Ingrese Edad',
}


CourseApp.test.jsx


import { render } from '@testing-library/react';
import { App } from '../src/CourseApp';



describe('prueba en courseApp', () => { 

//Prueba snapshot es util cuando el DO queda sin modificaciones por un largo periodo en desarrollo es molesto y por eso comentamos...
//     test('debe hacer match con el snapshot', () => { 

//         const title= 'Hello World123';
//         const age=1;
//         const {container}=render(<App title={title} age={age}/>);

//         expect(container).toMatchInlineSnapshot(`
// <div>
//   <h1>
//     Hello World123
     
//   </h1>
//   <p>
//     ¿Es mayor de 
//     1
//     ?
//   </p>
//   <p>
//     First Steps
//   </p>
// </div>
// `);

//    }) 
    test('debe mostrar el titulo en un h1',()=>{
        const title= 'Hello World123';
        const {container,getByText,getByTestId}=render(<App title={title}/>);

        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)
        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('debe mostrar subtitle enviado por props', () => { 
        const title= 'Hello World123';
        const subTitle = 'weeeep';
        const age = 1
        const {container,getByText,getByTestId,getAllByText}=render(<App 
            title={title}
            subTitle={subTitle}
            age={age}
        />);

        expect(getAllByText(subTitle).length).toBe(2);
         
    })
    
})


//FIN DE EJEMPLO

## SCREEN

introducimos el Screen para hacer nuestro test mas sencillo de seguir y facil de leer.

//EJEMPLO

import { render,screen } from '@testing-library/react';
import { App } from '../src/CourseApp';



describe('prueba en courseApp', () => { 

    const title = 'hello world';
    const subTitle = 'weeep'
    test('debe hacer match con el snapshot', () => {    
        const {container} = render(<App title={title}/>);
        expect(container).toMatchSnapshot();
    })
    test('debe mostrar el mensaje "Hello World"', () => {    
        render(<App title={title}/>);
        // screen.debug();
        //expect(screen.getByText(title)).not.toBeTruthy()
        expect(screen.getByText(title)).toBeTruthy()
    })
    test('debe mostrar el titulo en h1', () => {    
        render(<App title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
    })
    test('debe mostrar el subtitulo por props', () => {    
        render(<App 
            title={title}
            subTitle={subTitle}
        />);
        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
})

//FIN DE EJEMPLO

## SIMULAR EVENTOS

Vamos a hacer simulaciones sobre el DOM o el Screen pero no sobre el html.

la idea es que las pruebas sean facil de leer. Poner nuestro sujeto de prueba, aplicar un estimulo y ver/hacer la asercion de comportamiento esperado.

//EJEMPLOS

import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/counterApp";

describe('Prueba de CounterApp', () => { 
    const title = 'CounterApp';
    const initialValue = 103;
    

    test('hacer match con el snapshot', () => { 
        const {container} = render(<CounterApp value={initialValue}/>);
        
        expect(container).toMatchSnapshot();
    });
    test('debe ser titulo h1', () => { 
        render(<CounterApp value={initialValue}/>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    }); 
    test('debe mostrar titulo "CounterApp"', () => { 
        render(<CounterApp value={initialValue}/>)
        //expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getByTestId('title').innerHTML).toContain(title);
    });
    test('Debe mostrar el valor de 100 ', () => { 
        render(<CounterApp value={initialValue}/>)
        // expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(`${initialValue}`);
    });
    test('debe incrementar con el boton +1', () => { 
        const searchValue = (initialValue+1).toString();
        // console.log(typeof(searchValue));
        render(<CounterApp value={initialValue}/>)
        //para disparar Event React nos ofrece el fireEvent
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(`¿ es mayor de ${searchValue} ?`)).toBeTruthy()
    })
    test('debe decrementar con el boton -1', () => { 
        const searchValue = (initialValue-1).toString();
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(`¿ es mayor de ${searchValue} ?`)).toBeTruthy()
    })
    // test('debe retornar al valor inicial', () => { 
    //     render(<CounterApp value={initialValue}/>);
    //     fireEvent.click(screen.getByText('Reset'));
    //     expect(screen.getByText(`¿ es mayor de ${initialValue} ?`)).toBeTruthy();
    // })

    // la diferencia con el de arriba es que buscamos el id Reset ahora
    test('debe retornar al valor inicial', () => { 
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByRole('button',{name: 'Reset'}));
        expect(screen.getByText(`¿ es mayor de ${initialValue} ?`)).toBeTruthy();
    })
}) 

//FIN DE EJEMPLOS


## SECCION 6 - APLICACION

1. cd a la carpeta
2. yarn create vite
3. select javaScript/TypeScript
4. name
5. cd a esa carpeta
6. code .
7. una vez hechas las modificaciones respectiva ejecutamos yarn y hace la instalacion de las dependencias


obs: como saber la estructura?
bibliografia: https://es.legacy.reactjs.org/docs/faq-structure.html
bibliografia2: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76


cuando queremos almanecar informacion y esta cambia el estado del html, tengo que pensar que necesito un hook de react para mantener el estado. En este ejercicio usamos "useState".

este espacio en memoria me va a servir para manejar mis categoria.

ol: es un order list. -> 1., 2., 3.,etc
".map": me permite barrer c/u de los elementos del arreglo y regresar algo nuevo. Propiedad de arreglos.
li: list item 
key: es para que puedar armar el list item y si no lo brindamos aparece warning porque no sabe como armar el listado.

## COMPONENT AddCategory

Buscamo manejar modulo por separado y por ello creamos la carpeta components. 
Dentro de ella escribiomos

rafc + tab para crealo

Borrar la import de react.

luego lo agregamos en nuestra app con < "name" /> y debemos hacer la importacion.

## FETCH API 

bibliografia: https://developers.giphy.com/docs/api/endpoint/#search

## USEEFFECT

bibliografia: https://legacy.reactjs.org/docs/strict-mode.html

useEffect es un hook de react que sirve para disparar efectos secundarios, es decir, algun proceso que se quiera ejecutar cuando algo suceda. Podemos disparar efectos secundarios en cualquier punto que queramos.

use para indentificar que es un hook.

los hook son funciones.

entiendase al callBack como una funcion. Cualquier tipo de funcion.

useEffect(()=>{} ,[ ])
1. codigo que queremos ejecutar
2. ? indica que es optional. Son las dependencias. si dejo vacia solo se dispara una vez cuando se construye el componente.


## MAP

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

map llama a la función callback provista una vez por elemento de un array, en orden, y construye un nuevo array con los resultados. callback se invoca sólo para los índices del array que tienen valores asignados; no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.

var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

## don't repeat yourself - DRY

obs.: yarn build crea nuevamente la carpeta de distribucion. Esta es ignorada en el gitignore, no se subr al repositorio.

## Desde cero

1) cd a la carpeta
2) yarn para instalar todas las dependencias
3) yarn dev para poder probar 
4) abrir el localhost:xxx
5) yarn build -> crea dist
6) drag and drop en 
    https://app.netlify.com/teams/matinardelli/overview
7) esta pag corre nuestra app sin un backend, es decir, el servidor de Node atras.

## GITHUB PAGES

bibliografia: https://www.npmjs.com/package/http-server


git: es el manejador de versiones.

github: es para subir a la nube mi archivo.

la parte de GIT:

1) tener un gitIgnore
    estos archivos no necesitan ser parte del repositorio. Son Logs.
2) git init : inicializa nuestro repositorio.
3) se reconoce porque los archivos que se van a subir aparecen en verde o color y los que no en gris.
4) vamos a hacer una fotografia o commit
    git add . 
esto prepara todos mis archivos para sacar una fotografia
5) git commit -m "First Commit"
    con esto sacamos la foto y m es para indicar que queremos ingresar un message.
    Cambia de calor las carpeta.
6) con esto tenemos nuestro proyecto respaldado.
7) git checkout -- .
    esto reconstruye todo a como esta en el ultimo commit.


Desplegar nuestro repository in a cloud
podemos usar GitHub, GitLab, etc.

Ir a la pagina de GitHub.
1) NewRepository
2) add a "name"
3) add a description
4) click Create repository.

seguimos los pasos que aparecen a continuacion.

git branch -M main : este comando renombra la rama Master a main porque no se ve bien el nombre master-slave.

git push -u origin main
-u: estable el origin como repositorio por defecto
origin hace referencia al remoto (https://github.com.....) que agregamos
main es la rama donde queremos desplegar.


OBS: Si ya create una carpeta con git init y borras el repository y creas otro. Genera problema al hacer de nuevo git init. Borrar en el proyecto la carpeta .git y hacer todos los pasos nuevamente.


## readme.md

codigo marDown parecido al html

para subir una actualizacion a gitHub

cambios locales

1) git add .
2) git commit -m "something"

para desplegar en gitHub

3) git push

## GitHub Pages

bibliografia: https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git


para desplegar hay dos formas.
1) cambiar nombre de la carpeta "dist" a "docs"

despues 

    -git add .
    -git commit -m "Docs Creados"
    -git push (subo todo github)

nos vamos a gitHub y dentro del repository, vamos a settings, pages, branch seleccionamos la rama que esta el docs, seleccionamos el docs y save.

## TESTING 

bibliografia: https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

Instalación y configuracion de Jest + React 

Testing Library

En proyectos de React + Vite

1. Instalaciones:

yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

2. Opcional: Si usamos Fetch API en el proyecto:

yarn add --dev whatwg-fetch

3. Actualizar los scripts del package.json
"scripts: {
  ...
  "test": "jest --watchAll"

4. Crear la configuración de babel babel.config.js

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

5. Opcional, pero eventualmente necesario, crear Jest config y setup:


jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}


jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


OBS:

Tenemos que cambiar la extensiones de los siguientes

babel.config.cjs
jest.config.cjs

Motivo: babel.config.cjs and .babelrc.cjs allow you to define your configuration as CommonJS, using module.exports. They have been supported since v7.7.0.
bibliografia: https://babeljs.io/docs/config-files

si no aparece el siguiente error y no podemos hacer los test con jest

 You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously


probamos que funciones bien la app 

yarn dev

bajamos la app y iniciamos el modo prueba

yarn test

## implementando PropTypes

1) trazar la ruta critica porque nunca hay tiempo.
    la ruta critica: que es lo que necesitamos probrar para que la app salga a produccion.
    empezar los testing por los componentes que tienen menos dependencias.

2) instalar por consola los propTypes para que la info req sea obligatoria. y el testing library.
    yarn add prop-types
    yarn add --dev @testing-library/react

3) definimos los modulos
    nameFunction.propTypes={ xxx: PropTypes.TypeOfVar(string).isRequired,another}
    nameFunction.defaultProps={ xxx: "write an tipical prop to show"}


## HACER UN MOCK COMPLETO DE UN CUSTOM HOOK

bibliogafia: https://react-hooks-testing-library.com/

no se usa mas porque ahora esta todo integrado.

## Seccion 9

COMENZAR NUEVO PROJECT
1. cd + path of folder project 
2. yarn create vite
3. project name
4. select react
5. cd a esa nueva carpeta
6. yarn para que instale dependencia
7. abrimos con code .
8. borramos todo en src menos main
9. cramos index.css
10. creamos un nuevo funtional component (snippet rafc) y agregamos en main.
11. yarn dev y ejecutamos la app
12. agregamos boostrap al index.html


Error: [object Object]
En javaScript cuando retorna esto es porque hicimos toString desde un object 

este error aparece porque en onClick nosotros enviamos 
onClick={(event)=>increment(event)}
no quiero esto solo quiero el valor

## HACER FETCH CON CACHÉ
documentacion:
https://tanstack.com/query/latest
curso gratis
https://fernando-herrera.com/course/react-query/

## documentacion useLayoutEffect

documentacion: https://es.legacy.reactjs.org/docs/hooks-reference.html#uselayouteffect

se dispara despues de que todas las mutuaciones se han ejecutados. Nos permite tener las mediciones de un contenedor.

## USECALLBACK & USEMEMO

useCallback -> este hook me sirme para memorizar funciones y no tener que renderizar de nuevo cada vez que realiza un cambio y para ello tengo que usar el useMemo que lo importo de React como React.memo y memorizo un componente (hijo por ejemplo) para que no se vuelva a re dibujar.


## SECCION 10 - useReducer

Que es un reducer? -> 
    . que es? -> una funcion comun y corriente y no puede ser async
    . funcion pura -> todo se resuelve de manera interna
        .   no debe tener efectos secundarios
        .   no debe realizar tareas asincronas
        .   debe retornar siempre un nuevo estado
        .   no debe llamar localStorage o sessionStorage -> aunque son sync pueden fallar y se puede romper la aplicacion
        .   no debe de requerir mas que una accion que puede tner un argunmento.
    . debe retornar siempre un nuevo estado -> cuando cambiamos valor counter haciamos setCounter(counter +1) no counet ++ -> eso significa un nuevo valor.
    . solo recibe dos argumentos -> valor inicial y la accion a ejecutar

En la practica, el reducer reemplaza al push.

bibliografia: https://es.legacy.reactjs.org/docs/hooks-reference.html#usereducer

ejemplo, 

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


ejemplo codigo usando HOOK y form


export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange,onResetForm} = useForm({
        description:''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }


        onNewTodo(newTodo);
        onResetForm(newTodo);
    }


    return (

        <>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text" 
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregrar
                </button>
            </form>
        </>

        
    )
}


## object to string
cuando intentamos representar un objecto como string vamos a recibir algo como 

object Object

esto es la representacion visual del objecto. hay que pasarlo por el JSON.stringify

## SECCION 11 - useContext

bibliografia
1)
https://reacttraining.com/react-router/web/api/NavLink
2)
https://reactrouter.com/en/main

COMANDO INSTALACION DE PACKAGE

+  YARN ADD REACT-ROUTER-DOM 

higher order component:

BrowserRouter

es como el div porque adentro tiene un <h1>
<div>
    <h1>...
</div>

## SECCION 12 - PRUEBAS UNITARIAS Y DE INTEGRACION HOOKS

Instalación y configuracion de Jest + React Testing Library
En proyectos de React + Vite

1. Instalaciones:
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
2. Opcional: Si usamos Fetch API en el proyecto:
yarn add --dev whatwg-fetch
3. Actualizar los scripts del package.json
"scripts: {
  ...
  "test": "jest --watchAll"
4. Crear la configuración de babel babel.config.js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
5. Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch


## en el caso de tener que probar funciones

const onToggleTodoMock = jest.fn();

beforeEach(()=>jest.clearAllMocks());

esto nos permite llamar a la funcion y limpiar antes de cada test.