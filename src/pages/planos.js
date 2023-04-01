import React from "react";
import Title from "./../components/Title/index";

const planos = [
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
];

function Planos() {
  return (
    <div>
      <Title title={"Planos"} text={"Segue nossos planos:"} />
      {
        <div className="container text-center">
          <div className="row">
            {planos.map((plano, i) => (
              <div className="col" key={i}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {plano.nome} {" "}
                    </h5>
                    <p>{plano.preco}</p>
                    <p className="card-text">{plano.detalhes}</p>
                    <a href={`/detalhes/${plano.nome}`}>
                      <div className="btn btn-primary">Adquirir</div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}
export default Planos;
