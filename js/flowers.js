/* ========================================= */
/* SISTEMA DE PÉTALOS - DÍA ESPECIAL 🌸      */
/* ========================================= */


const petalsContainer = document.getElementById(
    "petals-container"
);


/*
    Cantidad de pétalos visibles
*/

const totalPetals = 35;



/*
    Crear pétalos
*/

function createPetals(){

    for(let i = 0; i < totalPetals; i++){

        const petal = document.createElement("span");


        /*
            Clase CSS
        */

        petal.classList.add("petal");



        /*
            Posición horizontal aleatoria
        */

        petal.style.left = 
        Math.random() * 100 + "%";



        /*
            Tamaño aleatorio
        */

        const size = 
        Math.random() * 15 + 10;


        petal.style.width = size + "px";

        petal.style.height = size + "px";



        /*
            Duración de caída
        */

        const duration =
        Math.random() * 8 + 8;


        petal.style.animationDuration =
        `${duration}s`;



        /*
            Retraso para que no caigan todos juntos
        */

        const delay =
        Math.random() * 10;


        petal.style.animationDelay =
        `${delay}s`;



        /*
            Rotación inicial
        */

        petal.style.transform =
        `rotate(${Math.random()*360}deg)`;



        /*
            Agregar al DOM
        */

        petalsContainer.appendChild(petal);

    }

}



/*
    Iniciar cuando cargue la página
*/

window.addEventListener(
    "DOMContentLoaded",
    ()=>{

        createPetals();

    }
);
