import {useUserRegister } from '../../hooks/useUserRegister';
import FormRegister from '../../components/FormRegister';
function RegisterPage () {
    const {isSubmitting,registerUser} = useUserRegister();

    return (
        <>
            <h3>Cadastro de Pedagogo</h3>
            <FormRegister isSubmitting={isSubmitting} onSubmit={registerUser}/>
        </>
    )
            
    }

export default RegisterPage;