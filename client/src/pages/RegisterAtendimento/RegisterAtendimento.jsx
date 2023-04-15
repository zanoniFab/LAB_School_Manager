import {useAtendimentoRegister } from '../../hooks/useAtendimentoRegister';
import FormCadastroAtendimento from '../../components/FormCadastroAtendimento';
import { useAuthenticationContext } from '../../hooks/useAuthentication';
import Header from '../../components/Header/Header';

function RegisterAtendimento () {
    const {isSubmitting,atendimentoRegister} = useAtendimentoRegister();
    const {user} = useAuthenticationContext();

    
    
    return (
        <>
            <Header userName = {user?.name} />
            <div className='box-form'>
                <h3>Cadastro de Atendimento Pedagógico</h3>
                <FormCadastroAtendimento isSubmitting={isSubmitting} onSubmit={atendimentoRegister}/>
            </div>
        </>

    )
}

export default RegisterAtendimento;