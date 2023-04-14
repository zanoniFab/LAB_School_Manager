import CardAluno from "../CardAluno";


function ListAlunos({list}) {

    return (
        <div className="list-alunos">
            <ul>
                {list.map((item)=> (
                    <li key={item.id}>
                        <CardAluno
                            id={item.id}
                            nomeAluno={item.nome}
                            dataNascimento={item.dataNascimento}
                            telefone={item.telefone}
                            nota={item.nota}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ListAlunos;