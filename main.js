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
    '17 Matilda',
    '18 Spiderman Homecoming',
    '19 Batman: Inicia',
    '20 Batman: El caballero de la noche asciende',
    '21 Ferrest Gump',
    '22 Joker',
    '23 Moana',
    '24 Justice league',
    '25 Lego movie',
    '26 Cruella',
    '27 Shazam',
    '28 John Wick 1',
    '29 Sonic',
    '30 A todos los chicos de los que me enamoré',
    '31 La La Land',
    '32 TinkerBell y el secreto de las hadas',
    '33 Black Widow',
    '34 A todos los chicos de los que me enamoré 2',
    '35 La forma del agua',
    '36 A todos los chicos de los que me enamoré 3',
    '37 Guardianes de la galaxia 1',
    '38 Eternals',
    '39 Nobody',
    '40 Aquaman',
    '41 Me Before You',
    '42 La princesa y el sapo',
    '43 Spiderman 2',
    '44 Los increibles',
    '45 Batman V Superman',
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
]


//random number
let btn = document.getElementById('boton')
const randomNumber = function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let titulo = document.getElementById('titulo');
let elegirPelicula = (peliculas[randomNumber(0,53)]);

btn.onclick = function(){
    let pelicula = document.createElement('h1');
    const text = document.createTextNode(elegirPelicula);

    pelicula.appendChild(text);
    document.body.appendChild(pelicula)
    titulo.style.visibility = 'visible';
    btn.style.display = 'none'
}


// function (){
//     console.log((peliculas[randomNumber()]))
// }



