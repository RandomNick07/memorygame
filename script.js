var fichas = ['squirtle.png','squirtle.png',
            'pikachu.png','pikachu.png',
            'eevee.png','eevee.png',
            'charmander.png','charmander.png',
            'psyduck.png','psyduck.png',
            'bulbasaur.png','bulbasaur.png',
            'meowth.png','meowth.png',
            'snorlax.png','snorlax.png'];

function mezclarFichas(array) {
    for (var i = array.length; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

mezclarFichas(fichas);

var fichasClickeadas = [];
var divFichaId = [];
var fichasVolteadas = 0;

function colocarFichas(){
	var divFicha = '';
	for(var i = 0; i < fichas.length; i++){
		divFicha += '<div id="ficha_'+i+'" onclick="voltearFicha(this,\''+fichas[i]+'\')"></div>';
	}
	document.getElementById('juego').innerHTML = divFicha;
}

function voltearFicha(ficha,nombre){
    if(ficha.innerHTML == "" && fichasClickeadas.length < 2){
        ficha.style.background = "url(fichas/"+nombre+")";
        ficha.style.backgroundSize = "cover";
        if(fichasClickeadas.length == 0){
            fichasClickeadas.push(nombre);
            divFichaId.push(ficha.id);
        } else if (fichasClickeadas.length == 1){
            fichasClickeadas.push(nombre);
            divFichaId.push(ficha.id);
            if(fichasClickeadas[0] == fichasClickeadas[1]){
                fichasVolteadas += 2;
                fichasClickeadas = [];
                divFichaId = [];
                if(fichasVolteadas == fichas.length){
                    var alerta = function() {alert("Ganaste!");}
                    setTimeout(alerta, 800);
                }
            } else {
                function ocultarFicha(){
                    var ficha_1 = document.getElementById(divFichaId[0]);
                    var ficha_2 = document.getElementById(divFichaId[1]);
                    ficha_1.style.background = 'url("imagen.jpg")';
                    ficha_2.style.background = 'url("imagen.jpg")';
                    fichasClickeadas = [];
                    divFichaId = [];
                }
                setTimeout(ocultarFicha, 800);
            }
        }
    }
}