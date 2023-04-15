import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

function CardAcompanhamentoPedagogico ({list}) {
    const navigate = useNavigate();
    const handleNavigateEdit = () => {
        navigate(`/editarAtendimento/${id}`);
    }

    return (
        <ul>
            {list.map((item)=> (
                <li key={item.id}>
                    <p>Nome do Aluno: {item.nomeAluno}</p>
                    <p>Nome do Pedagogo: {item.nomePedagogo}</p>
                    <p>Data do atendimento: {item.dataAcompanhamento}</p>
                    <p>Titulo: {item.titulo}</p>
                    <Button onClick={handleNavigateEdit}>Editar</Button>
                </li>
            ))}
        </ul>        
    )
}

export default CardAcompanhamentoPedagogico;