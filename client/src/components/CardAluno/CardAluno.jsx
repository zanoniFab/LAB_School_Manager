import {useNavigate} from "react-router-dom";

function CardAluno ({id, nomeAluno, dataNascimento, telefone, nota}) {

    return (
        <div>
            <p>Nome: {nomeAluno}</p>
            <p>Data de Nascimento: {dataNascimento}</p>
            <p>Telefone: {telefone}</p>
            <p>Nota: {nota}</p>
            <p>Id do Aluno: {id}</p>
        </div>
    )


}

export default CardAluno;
