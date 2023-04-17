import {useAtendimentoRegister } from '../../hooks/useAtendimentoRegister';
import FormCadastroAtendimento from '../../components/FormCadastroAtendimento';
import { useAuthenticationContext } from '../../hooks/useAuthentication';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import './RegisterAtendimento.css';
function RegisterAtendimento () {
    const {isSubmitting,atendimentoRegister} = useAtendimentoRegister();
    const {user} = useAuthenticationContext();
    
    return (
        <>
            {!user && <Link to="/login">Faça o Login</Link>}
            {user && (
            <>
                <Header userName = {user?.name} />
                <div className='box-form-cadastro'>
                    <h3>Cadastro de Atendimento Pedagógico</h3>
                    <FormCadastroAtendimento isSubmitting={isSubmitting} onSubmit={atendimentoRegister}/>
                </div>
            </>
            )}
        </>
    )
}

export default RegisterAtendimento;