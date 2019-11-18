


 import  person  from './data.js';


console.log(person);



document.querySelector('#imgHumano').addEventListener('click', 
() => {

document.querySelector('#imgAlien').classList.add('esconder');
document.querySelector('#imgRobot').classList.add('esconder');	
document.querySelector('#imgHumanoide').classList.add('esconder');
document.querySelector('#imgParasito').classList.add('esconder');

//aqui traeriamos la data.js
document.querySelector('#resultadosHum').classList.remove('esconder');
document.querySelector('#resultadosHum').textContent =  person;


//document.querySelector('#resultadosHum').textContent;		
});

/*document.querySelector('#imgHumano').addEventListener('click', cargarJS);		
function cargarJS() {		
    fetch('rickandmorty.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html ='';
            data.forEach(function(human) {
                html += `
                <li>${human.specie} ${human.name}</li> 
                `;
            })
            document.querySelector('resultados').innerHTML = html;
        })
    }*/
				

 
