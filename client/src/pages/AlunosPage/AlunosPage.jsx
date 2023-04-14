import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import AlunoFilter from "../../components/AlunoFilter";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import useAlunosList from '../../hooks/useAlunosList';
import ListAlunos from '../../components/ListAlunos';
function AlunosPage ()  {
    const {user} = useAuthenticationContext();
    const {isLoading, error, getListaAlunos} = useAlunosList();
    const navigate = useNavigate();
    const [listaAlunos, setListaAlunos] = useState([]);

    const handleClick = () => {
        navigate("/registerAluno");
    }

    useEffect( () => {
        (async () => {
                const response = await getListaAlunos();
                setListaAlunos(response);
        })()
    },[]);

    
    return (
        <>
            <Header userName = {user?.name} />
            <div className="content-box">
                <div className="box-top">
                    <AlunoFilter onFilter={getListaAlunos} />
                    <Button onClick={handleClick}>Cadastrar Aluno</Button>
                </div>
                {!user && <Link to="/login">Faça o Login</Link>}
                {!isLoading && !!error && <p>{error}</p>}
                {user && !listaAlunos.length && (<p>Não há aluno cadastrado</p>)}
                {user && !isLoading && !!listaAlunos.length && (<ListAlunos list={listaAlunos} />)}
            </div>
        </>

    )
}

export default AlunosPage;