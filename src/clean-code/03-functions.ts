(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        title: string; 
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    interface Actor {
        fullName: string;
        birthdate: Date;
    }
    function checkFullName(fullName: string): boolean {
        console.log({ fullName });
        return true;
    }
    function createActor( {fullName, birthdate}: Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;
        
        return isRetired ? 3000 : 4000;

    }


})();




