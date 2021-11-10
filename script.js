var carta1 = {
    nome: "Frodo",
    imagem: "https://c4.wallpaperflare.com/wallpaper/255/582/350/frodo-baggins-the-lord-of-the-rings-the-lord-of-the-rings-the-fellowship-of-the-ring-the-one-ring-elijah-wood-wallpaper-preview.jpg",
    atributos: {
        Força: 2,
        Destreza: 4,
        Inteligencia: 9,
        Vida: 6
    }
}

var carta2 = {
    nome: "Sam Gamgee",
    imagem: "https://i.redd.it/b5kfd18ncoj61.jpg",
    atributos: {
        Força: 3,
        Destreza: 8,
        Inteligencia: 5,
        Vida: 5
    }
}

var carta3 = {
    nome: "Aragorn",
    imagem: "https://wallpaperaccess.com/full/886797.jpg",
    atributos: {
        Força: 8,
        Destreza: 5,
        Inteligencia: 2,
        Vida: 7
    }
}

var carta4 = {
    nome: "Legolas",
    imagem: "https://rollingstone.uol.com.br/media/_versions/orlando_bloom_em_senhor_dos_aneis_divulgacao_new_line_widelg.jpg",
    atributos: {
        Força: 4,
        Destreza: 6,
        Inteligencia: 4,
        Vida: 6
    }
}

var carta5 = {
    nome: "Galadriel - SUPER TRUNFO",
    imagem: "https://www.mapinguanerd.com.br/wp-content/uploads/2017/09/Lady.png",
    atributos: {
        Força: 10,
        Destreza: 10,
        Inteligencia: 10,
        Vida: 10
    }
}

var carta6 = {
    nome: "Gandalf o Cinzento",
    imagem: "https://mixdeseries.com.br/wp-content/uploads/2017/12/gandalf.jpg",
    atributos: {
        Força: 6,
        Destreza: 5,
        Inteligencia: 8,
        Vida: 8
    }
}

var carta7 = {
    nome: "Gimli",
    imagem: "https://caldeiraopop.files.wordpress.com/2015/06/gimli-1.jpg",
    atributos: {
        Força: 9,
        Destreza: 3,
        Inteligencia: 6,
        Vida: 8
    }
}

var carta8 = {
    nome: "Boromir",
    imagem: "http://4.bp.blogspot.com/_TnpHE7LkzgI/SagL1caECpI/AAAAAAAAAT4/OSMm2__IKZU/w1200-h630-p-k-no-nu/Boromir_grumpy.jpg",
    atributos: {
        Força: 7,
        Destreza: 6,
        Inteligencia: 5,
        Vida: 7
    }
}

var carta9 = {
    nome: "Barbárvore",
    imagem: "https://i0.wp.com/www.valinor.com.br/wp-content/uploads/2010/05/Barbarvore_loc1.jpg",
    atributos: {
        Força: 7,
        Destreza: 8,
        Inteligencia: 4,
        Vida: 5
    }
}

var carta10 = {
    nome: "Sméagol",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/05/legiao_qzjatUN6Ed7lkwu824OPohrK9i0MJpfCScRB_Le1yG.jpg.jpeg",
    atributos: {
        Força: 7,
        Destreza: 6,
        Inteligencia: 5,
        Vida: 7
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]
var cartaMaquina
var cartaJogador

var placar = [0, 0]
exibePlacar();


function sortearCarta() {
    var h2 = document.getElementById("h2")
    var numeroCartaMaquina = parseInt(Math.random() * 10) //Sorteia N° 0 a 3
    cartaMaquina = cartas[numeroCartaMaquina] //Coloca N° sorteado como Indice do Array

    var numeroCartaJogador = parseInt(Math.random() * 10)
    while (numeroCartaMaquina == numeroCartaJogador) { //While pra evitar Carta repetida
        numeroCartaJogador = parseInt(Math.random() * 10)
    }

    cartaJogador = cartas[numeroCartaJogador]
    //cartaJogador = cartas[8]


    document.getElementById("btnJogar").style.display = "inline"
    // document.getElementById("btnJogar").disabled = false //Habilita Botão Jogar
    h2.innerHTML = "Escolha seu atributo e clique em Jogar para duelar"

    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
    exibirCartaJogador()
    zerarCartaMaquina()

}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")

    for (var i = 0; i < radioAtributos.length; i++) { //Percorre os Radios procurando o selecionado "checked"
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value //Retorna o atributo selecionado, exemplo Força
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    var h2 = document.getElementById("h2")

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]


    if (valorCartaJogador > valorCartaMaquina) {
        placar[0]++
        htmlResultado = `<p class='resultado-final'> ${cartaJogador.nome} venceu ${cartaMaquina.nome} em um duelo</p>`
    } else if (valorCartaJogador < valorCartaMaquina) {
        placar[1]++
        htmlResultado = `<p class='resultado-final'>${cartaJogador.nome} perdeu o duelo para ${cartaMaquina.nome}</p>`
    } else {
        placar[0]++
        placar[1]++
        htmlResultado = `<p class='resultado-final'>${cartaJogador.nome} e ${cartaMaquina.nome} empataram</p>`
    }

    divResultado.innerHTML = htmlResultado
    h2.innerHTML = ""

    document.getElementById("btnJogar").style.display = 'none'
    exibirCartaMaquina()
    exibePlacar();

}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += " <input type='radio' name='atributo' value='" + atributo + "'>  " + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += " <p class='carta-MaquinaStatus' name='atributo' value='" + atributo + "'> " + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibePlacar() {
    var placarJogador = document.getElementById("placarJogador")
    var placarMaquina = document.getElementById("placarMaquina")

    placarJogador.innerHTML = (`Jogador: ${placar[0]}`)
    placarMaquina.innerHTML = (`Maquina: ${placar[1]}`)
}

function zerarCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.innerHTML = ""
    divCartaMaquina.style.backgroundImage = ""
}

function zerarPlacar() {
    placar[0] = 0
    placar[1] = 0
    exibePlacar()
}