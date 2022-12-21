peliculas = [
    '1 Desencantada',
    '2 Your Name',
    '3 John Wick 2',
    '4 La nana mágica',
    '5 Mi villano favorito',
    '6 Batman: El caballero de la noche',
    '7 La máscara',
    '8 Godzilla V Kong',
    '9 A dos metros de ti',
    '10 Pacific rim',
    '11 Interstellar',
    '12 The amazing spiderman 2',
    '13 Liga de supermascotas',
    '14 Detective Pikachu',
    '15 Dune',
    '16 Ralph 1',
    '20 Batman: El caballero de la noche asciende',
    '21 Ferrest Gump',
    '22 Joker',
    '23 Moana',
    '24 Justice league',
    '26 Cruella',
    '27 Shazam',
    '28 John Wick 1',
    '29 Sonic',
    '30 A todos los chicos de los que me enamoré 1/2/3',
    '31 La La Land',
    '32 TinkerBell y el secreto de las hadas',
    '33 Black Widow',
    '34 Niñera a prueba de balas.',
    '35 La forma del agua',
    '36 Encanto',
    '37 Guardianes de la galaxia 1',
    '38 Eternals',
    '39 Nobody',
    '40 Aquaman',
    '42 La princesa y el sapo',
    '43 Spiderman 2',
    '44 Los increibles',
    '46 Back To Future',
    '47 Malefica 2',
    '48 John Wick 3',
    '49 WonderWoman ',
    '50 Logan',
    '51 Tinkerbell hadas y piratas',
    '52 Rio',
    '53 Bullet Train',
    '54 Lego batman',
    '55 Ready player one',
    '56 El joven manos de tijera',
    '57 Suicide Squad',
    '58 Bumblebee',
    '59 Los ilusionistas 1/2',
    '60 Rocky',
    '61 Un juego sin reglas',
    '62 Spiderman FFH',
    '63 Dos por el precio de una',
    '64 Familia Addams',
    '65 Monster House',
    '66 El extraño mundo de jack',
    '67 Top Gun 1/2',
    '68 Venom',
    '69 Red',
    '70 Madagascar',
    '71 Bajo la misma estrella',
    '72 Spiderverse',
];

//random number
let btn = document.getElementById('boton');
const randomNumber = function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let titulo = document.getElementById('titulo');
let elegirPelicula = (peliculas[randomNumber(0, peliculas.length )]);

btn.onclick = function(){
    let pelicula = document.createElement('h1');
    const text = document.createTextNode(elegirPelicula);

    pelicula.appendChild(text);
    document.body.appendChild(pelicula)
    titulo.style.visibility = 'visible';
    btn.style.display = 'none'
}
console.log(peliculas.length)



