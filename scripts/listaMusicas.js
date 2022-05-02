let musicasss = [
    {
        titulo: "Ring of fire",
        artista: "Jonny Cash",
        descricao: "Original trailer",
        img: "./assets/images/ring of fire.jpg",
        src: "./assets/musicas/Fallout 76_ Ring of Fire (Original Trailer Soundtrack)_ksDX-QfPzI4.mp3",
        id: generateId()
    },
    {
        titulo: "Sente",
        artista: "Vanguart",
        descricao: "Album intervenção lunar",
        img: "./assets/images/sente.jpg",
        src: "./assets/musicas/VanguartSente.mp3",
        id: generateId()
    },
    {
        titulo: "Vamos Viver",
        artista: "Vanguart",
        descricao: "Album intervenção lunar",
        img: "./assets/images/vamos viver.jpg",
        src: "./assets/musicas/Vanguart - Vamos Viver.mp3",
        id: generateId()
    },
    
]

let albumBeijoEstranho = [
    {
        titulo: "Beijo Estranho",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/01. Beijo Estranho.mp3",
        id: generateId()
    },
    {
        titulo: "Todas as Cores",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/02. Todas as Cores.mp3",
        id: generateId()
    },
    {
        titulo: "Felicidades",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/03. Felicidades.mp3",
        id: generateId()
    },
    {
        titulo: "E o Meu Peito Mais Aberto que o Mar da Bahiades",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/04. E o Meu Peito Mais Aberto que o Mar da Bahia.mp3",
        id: generateId()
    },
    {
        titulo: "Homem-deus",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/05. Homem-deus.mp3",
        id: generateId()
    },
    {
        titulo: "Quando Eu Cheguei na Cidade",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/06. Quando Eu Cheguei na Cidade.mp3",
        id: generateId()
    },
    {
        titulo: "Eu Preciso de Você",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/07. Eu Preciso de Você.mp3",
        id: generateId()
    },
    {
        titulo: "Casa Vazia",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/08. Casa Vazia.mp3",
        id: generateId()
    },
    {
        titulo: "Quente é o Medo",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/09. Quente é o Medo.mp3",
        id: generateId()
    },
    {
        titulo: "Menino",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/10. Menino.mp3",
        id: generateId()
    },
    {
        titulo: "Pancada Dura",
        artista: "Vanguart",
        descricao: "Album Beijo estranho",
        img: "./assets/images/capa.jpg",
        src: "./assets/musicas/11. Pancada Dura.mp3",
        id: generateId()
    },
]

function generateId() {

    id = Math.random().toString('32').substring(2)
    return id
}