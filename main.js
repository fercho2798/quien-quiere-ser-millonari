var preguntas = ["¿Cuál es el animal que no come carne?",
"¿Cuál es la parroquia de Quito?",
"¿Cuál es el objeto que no produce luz?",
"¿Qué actor de doblaje hace la voz de goku en español latino?",
"¿Cuál es una palabra?",
"¿Noé es el que...?",
"¿Cuál es el autor del libro Harry Potter?",
"¿Cuál es la fórmula química del agua?",
"¿Cuál es la símbolo químico del hierro?",
"¿En qué lugar planificó su estrategia para la batalla de Pichincha  Antonio José de sucre es?",
"¿Cómo se llama la línea que atraviesa Ecuador?",
"¿Qué tortuga fue importante en Galápagos?"];


var respuestas =[
    ["A) Cabra","B)León","C)Puma","D) Tigre"],
    ["A) Chillogallo","B) San Roque","C) El Transito ","D) El Pintado"],
    ["A) Audífonos ","B) Vela ","C) Linterna ","D) Foco"],
    ["A) Mario Castañeda ","B) Rene García ","C. Gerardo Reyero ","D) Akira Toriyama "],
    ["A) 123","B) Hola","C)Pepito se fue","D)3 bandidos"],
    ["A) Construyó una arca ","B) El padre de la fe ","C) Libero a los esclavos de Egipto ","D) Peleo con Goliat"],
    ["A) William Shakespeare","B) Gabriel García Márquez ","C) J. R. R. Tolkien","D) J. K. Rowling"],
    ["A) HHO","B) H2O","C. Hi2O","D) O2H"],
    ["A) Fe ","B) Hi","C. He","D) Zin"],
    ["A) San Roque ","B). San Juan ","C) Chillogallo ","D) 24 de Mayo"],
    ["A) Línea japosai","B) La raya","C) Línea del océano","D) Línea equinoccial"],
    ["A) Solitario George ","B) Soldado caído ","C) La tortuga pequeña ","D) Solitario ferch "]

];
var piestas=[
    "Cabra",
    "Chillogallo",
    "Audifonos",
    "Mario Castañeda",
    "Hola",
    "Construyó un arca",
    "J. K. Rowling",
     "H2O",
     "Fe",
     "Chillogallo",
     "Linea equicnocial",
     "Solitario George"
]
var respuesta_publico=[
["A. 60%","B. 5%","C. 10% ","D.25% "],
["A. 40%","B. 2%","C. 18%","D. 40%"],
["A. 20%","B. 20% ","30C. 10%","D. 20% "],
["A. 25%","B. 50%","C. 10% ","D.25% "],
["A. 25%","B. 25%","C. 25%","D. 25%"],
["A. 20%","B. 50% ","C. 10%","D. 20% "],
["A. 60%","B. 5%","C. 10% ","D.25% "],
["A. 40%","B. 2%","C. 18%","D. 40%"],
["A. 20%","B. 20% ","30C. 10%","D. 20% "],
["A. 25%","B. 50%","C. 10% ","D.25% "],
["A. 25%","B. 25%","C. 25%","D. 25%"],
["A. 40%","B. 2%","C. 18%","D. 40%"]
];
var botones=[
    document.getElementById("r0"),
    document.getElementById("r1"),
    document.getElementById("r2"),
    document.getElementById("r3")
];
var tab = [];
var tab2 = [];
var pregs = Math.floor(Math.random()*preguntas.length);
var pregsPasadas = [];
var puntuacion = 0;
var comprobada = false;

function reinit () {
    pregs = Math.floor(Math.random()*preguntas.length);
    return pregs;
}
function recorrerPreg (){
    pregsPasadas.push(pregs);

    comprobada = false;

    reinit();

    for (let w = 0; w < pregsPasadas.length; w++) {
        if (pregsPasadas[w] == pregs) {
            reinit();
    }
}
    if (pregsPasadas.length == preguntas.length && puntuacion < 900) {
        alert('Felicidades ganaste: $'+puntuacion);
        location.reload(recorrerPreg());
    }else if (puntuacion  == 1000) {
        alert('Felicidades ganaste: $'+puntuacion);
        location.reload(recorrerPreg());
    }
    document.getElementById("puntajes").innerHTML=('su puntaje es: $ '+puntuacion)
    console.log(preguntas[pregs]);
    document.getElementById("result").innerHTML=preguntas[pregs];
    var lugar_correcto= respuestas[pregs];
    botones[0].value = lugar_correcto[0];
    botones[1].value = lugar_correcto[1];
    botones[2].value = lugar_correcto[2];
    botones[3].value = lugar_correcto[3];   
}
function siguiente(){
     if(comprobada == true){

        return (recorrerPreg());
}else{
         alert('respuesta sin comprobar');
    }
}
onload=recorrerPreg();
function carga_sonido(b1){
    var audio = new Audio('Undertale Sound Effect - Saving.mp3');
    audio.play();
    b1.className="pinta";
}
function ayudas(boton){
    var comodin=piestas[pregs];
    boton.className="comodin";
    document.getElementById("consejos").innerHTML=comodin;
}
function publico(botons){
    botons.className="comodin";
    var comodin=respuesta_publico[pregs];
    document.getElementById("consejos").innerHTML=comodin;
    
}
function eliminar(b){
    b.className="comodin";
    console.log(botones[0].value);
        tab[0] = preguntas[0] == preguntas[pregs] && botones[3];
        tab[1] = preguntas[1] == preguntas[pregs] && botones[2];
        tab[2] = preguntas[2] == preguntas[pregs] && botones[3];
        tab[3] = preguntas[3] == preguntas[pregs] && botones[2];
        tab[4] = preguntas[4] == preguntas[pregs] && botones[3];
        tab[5] = preguntas[5] == preguntas[pregs] && botones[3];
        tab[6] = preguntas[6] == preguntas[pregs] && botones[2];
        tab[7] = preguntas[7] == preguntas[pregs] && botones[2];
        tab[8] = preguntas[8] == preguntas[pregs] && botones[1];
        tab[9] = preguntas[9] == preguntas[pregs] && botones[3];
        tab[10] = preguntas[10] == preguntas[pregs] && botones[2];
        tab[11] = preguntas[11] == preguntas[pregs] && botones[2];
        for(var i=0;i<12;i++){
            tab[i].className="eliminar";
    }
}

function eliminar1(v){
    v.className="comodin";
    console.log(botones[0].value);
        tab2[0] = preguntas[0] == preguntas[pregs] && botones[1];
        tab2[1] = preguntas[1] == preguntas[pregs] && botones[1];
        tab2[2] = preguntas[2] == preguntas[pregs] && botones[1];
        tab2[3] = preguntas[3] == preguntas[pregs] && botones[3];
        tab2[4] = preguntas[4] == preguntas[pregs] && botones[0];
        tab2[5] = preguntas[5] == preguntas[pregs] && botones[1];
        tab2[6] = preguntas[6] == preguntas[pregs] && botones[0];
        tab2[7] = preguntas[7] == preguntas[pregs] && botones[0];
        tab2[8] = preguntas[8] == preguntas[pregs] && botones[2];
        tab2[9] = preguntas[9] == preguntas[pregs] && botones[0];
        tab2[10] = preguntas[10] == preguntas[pregs] && botones[1];
        tab2[11] = preguntas[11] == preguntas[pregs] && botones[3];
        for(var i=0;i<12;i++){
           tab2[i].className="eliminar";                  
    }
}

function comprobar(){
     console.log(botones[0].value);
    if((preguntas[0] == preguntas[pregs] && botones[0].className == 'pinta')
    ||(preguntas[1] == preguntas[pregs] && botones[0].className == 'pinta')
    ||(preguntas[2] == preguntas[pregs] && botones[0].className == 'pinta')
    ||(preguntas[3] == preguntas[pregs] && botones[0].className == 'pinta')
    ||(preguntas[4] == preguntas[pregs] && botones[1].className == 'pinta')
    ||(preguntas[5] == preguntas[pregs] && botones[0].className == 'pinta')
    ||(preguntas[6] == preguntas[pregs] && botones[3].className == 'pinta')
    ||(preguntas[7] == preguntas[pregs] && botones[1].className == 'pinta')
    ||(preguntas[8] == preguntas[pregs] && botones[0].className == 'pinta')
    ||(preguntas[9] == preguntas[pregs] && botones[2].className == 'pinta')
    ||(preguntas[10] == preguntas[pregs] && botones[3].className == 'pinta')
    ||(preguntas[11] == preguntas[pregs] && botones[0].className == 'pinta')
   
    ){
        comprobada = true;
        puntuacion += 100;
        console.log('RESPUESTA CORRECTA');
       
        document.getElementById("respuesta").innerHTML = ('RESPUESTA CORRECTA');
    }else{
        comprobada = true;
        puntuacion += 0;
        console.log('RESPUESTA CORRECTA');
        document.getElementById("respuesta").innerHTML = ('RESPUESTA INCORRECTA');
    }
    botones[0].classList.remove("pinta");
    botones[1].classList.remove("pinta");
    botones[2].classList.remove("pinta");
    botones[3].classList.remove("pinta");
}