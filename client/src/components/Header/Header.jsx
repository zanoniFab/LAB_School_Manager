import "./Header.css";
import { Link } from "react-router-dom";
function Header({...props}) {
    const {userName} = props;
    return (
      <header className="navbar-container">
        <Link to="/home" className="box-logo">
          <img alt="Logo" src="../logo765x625.png"/>
        </Link>

        <div className="box-buttons">
          <Link to="/home">Início</Link>
          <Link to="/listagemAlunos">Alunos</Link>
          <Link className="acompanhamento" to="/acompanhamentosPedagogicos">Acompanhamentos Pedagógicos</Link>
        </div>

        <div className="box-user">
          <h3 className="username">Olá, {userName}!</h3>
          <Link to="/login">Sair</Link>  
        </div>

      </header>
    )
  }
  
export default Header;