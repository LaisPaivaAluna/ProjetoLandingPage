var setaDireita = window.document.getElementById("seta-direita")
var depoimento1 = window.document.getElementById("depoimento1")
var depoimento2 = window.document.getElementById("depoimento2")
var depoimento3 = window.document.getElementById("depoimento3")
var depoimento4 = window.document.getElementById("depoimento4")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    depoimento1.style = "display:none"
    depoimento4.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    depoimento1.style = "display:flex"
    depoimento4.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:noen"

}



