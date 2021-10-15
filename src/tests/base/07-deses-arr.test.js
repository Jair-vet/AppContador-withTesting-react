import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas en Desestructuración', () => {
    
    test('retornaArreglo debe retornar un string u un número', () => {
        
        const [letras,numeros] = retornaArreglo(); // ['ABC', 123]

        // expect( arr ).toEqual( ['ABC', 123] );
        // console.log( typeof numeros);

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );  // que el tipo coincida
        
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );

    })
    


})


