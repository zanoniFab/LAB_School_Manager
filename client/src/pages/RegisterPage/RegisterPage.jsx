import {useUserRegister } from '../../hooks/useUserRegister';
import FormRegister from '../../components/FormRegister';
import './RegisterPage.css'
function RegisterPage () {
    const {isSubmitting, registerUser} = useUserRegister();

    return (
        <div className='box-form'>
            <h3>Cadastro de Usuário</h3>
            <FormRegister isSubmitting={isSubmitting} onSubmit={registerUser}/>
        </div>
    )
            
    }

export default RegisterPage;