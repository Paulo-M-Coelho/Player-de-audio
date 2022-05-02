let musicaSom = document.querySelector("audio");
let barraProgress = document.querySelector('progress');
let tempo = document.querySelector('.inicio');
let tempoTotalDaMusica = document.querySelector('.fim');
let listaMusicas = document.querySelector('.main-row');
// BOTÃO DE HOME
let home = document.querySelector('.home')
// BOTÕES DO PLAYER
let voltar = document.querySelector('.voltar');
let proxima = document.querySelector('.proxima');
const btnPause = document.querySelector('.btnPause');
const btnPlay = document.querySelector('.btnPlay');
let menos10 = document.querySelector('.btnMenos10s');
let mais10 = document.querySelector('.btnMais10s');
// DISPLAY QUE MOSTRA O CARD NO CANTO INFERIOR ESQUERDO
var displayMusica = document.querySelector('.player-artist');

// BOTÃO DA PLAYLIST 1
let playlist1 = document.querySelector('.playlist1');


let indexMusica = 0
// VARIAVEL PARA PODER RENDERIZAR UMA PLAYLIST NA TELA QUANDO SELECIONADA
var musicas = musicasss

// FUNÇÕES DE DISPLAY DOS BOTÕES PLAY E PAUSE
function mudarDisplayBtn(){
    btnPlay.classList.add('display');
    btnPause.classList.remove('display')
}
function mudarDisplayBtn2(){
    btnPause.classList.add('display')
    btnPlay.classList.remove('display');
}

// ADICIONA A FUNÇÃO DE PLAY NA MUSICA SELECIONADA
btnPlay.addEventListener('click',()=>{
    
    mudarDisplayBtn();
    playMusic();
})
// ADICIONA A FUNÇÃO DE PAUSE PARA A MUSICA SELECIONADA
btnPause.addEventListener('click',()=>{
   
    mudarDisplayBtn2();
    pauseMusic();
});

onload = ()=>{
    renderCards()
    renderMusic(0)
}

// CRIA O CARD DE CADA MUSICA SEPARADAMENTE

//renderiza os cards das musicas
function renderCards(){
    musicas.forEach(musica=>{
        listaMusicas.innerHTML += `<div id="${musica.id}" onclick="thisMusic('${musica.id}')" 
        class="main-col">
        <h3>${musica.artista}</h3>
        <img src="${musica.img}">
        <h3>${musica.titulo}</h3>
        <p>${musica.descricao}</p>
    </div>`
    }) 
}

function thisMusic(id){
    for (let i in musicas){
        if(musicas[i].id==id) renderMusic(i)

    }
}

// função que renderiza as informações da musica do lado do player
function renderMusic(index) {
    let musicObj = musicas[index]
        musicaSom.src = musicObj.src
        img.src = musicObj.img
        musicName.innerHTML = musicObj.titulo
        artist.innerHTML = musicObj.artista 
    
        mudarDisplayBtn2();
}

// FUNÇÕES DE INTERAÇÃO COM A MUSICA
function playMusic(){
    musicaSom.play()
}
function pauseMusic(){
    musicaSom.pause()
}
menos10.addEventListener("click",  ()=>{
    musicaSom.currentTime -= 10;
});

mais10.addEventListener("click",  ()=>{
    musicaSom.currentTime += 10;
})
//----------------------------------------



// FUNÇÃO PARA PASSAR A MUSICA 
proxima.addEventListener('click',()=>{
    indexMusica++
    if(indexMusica > musicas.length -1){
        indexMusica = 0
    }
    renderMusic(indexMusica);
    barraProgress.style.width = "0"
    tempoTotalDaMusica.textContent = segundosParaMinutos(Math.floor(musicaSom.duration));
    mudarDisplayBtn()
    playMusic()
})
// FUNÇÃO PARA VOLTAR A MUSICA
voltar.addEventListener('click',()=>{
    indexMusica --;
    if(indexMusica < 0){
        indexMusica = 0
    }
    renderMusic(indexMusica);
})

// FUNÇÃO QUE CONVERTE OS SEGUNDOS DA MUSICA PARA MINUTOS
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}

function atualizarBarra(){
    barraProgress.style.width = Math.floor((musicaSom.currentTime / musicaSom.duration) * 100) + "%";
    tempo.textContent = segundosParaMinutos(Math.floor(musicaSom.currentTime));
    tempoTotalDaMusica.textContent = segundosParaMinutos(Math.floor(musicaSom.duration));
    
}
// ZERA O TIMER DA MUSICA ASSIM Q CARREGA OUTRA FAIXA
musicaSom.addEventListener('timeupdate', atualizarBarra);
// FAZ O TEMPO TOTAL DE MUSICA ATUALIZAR ASSIM Q A MUSICA FOR CARREGADA
musicaSom.addEventListener('loadeddata', ()=>{
    tempoTotalDaMusica.textContent = segundosParaMinutos(Math.floor(musicaSom.duration));  
})



//  ESSA FUNÇÃO VERIFICA SE A MUSICA ATUAL ACABOU, SE ACABOU ELA PASSA PARA A PROXIMA MUDANDO O INDEX,
// DA O PLAY, MUDA OS BOTÕES E ATUALIZA A BARRA DE PROGRESSO PARA O ZERO
function autoNext(){
    setInterval(()=>{
        if( musicaSom.ended == true){
            indexMusica++;
            if(indexMusica > musicas.length -1){
                indexMusica = 0;
            }
            renderMusic(indexMusica);
            mudarDisplayBtn();
            barraProgress.style.width = "0";
            tempoTotalDaMusica.textContent = segundosParaMinutos(Math.floor(musicaSom.duration));
            playMusic()
    }},500)   
}  
autoNext()

    
// SELECIONAR A PLAYLIST 1
playlist1.addEventListener("click",(event)=>{
    event.preventDefault();
    musicas = albumBeijoEstranho;
    listaMusicas.innerHTML = "";
    playlist1.classList.add('menu-selecionado');
    home.classList.remove("menu-selecionado");
    
    renderCards()
    renderMusic(0)
})
