import {useUserRegister } from '../../hooks/useUserRegister';
import FormAlunoRegister from '../../components/FormAlunoRegister';

function RegisterAluno () {
    const {isSubmitting,registerAluno} = useUserRegister();
    
    return (
        <>
            <h3>Cadastro de Aluno</h3>
            <FormAlunoRegister isSubmitting={isSubmitting} onSubmit={registerAluno}/>
            <select name='selectProfile' onChange={(event)=>{handleChangeOptionRegister(event.target.value);}}>
            <option value="aluno">Aluno</option>
            <option value="pedagogo">Pedagogo</option>
            </select>
        </>

    )
}

export default RegisterAluno;