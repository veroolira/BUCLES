let arreglo = [1,2,3,4,5,6,7,8,9,10]

console.log("Imprimiendo datos 1 por 1")

console.log (arreglo[0]);
console.log (arreglo[1]);
console.log (arreglo[2]);

console.log ("Utilizamos un ciclo for para 'automatizar' el proceso")

for(let indice = 0; indice <10; indice ++ ){
    //codigo a ejecutar
    console.log(arreglo[indice]);
}

let poema = ["Me", "gustan", "tus", "ojos","pispiretos", "cuando", "me", "miras"]

//Cuando no sabemos el numero de datos, ponemos lenght

for(let i = 0; i<poema.length; i++){
    console.log (poema[i]);
}

//longitud de mi arreglo
console.log(poema.length);

//Imprimir numero impares del 1 al 50

console.log("Numeros impares del 1 al 50")

for(let i = 1; i<= 50; i++){
    //si i es diferente de 0 
    if(i % 2 !==0){
        //lo imprimo 
        console.log(i);
    }
}

console.log("Mostar en pantalla solamente los elementos de tipo numero")

let elementos = [1, "dos", "tres", 4, true, false, "5", 7, 300];

for(let index =0; index <elementos.length; index++){
    //condicionar para saber si es number
    if(typeof elementos[index]==="number"){
        console.log(arreglo[index])
    }
}

//Cantidad de longitud usuario
console.log(elementos.length);


//Ejercicio Pokemones

// Inicializamos un array para almacenar los múltiplos
    var pokemons = [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran-f',
    'nidorina',
    'nidoqueen',
    'nidoran-m',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb'];

const numeroUsuario = parseInt(prompt("Introduce un numero: "));

        for (let i = 0; i < pokemons.length; i++){
            if((i + 1) % 5 === 0 && (i + 1) <= numeroUsuario) {
                console.log(pokemons[i]);
                //console.log('Indice: ${i +1}, Pokemon: ${pokemons[i]}');
            }
        }
