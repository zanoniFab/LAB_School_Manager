import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";

function HomePage ()  {
    const {user} = useAuthenticationContext();
    
    return (
        <>
            <Header/>
            <div className="content-box">
                <h3>Olá, {user?.name}!</h3>
                <Link to="/registerAluno">Cadastrar Aluno</Link>
            </div>
        </>

    )
}

export default HomePage;