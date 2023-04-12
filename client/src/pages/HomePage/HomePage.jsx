import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";
import './HomePage.css';
import Button from '../../components/Button';
function HomePage ()  {
    const {user} = useAuthenticationContext();
    
    return (
        <>
            <Header userName = {user?.name} />
            <div className="content-box">
                <div className="box-menu-lateral">
                    <h4>Menu</h4>
                    <Button><Link to="/registerAluno">Cadastrar Aluno</Link></Button>      
                </div>
            </div>
        </>

    )
}

export default HomePage;