import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import AtendimentoFilter from "../../components/AtendimentoFilter";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import useAtendimentoList from '../../hooks/useAtendimentoList';
import ListAtendimentos from "../../components/ListAtendimentos";
import CardAcompanhamentoFiltrado from "../../components/CardAcompanhamentoFiltrado";

function AcompanhamentosPage ()  {
    const {user} = useAuthenticationContext();
    const {isLoading, error, getListaAtendimentoByTitulo} = useAtendimentoList();
    const navigate = useNavigate();
    const [listaAtendimentos, setListaAtendimentos] = useState([]);

    const handleClick = () => {
        navigate("/cadastroAtendimento");
    }

    useEffect( () => {
        (async () => {
                const response = await getListaAtendimentoByTitulo();
                setListaAtendimentos(response);
        })()
    },[]);

    
    return (
        <>
            <Header userName = {user?.name} />
            <div className="content-box">
                <div className="box-top">
                    <AtendimentoFilter onFilter={getListaAtendimentoByTitulo} />
                    <Button className="filter-button" onClick={handleClick}>Cadastrar Atendimento</Button>
                </div>
                {!user && <Link to="/login">Faça o Login</Link>}
                {!isLoading && !!error && <p>{error}</p>}
                {user && !listaAtendimentos.length && (<p>Não encontrado</p>)}
                {user && !isLoading && !!listaAtendimentos.length && (
                    <ListAtendimentos 
                        children={<CardAcompanhamentoFiltrado list={listaAtendimentos} />}   
                    />)}
            </div>
        </>

    )
}

export default AcompanhamentosPage;
