import './ListAtendimentos.css';

function ListAtendimentos({children}) {

    return (
        <div className="list-atendimento">
                {children}
        </div>
    )

}

export default ListAtendimentos;