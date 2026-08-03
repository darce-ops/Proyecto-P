/* ========================================= */
/* DÍA ESPECIAL - APP PRINCIPAL 🌸           */
/* ========================================= */


// Seleccionar elementos

const openButton = document.getElementById(
    "openInvitation"
);


const letterSection = document.getElementById(
    "letter"
);


const heroSection = document.querySelector(
    ".hero"
);



/*
    Evento botón abrir invitación
*/

openButton.addEventListener(
    "click",
    () => {


        /*
            Animación de salida del inicio
        */

        heroSection.style.transition =
        "all 1s ease";


        heroSection.style.opacity = "0";


        heroSection.style.transform =
        "scale(0.95)";



        /*
            Esperar transición
        */

        setTimeout(()=>{


            heroSection.style.display =
            "none";



            /*
                Mostrar carta
            */

            letterSection.classList.remove(
                "hidden"
            );



            /*
                Scroll automático
            */

            letterSection.scrollIntoView({

                behavior:"smooth"

            });



        },1000);


    }
);
