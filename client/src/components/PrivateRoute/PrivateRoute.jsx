import PropTypes from "prop-types";
import './PrivateRoute.css';
import Header from "../../components/Header/Header";
import { useAuthenticationContext } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";
function PrivateRoute({ children }) {

  const {user} = useAuthenticationContext();

  return (
    <>
      {!user && <Link to="/login">Faça o Login</Link>}
      {user && (
        <>
          <main className="pageWrapperContainer">
            <Header userName = {user?.name} />
            {children}
          </main>
        </>
        )
      }
    </>
  )

}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;