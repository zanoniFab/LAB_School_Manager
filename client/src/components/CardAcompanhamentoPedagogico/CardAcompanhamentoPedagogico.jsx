import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

function CardAcompanhamentoPedagogico ({list}) {
    const navigate = useNavigate();
    const handleNavigateEdit = () => {
        navigate(`/editarAtendimento/${id}`);
    }
    console.log(list)
    return (
        <ul>
            {list.map((item)=> (
                <li key={item.id}>
                    <p>Nome do Aluno: {item.studentId}</p>
                    <p>Nome do Pedagogo: {item.userId}</p>
                    <p>Data do atendimento: {item.date}</p>
                    <p>Titulo: {item.title}</p>
                    <Button onClick={handleNavigateEdit}>Editar</Button>
                </li>
            ))}
        </ul>        
    )
}

export default CardAcompanhamentoPedagogico;