import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';



function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />
            <div class='container'>
                <div class="row">
                    <div class="col-md-6">
                        <p>A WZE é uma empresa de tecnologia que desenvolve soluções inovadoras para desafios complexos. Com uma equipe altamente qualificada e especializada em diversas áreas, criamos soluções personalizadas para atender às necessidades de nossos clientes. Focados na inovação, qualidade e eficiência, acreditamos no poder da tecnologia para transformar o mundo e estamos sempre na vanguarda da inovação para impulsionar o progresso e melhorar a vida das pessoas.</p>
                    </div>
                    <div class="col-md-6">
                    <img src='/assets/images/wze.PNG' alt="imagem" className="card-img-top" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sobre;