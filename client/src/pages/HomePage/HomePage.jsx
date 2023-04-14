import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ListAtendimentos from "../../components/ListAtendimentos/ListAtendimentos";
import useAtendimentoList from "../../hooks/useAtendimentoList/useAtendimentoList";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import './HomePage.css';
import { useEffect, useState } from "react";
import CardAcompanhamentoPedagogico from "../../components/CardAcompanhamentoPedagogico";

function HomePage ()  {
    const {user} = useAuthenticationContext();
    const {isLoading, error, getListaAtendimento} = useAtendimentoList();
    const navigate = useNavigate();
    const [listaAtendimentos, setListaAtendimentos] = useState([]);

    useEffect( () => {
        (async () => {
                const response = await getListaAtendimento(user?.id);
                setListaAtendimentos(response);
        })()
    },[]);


    return (
        <>
            <Header userName = {user?.name} />
            <div className="content-box">
                {!user && <Link to="/login">Faça o Login</Link>}
                {!isLoading && !!error && <p>{error}</p>}
                {user && !listaAtendimentos.length && (<p>Não há atendimento cadastrado</p>)}
                {user && !isLoading && !!listaAtendimentos.length && (
                    <ListAtendimentos 
                        children={<CardAcompanhamentoPedagogico list={listaAtendimentos} />}   
                    />)}
            </div>
        </>

    )
}

export default HomePage;

