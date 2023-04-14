import "./Header.css";
import { Link } from "react-router-dom";
function Header({...props}) {
    const {userName} = props;
    return (
      <header className="navbar">

        <img alt="logo" src="../logo765x625.png"></img>

        <div className="box-buttons">
          <Link to="/home">Início</Link>
          <Link to="/listagemAlunos">Alunos</Link>
          <Link to="/acompanhamentosPedagógicos">Acompanhamentos Pedagógicos(item7)</Link>
          <Link to="/login">Sair</Link>  
        </div>

        <h3 className="user-login">Olá, {userName}!</h3>

      </header>
    )
  }
  
export default Header;