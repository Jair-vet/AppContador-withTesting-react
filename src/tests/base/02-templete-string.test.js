import '@testing-library/jest-dom'

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-templet-string.test.js', () => {
    test('getSaludo debe de retornar Hola Jair!', () => {
        
        const nombre = 'Jair';
        const saludo = getSaludo( nombre );
        // console.log( saludo );

        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

    });

    // getSaludo debe de retornar Hola Carlos! si no hay argumento en nombre
    test('getSaludo debe de retornar Hola Carlos!', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!' );
    })
    
    
})


