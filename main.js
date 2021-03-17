iconsAll = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const iconsContainer = document.getElementById('icons-container');

assignColor(getUniqueTypes(iconsAll));


function assignColor(tipiPresenti) {
	let colori = generateColors(tipiPresenti.length);
	iconsAll = iconsAll.map( (oggetto) => { 
		oggetto.color = colori[tipiPresenti.indexOf(oggetto.type)];
		return oggetto; 
	  }); 
}

iconsAll.forEach(element => {	printIcon(element);	});


function printIcon(icon) {	
//	Stampa un determinato box-icona all'interno dell'HTML
	iconsContainer.innerHTML += `<li class="single-icon-outer"><i style="color: rgb(${icon.color});" class="${icon.family} ${icon.prefix}${icon.name}"></i><h3 class="margin-t-standard text-uppercase">${icon.name}</h3></li>`;	
}

function getUniqueTypes(array) {
//	Determina i diversi tipi di elemento presenti all'interno di un array
// 	e li restituisce come elementi di un array
	let types = [];
	array.forEach(	(element)	=> {
		if(!types.includes(element.type)) {
			types.push(element.type);
		}
	});
	return types;
}

function generateColors(colors) {
//	In base al valore passato genera tot valori RGB
	var randomColors = [];
	for(let i = 0; i < colors; i++) {
		randomColors.push(getRGB());
	}
	return randomColors;
}

function getRGB() {
//	Genera un valore RGB
	let rgbColor = [];
	for(let j = 0; j < 3; j++) {
		rgbColor.push(getRandom(0,255));
	}
	return rgbColor;
}

function getRandom(min , max) {	
//	Genera un numero casuale compreso fra min e max	
	return Math.floor(Math.random()* ( max - min + 1 ) + min );	
}