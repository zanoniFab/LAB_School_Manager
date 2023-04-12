import "./Header.css";
import { Link } from "react-router-dom";
function Header({...props}) {
    const {userName} = props;
    return (
      <header className="navbar">

        <img src="../logo765x625.png"></img>

        <div className="box-buttons">
          <Link to="/inicio">Início(item4)</Link>
          <Link to="/listagemAlunos">Alunos(item5)</Link>
          <Link to="/acompanhamentosPedagógicos">Acompanhamentos Pedagógicos(item7)</Link>
          <Link to="/login">Sair</Link>  
        </div>

        <h3 className="user-login">Olá, {userName}!</h3>

      </header>
    )
  }
  
export default Header;