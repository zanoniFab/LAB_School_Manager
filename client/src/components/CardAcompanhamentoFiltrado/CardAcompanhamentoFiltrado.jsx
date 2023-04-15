import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import "./CardAcompanhamentoFiltrado.css"
function CardAcompanhamentoFiltrado ({list}) {
    console.log(list)
    const navigate = useNavigate();
    const handleNavigateEdit = () => {
        navigate(`/editarAtendimento/${id}`);
    }
    return (
        <ul className="box-list">
            {list.map((item)=> (
                <li key={item.id}>
                    <p>Data do atendimento: {item.dataAcompanhamento}</p>
                    <p>Nome do Aluno: {item.nomeAluno}</p>
                    <p>Titulo: {item.titulo}</p>
                    <Button onClick={handleNavigateEdit}>Editar</Button>
                </li>
            ))}
        </ul>        
    )
}

export default CardAcompanhamentoFiltrado;