import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ListAtendimentos from "../../components/ListAtendimentos/ListAtendimentos";
import useAtendimentoList from "../../hooks/useAtendimentoList/useAtendimentoList";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import './HomePage.css';
import { useEffect } from "react";
import CardAcompanhamentoPedagogico from "../../components/CardAcompanhamentoPedagogico";

function HomePage ()  {
    const {user} = useAuthenticationContext();
    const {atendimentos, isLoading, error, getListaAtendimento} = useAtendimentoList();

    useEffect( () => {
        (async () => {
            await getListaAtendimento(user?.id);
        })()
    },[]);


    return (
        <>
            <Header userName = {user?.name} />
            <div className="content-box">
                {!user && <Link to="/login">Faça o Login</Link>}
                {!isLoading && !!error && <p>{error}</p>}
                {user && !atendimentos.length && (<p>Não há atendimento cadastrado</p>)}
                {user && !isLoading && !!atendimentos.length && (
                    <ListAtendimentos 
                        children={<CardAcompanhamentoPedagogico list={atendimentos} />}   
                    />)}
            </div>
        </>

    )
}

export default HomePage;

