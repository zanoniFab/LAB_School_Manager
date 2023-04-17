import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthenticationContext } from '../../hooks/useAuthentication';
import Button from "../Button/Button";

function Header({...props}) {
  const {logout} = useAuthenticationContext();
  const navigate = useNavigate();
  const {userName} = props;
    
    const handleLogout = () => {
      logout();
      navigate("/login");
    }

    return (
      <header className="navbar-container">
        <Link to="/home" className="box-logo">
          <img alt="Logo" src="../logo765x625.png"/>
        </Link>

        <div className="box-buttons">
          <Link to="/home">Início</Link>
          <Link to="/listagemAlunos">Alunos</Link>
          <Link className="acompanhamento" to="/acompanhamentosPedagogicos">Acompanhamentos</Link>
        </div>

        <div className="box-user">
          <h3 className="username">Olá, {userName}!</h3>
        </div>
        <Button onClick={handleLogout} className="logout-button">Sair </Button> 

      </header>
    )
  }
  
export default Header;