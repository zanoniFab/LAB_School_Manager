import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import AlunoFilter from "../../components/AlunoFilter";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import useAlunosList from '../../hooks/useAlunosList';
import ListAlunos from '../../components/ListAlunos';
import './AlunosPage.css';

function AlunosPage ()  {
    const {user} = useAuthenticationContext();
    const {alunos, isLoading, error, getListaAlunosByName, getListaAlunos} = useAlunosList();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/registerAluno");
    }

    useEffect( () => {
        (async () => {
            await getListaAlunos();
        })()
    },[]);
    
    return (
        <>
            {!user && <Link to="/login">Faça o Login</Link>}
            {user && (
                <><Header userName = {user?.name} />
                <div className="content-box">
                    <div className="box-filter">
                        <AlunoFilter onFilter={getListaAlunosByName} />
                        <Button onClick={handleClick}>Cadastrar Aluno</Button>
                    </div>
                    {!isLoading && !!error && <p>{error}</p>}
                    {user && !alunos.length && (<p className="error">Não há aluno cadastrado</p>)}
                    {user && !isLoading && !!alunos.length && (<ListAlunos list={alunos} />)}
                </div></>
            )}
        </>

    )
}

export default AlunosPage;
