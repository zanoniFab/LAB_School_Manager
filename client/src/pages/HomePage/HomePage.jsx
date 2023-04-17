import { Link } from "react-router-dom";
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
        getListaAtendimento(user?.id);
    },[]);


    return (
        <>
            {!user && <Link to="/login">Faça o Login</Link>}
            {user && (
                <>
                    <Header userName = {user?.name} />
                    <div className="content-box">
                        {!isLoading && !!error && <p>{error}</p>}
                        {!isLoading && !error && !atendimentos.length && (<p>Não há atendimento cadastrado</p>)}
                        {!isLoading && (
                            <ListAtendimentos 
                                children={<CardAcompanhamentoPedagogico list={atendimentos} />}   
                            />)}
                    </div>
                </>
            )}
        </>

    )
}

export default HomePage;

