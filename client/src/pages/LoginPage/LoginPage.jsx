import { useAuthenticationContext } from '../../hooks/useAuthentication/useAuthentication';
import FormLogin from '../../components/FormLogin/FormLogin';
import './LoginPage.css';

function LoginPage () {
  
  const {isSubmitting, login} = useAuthenticationContext();

  return (
    <div className='box-login'>
        <h3 className='title'>Bem-vindo ao</h3>
        <h2>LAB School Manager!</h2>
        <FormLogin isSubmitting={isSubmitting} onSubmit={login}/>
    </div>
)

}

export default LoginPage;