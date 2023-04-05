import {useForm} from 'react-hook-form';
function FormHook () {

    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    const onSubmit = (data)=> {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='nome'>Nome</label>
                <input 
                    id='nome'
                    type='text'
                    {...register('nome',{required: 'Nome obrigatório'})}
                />
                {errors.nome&&<span>{errors.nome.message}</span>}
            </div>
            <div> 
                <label htmlFor='telefone'>telefone</label>
                <input 
                    id='telefone' 
                    type='number'
                    {...register('telefone')}
                />
            </div>
            <div>
                <label htmlFor='dataNascimento'>Data de Nascimento</label>
                <input 
                    id='dataNascimento' 
                    type='date'
                    {...register('dataNascimento',{required: 'Campo obrigatório'})}
                />
                {errors.dataNascimento&&<span>{errors.dataNascimento.message}</span>}
            </div>
            <div>
                <label htmlFor='cpf'>Cpf</label>
                <input 
                    id='cpf' 
                    type='number'
                    {...register('cpf',{required: 'Campo obrigatório'})}
                />
                {errors.cpf&&<span>{errors.cpf.message}</span>}
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input 
                    id='email' 
                    type='email'
                    {...register('email',{required: 'Campo obrigatório'})}
                />
                {errors.email&&<span>{errors.email.message}</span>}
            </div>
            <div>
                <label htmlFor='senha'>Senha</label>
                <input 
                    id='senha' 
                    type='password'
                    {...register('senha',{
                        required: 'Campo obrigatório',
                        minLength: {value:8,message:'A senha deve conter no mínimo 8 caracteres'},
                    })}
                />
                {errors.senha&&<span>{errors.senha.message}</span>}
            </div>
            <div>
                <label htmlFor='senhaRepeat'>Confirme sua senha</label>
                <input 
                    id='senhaRepeat' 
                    type='password'
                    {...register('senhaRepeat',{
                        required: 'Campo obrigatório',
                        minLength: {value:8,message:'A senha deve conter no mínimo 8 caracteres'},
                    })}
                />
                {errors.senhaRepeat&&<span>{errors.senhaRepeat.message}</span>}
            </div>
            <button type='button' onClick={()=>reset()}>Limpar</button>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default FormHook;
// -nome
// -telefone
// -data de nascimento
// -cpf
// -email
// -senha
// -confirmação de senha
// validação com yup
// salvar no json server
// ir para /login