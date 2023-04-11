import {useUserRegister } from '../../hooks/useUserRegister';
import FormAlunoRegister from '../../components/FormAlunoRegister';
import { useAuthenticationContext } from '../../hooks/useAuthentication/useAuthentication';

function RegisterAluno () {
    const {isSubmitting,registerAluno} = useUserRegister();
    const {user} = useAuthenticationContext();
    
    return (
        <>
            <h1>{user.name}</h1>
            <h3>Cadastro de Aluno</h3>
            <FormAlunoRegister isSubmitting={isSubmitting} onSubmit={registerAluno}/>
        </>

    )
}

export default RegisterAluno;