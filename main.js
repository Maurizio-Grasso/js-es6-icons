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

const iconsContainer = document.getElementById('icons-container');	//	ul contenente tutte le icone
const select = document.getElementById('type-select');				//	menu a tendina
select.onchange = function(){batchPrint(this.value)};  				//	assegna evento onchange alla select

assignColor(getUniqueTypes(iconsAll));	//	Definisce proprietà 'color' di ogni oggetto
batchPrint('all');	//	Stampa tutte le icone


function batchPrint(type) {
//	in base valore passato come argomento, comanda la stampa di tutti
//	gli elementi che rispondono al tipo corrispondente		
	iconsContainer.innerHTML = '';
	if(type == 'all') {
		iconsAll.forEach( (element) => {
			printIcon(element);
		});
	}
	else {
		iconsAll.filter((element , index) => {
			if(element.type == type) printIcon(element);
		});
	}
}

function printIcon(icon) {	
//	Stampa il box-icona passato come argomento all'interno dell'HTML
	iconsContainer.innerHTML += `<li class="single-icon-outer"><i style="color: rgb(${icon.color});" class="${icon.family} ${icon.prefix}${icon.name}"></i><h3 class="margin-t-standard text-uppercase">${icon.name}</h3></li>`;	
}


function getUniqueTypes(array) {
	//	Restituisce un array contenente tutti i diversi tipi di elemento 
	// 	presenti nell'array passato come argomento
	let types = [];
	array.forEach(	(element)	=> {
		if(!types.includes(element.type)) {
			types.push(element.type);
		}
	});
	return types;
}

function assignColor(tipiDiIcona) {
//	Assegna una nuova proprietà 'color' ad ogni oggetto dell'array	
//	Sulla base della proprietà 'type' (già assegnata)
	let colori = generateColors(tipiDiIcona.length);	// = numero di tipi esistenti
	iconsAll = iconsAll.map( (oggetto) => { 
		oggetto.color = colori[tipiDiIcona.indexOf(oggetto.type)];
		return oggetto;
	  }); 
}

function generateColors(colors) {
//	In base al valore passato genera tot valori RGB 
//	e li restituisce sotto forma di array
	var randomColors = [];
	for(let i = 0; i < colors; i++) {
		randomColors.push(getRGB());
	}
	return randomColors;
}

function getRGB() {
//	Restituisce una stringa contenente 3 valori RGB separati da ','
	let rgbColor = [];
	for(let i = 0; i < 3; i++) {
		rgbColor.push(getRandom(0,255));
	}
	return rgbColor.join();
}

function getRandom(min , max) {	
//	Genera un numero casuale compreso fra min e max	
	return Math.floor(Math.random()* ( max - min + 1 ) + min );	
}