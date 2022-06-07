let abaAberta = 0
let width = 0
let height = 0

const classeNavbar = document.querySelector('.navbar');
const classeTitulo = document.querySelector('.footer .container .titulo');
const classeNormal = document.querySelectorAll('.normal');

calcularDimensoes();

function calcularDimensoes() {
    width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;

    console.log(width, height);
    redimensionarHeader();
}

function redimensionarHeader() {
    if (width < 1000) {
        classeNavbar.style.display = 'none'
        quadrado.style.display = 'flex'
        classeTitulo.innerHTML = `<span style="color: #00ffc8">t</span><span style="color: #44e6ff">Vac®</span>`
    }
    if (width >= 1000) {
        classeNavbar.style.display = 'flex'
        quadrado.style.display = 'none'
        classeTitulo.innerHTML = `<span style="color: #00ffc8">t</span><span style="color: #44e6ff">Vac®<br>
        <span class="texto_footer" style="color:black">"O calor é para todos, o frio para poucos. Mas o controle é nosso!"</span>
    </span>`
    }
}

window.addEventListener("resize", calcularDimensoes);

function abaDireita() {
    if (abaAberta == 0) {
        pagina.style.filter = 'brightness(50%)'
        abaSelecao.style.display = 'block'
        abaAberta = 1
    } else if (abaAberta == 1) {
        pagina.style.filter = 'brightness(100%)'
        abaSelecao.style.display = 'none'
        abaAberta = 0
    }
}
function abaDireitaFechar() {
        if (abaAberta == 1) {
        pagina.style.filter = 'brightness(100%)'
        abaSelecao.style.display = 'none'
        abaAberta = 0
    }
}