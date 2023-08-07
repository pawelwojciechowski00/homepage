const firstName = "Pawel";
const age = 23;

console.log(`Nazywam się ${firstName} i mam ${age} lata`)

const header = document.querySelector('.page-header__heading--js')

header.innerHTML = `Cześć jestem ${firstName} i mam ${age} lata a oto moja strona domowa`

console.log(header.style)

header.style.color = 'white';