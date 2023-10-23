const firstName = "Pawel";
const age = 23;

alert(`Witaj mam na imię ${firstName} i mam ${age} lata`)

console.log(`Nazywam się ${firstName} i mam ${age} lata`)

const header = document.querySelector('.page-header__heading--js')

header.innerHTML = `Cześć jestem ${firstName} i mam ${age} lata a oto moja strona domowa`

console.log(header.style)

header.style.color = 'white';

const calculate = (myNumber) => (myNumber * 7);
console.log(calculate(3));

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000
}

console.log(deathStar.diameter)
deathStar.fire('alderaan');
deathStar.fire('starscream')