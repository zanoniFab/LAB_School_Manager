import {useUserRegister } from '../../hooks/useUserRegister';
import FormRegister from '../../components/FormRegister';

function RegisterPage () {
    const {isSubmitting,registerUser} = useUserRegister();

    return (
        <FormRegister isSubmitting={isSubmitting} onSubmit={registerUser}/>
    )
}

export default RegisterPage;