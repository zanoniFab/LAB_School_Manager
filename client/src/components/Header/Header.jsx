import "./Header.css";
function Header({...props}) {
    const {userName} = props;
    return (
      <header className="navbar">
        <div className="logo">
            <img src="../logo765x625.png"></img>
        </div>
        <div className="box-info">
          <h3>Olá, {userName}!</h3>
        </div>
      </header>
    )
  }
  
export default Header;