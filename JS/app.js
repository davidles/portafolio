//Animate: $('.main').animate({parametros}, velocidad, callbak)

$(document).ready(function(){
    $('.main').hide()

    $('.main').append(
        `
        <h2 class="main__h2--color">Hola,<br>mi nombre es<br><span class="title">David<br>Lescano.</span></h2>
                        <span class="dev">Front - End Developer</span>
                        <p>"Soy una persona que empieza en el mundo IT y con una gran motivación. Adoro los
                            desafíos."</p>
                        <button class="btn btn-outline-info">
                            <a href="contact.html" class="btn-contact">Contact Me</a>
                        </button>
        `
    ).fadeIn(4000)

    

})

console.log("Listo")