import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Héroes', () => {
    
    test('debe retornar un Heroe por un id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual(heroeData);

    });
    test('debe retornar un undefined si un Heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    /// - getHeroesByOwner -
    test('debe retornar un Arreglo con los Héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );

    });
    test('debe retornar un Arreglo con los Héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

    });
    

});



