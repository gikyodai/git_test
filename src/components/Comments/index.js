const commentarios = [{
    "filme": "Volver", "comenatarios": [{
        "usuario": "monica:",
        "comentario": "Achei meio chato mas tudo bem"
    },
    {
        "usuario": "joao:",
        "comentario": "o diretor é maluco e o filme se iguala"
    },
    {
        "usuario": "marcos:",
        "comentario": "muito legal as reviravoltas, fiquei chocado"
    }
    ]
},
{
    "filme": "O Poderoso Chefão", "comenatarios": [{
        "usuario": "joãozinho:",
        "comentario": "overrated :)"
    },
    {
        "usuario": "fernanda:",
        "comentario": "o melhor filme da minha vida"
    }
    ]
},
{
    "filme": "Má Educação", "comenatarios": [{
        "usuario": "amanda:",
        "comentario": "muito loco"
    },
    {
        "usuario": "karina:",
        "comentario": "do mesmo diretor de Volver, mas muito melhor que o mesmo"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        {comment.usuario}
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}