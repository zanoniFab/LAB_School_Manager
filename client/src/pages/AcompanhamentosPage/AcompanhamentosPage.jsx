import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import AtendimentoFilter from "../../components/AtendimentoFilter";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import useAtendimentoList from '../../hooks/useAtendimentoList';
import ListAtendimentos from "../../components/ListAtendimentos";
import CardAcompanhamentoFiltrado from "../../components/CardAcompanhamentoFiltrado";
import './AcompanhamentosPage.css';
function AcompanhamentosPage ()  {
    const {user} = useAuthenticationContext();
    const {atendimentos, isLoading, error, getListaAtendimentoByTitulo, getListaAtendimento} = useAtendimentoList();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cadastroAtendimento");
    }

    useEffect( () => {
        (async () => {
            await getListaAtendimento(user?.id);
        })()
    },[]);

    
    return (
        <>
            {user && (
                <>
                    <Header userName = {user?.name} />
                    <div className="content-box">
                        <div className="box-filter">
                            <AtendimentoFilter onFilter={getListaAtendimentoByTitulo} />
                            <Button onClick={handleClick}>Cadastrar Atendimento</Button>
                        </div>
                        {!isLoading && !!error && <p>{error}</p>}
                        {user && !atendimentos.length && (<p className="error">Não há atendimentos cadastrados</p>)}
                        {user && !isLoading && !!atendimentos.length && (
                            <ListAtendimentos 
                                children={<CardAcompanhamentoFiltrado list={atendimentos} />}   
                            />)}
                    </div>
                </>
                )}
        </>

    )
}

export default AcompanhamentosPage;
