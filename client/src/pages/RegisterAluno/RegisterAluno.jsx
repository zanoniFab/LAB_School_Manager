import {useUserRegister } from '../../hooks/useUserRegister';
import FormAlunoRegister from '../../components/FormAlunoRegister';
import { useAuthenticationContext } from '../../hooks/useAuthentication';

function RegisterAluno () {
    const {isSubmitting,registerAluno} = useUserRegister();
    const {user} = useAuthenticationContext();

    
    return (
        <>
            <h3>Cadastro de Aluno</h3>
            <FormAlunoRegister isSubmitting={isSubmitting} onSubmit={registerAluno}/>
        </>

    )
}

export default RegisterAluno;