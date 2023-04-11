import { useAuthenticationContext } from '../../hooks/useAuthentication/useAuthentication';
import FormLogin from '../../components/FormLogin/FormLogin';

function LoginPage () {
  const {isSubmitting,login} = useAuthenticationContext();

  return (
    <>
        <h3>Página de Login</h3>
        <FormLogin isSubmitting={isSubmitting} onSubmit={login}/>
    </>
)

}

export default LoginPage;