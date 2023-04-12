import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './FormSchema';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import './FormRegister.css';
function FormRegister ({onSubmit,isSubmitting,initialValues=defaultValues}) {
    const navigate = useNavigate();
    const {register,
            handleSubmit,
            formState:{errors},
            reset} = useForm({resolver: yupResolver(validationSchema),defaultValues:initialValues});

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup 
                    id='nome' 
                    type='text' 
                    labelText='Nome'
                    {...register('nome')}
                    helperText = {errors?.nome?.message}
                />              
                <InputGroup 
                    id='telefone'
                    type='number' 
                    labelText='Telefone' 
                    {...register('telefone')}
                />
                <InputGroup 
                    id='dataNascimento'
                    type='date'
                    labelText='Data de Nascimento'
                    {...register('dataNascimento')}
                    helperText = {errors?.dataNascimento?.message}
                />
                <InputGroup 
                    id='cpf' 
                    type='number'
                    labelText='CPF'
                    {...register('cpf')}
                    helperText = {errors?.cpf?.message}
                />
                <InputGroup
                    id='email' 
                    type='text'
                    labelText='E-mail'
                    {...register('email')}
                    helperText={errors?.email?.message}
                />
                <InputGroup
                    id='password' 
                    type='password'
                    labelText='Senha'
                    {...register('password')}
                    helperText={errors?.password?.message}
                />
                <InputGroup
                    id='passwordConfirm' 
                    type='password'
                    labelText='Repita sua senha'
                    {...register('passwordConfirm')}
                    helperText={errors?.passwordConfirm?.message}
                />
                <div className='buttons'>
                    <Button type='button' onClick={()=>navigate("/login")}>Voltar</Button>
                    <Button type='button' onClick={()=>reset()}>Limpar</Button>
                    <Button type='submit'disabled={isSubmitting}>Enviar</Button>
                </div>
            </form>
    )
}

export default FormRegister;