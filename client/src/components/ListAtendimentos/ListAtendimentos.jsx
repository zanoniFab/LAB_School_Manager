import CardAcompanhamentoPedagogico from "../CardAcompanhamentoPedagogico/CardAcompanhamentoPedagogico";


function ListAtendimentos({list}) {
    console.log("ListAtendimentos",list);
    return (
        <div className="list-atendimento">
            <ul>
                {list.map((item)=> (
                    <li key={item.id}>
                        <CardAcompanhamentoPedagogico
                            id={item.id}
                            data={item.date}
                            nomeAluno={item.nomeAluno}
                            titulo={item.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ListAtendimentos;