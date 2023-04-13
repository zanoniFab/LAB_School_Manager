import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

function CardAcompanhamentoPedagogico ({id, data, nomeAluno, titulo}) {
    const navigate = useNavigate();
    const handleNavigateEdit = () => {
        navigate(`/edit/${id}`);
    }
    return (
        <div>
            <p>{nomeAluno}</p>
            <p>{data}</p>
            <p>{titulo}</p>
            <Button onClick={handleNavigateEdit}>Editar</Button>
        </div>
    )


}

export default CardAcompanhamentoPedagogico;