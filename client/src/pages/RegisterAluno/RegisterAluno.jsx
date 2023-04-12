import {useUserRegister } from '../../hooks/useUserRegister';
import FormAlunoRegister from '../../components/FormAlunoRegister';
import { useAuthenticationContext } from '../../hooks/useAuthentication';
import Header from '../../components/Header/Header';
import './RegisterAluno.css'
function RegisterAluno () {
    const {isSubmitting,registerAluno} = useUserRegister();
    const {user} = useAuthenticationContext();

    
    return (
        <>
            <Header userName = {user?.name} />
            <div className='box-form'>
                <h3>Cadastro de Aluno</h3>
                <FormAlunoRegister isSubmitting={isSubmitting} onSubmit={registerAluno}/>
            </div>
        </>

    )
}

export default RegisterAluno;