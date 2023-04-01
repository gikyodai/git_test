import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';
import Card from './../components/Card/index';


const filmes = [{
    "nome": "Má Educação",
    "duracao": "1H45",
    "foto": "ma educ.png",
    "ano": 2003,
    "assistido": true,
    "genero": "Drama/Suspense",
    "descricao": "A trama se passa na Espanha, nos anos 80, e segue dois amigos de infância, Enrique (Martínez) e Ignacio (Bernal), que se reencontram quando Ignacio, agora um ator transexual conhecido como Zahara, retorna para visitar seu antigo colégio e contar sua história para Enrique. A história de Zahara envolve abuso sexual por um padre que trabalhava na escola, além de um amor não correspondido por Enrique quando eram adolescentes. A partir daí, o filme explora temas como amor, amizade, desejo e traição, enquanto desvenda a verdadeira identidade de Zahara e as consequências do passado. 'Má Educação' é um drama cativante e provocativo que aborda questões controversas de maneira sensível e habilidosa.",
    "nota": "3.9/5"
  },
  {
    "nome": "O Poderoso Chefão",
    "duracao": "2H55",
    "foto": "chefao.png",
    "ano": 1972,
    "assistido": true,
    "genero": "Drama/Suspense",
    "descricao": "A trama segue a família Corleone, uma família ítalo-americana envolvida com o crime organizado em Nova York durante os anos 40 e 50. Vito Corleone (Marlon Brando) é o líder da família, um homem poderoso e respeitado, que usa sua influência para ajudar a comunidade ítalo-americana, mas que também é implacável com seus inimigos. Quando Vito é baleado, seu filho Michael (Al Pacino) assume a liderança do negócio e se vê cada vez mais envolvido com o mundo do crime. O filme é um clássico do cinema, aclamado por críticos e espectadores como uma das melhores obras já produzidas.",
    "nota": "4.8/5"
  },
  {
    "nome": "Volver",
    "duracao": "2H00",
    "foto": "volver.png",
    "ano": 2006,
    "assistido": false,
    "genero": "Drama/Suspense",
    "descricao": "A trama gira em torno de Raimunda, uma mulher forte e determinada que enfrenta diversas situações difíceis ao lado de sua filha adolescente. Quando sua tia falece repentinamente, ela precisa lidar com as consequências da morte, ao mesmo tempo em que lida com a descoberta de segredos de família que estavam escondidos por anos. A história se desenrola em um clima de suspense, mistério e fantasia, envolvendo o espectador em um enredo repleto de reviravoltas e surpresas. 'Volver' é um filme fascinante, com belas atuações e uma trama envolvente que aborda temas como a relação entre mães e filhas, a morte, a culpa e a redenção.",
    "nota": "4.4/5",
  },
  {
    nome: "Plano 01",
    preco: "R$ 5,00/MÊS",
    detalhes: "Qualidade 420p"
  },

  {
    nome: "Plano 02",
    preco: "R$ 10,00/MÊS",
    detalhes: "Qualidade 720p"
  },

  {
    nome: "Plano 03",
    preco: "R$ 15,00/MÊS",
    detalhes: "Qualidade 1080p FULL HD"
  },
  ]
  


function Detalhes() {
    const { filme } = useParams();
    

    const filmeEscolhido = filmes.filter(f =>
        f.nome === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />
            <div className="container text-center">
                <p>Filme: {filmeEscolhido[0].nome}</p>
                <div>
                <div class="row">
                    <div class="col-md-6">
                        <p><p>{filmeEscolhido[0].descricao}</p>
                    <p>{filmeEscolhido[0].genero}</p>
                    <p>{filmeEscolhido[0].duracao}</p>
                    <p>{filmeEscolhido[0].nota}</p>
                    <p>Assistido: {filmeEscolhido[0].assistido ? "Sim" : "Não"}</p></p>
                    </div>
                    
                    <div class="col-md-6">
            <img src={`/assets/images/${filmeEscolhido[0].foto}`} alt={filmeEscolhido[0].nome} />
        </div>
                    
                    
                </div>
                <Comments filme={filmeEscolhido[0].nome} />
            </div>
        </div></div>
    )
}

export default Detalhes;