import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './FormSchema';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

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
                labelText='nome'
                {...register('nome')}
                helperText = {errors?.nome?.message}
            />              
            <InputGroup 
                id='telefone'
                type='number' 
                labelText='telefone' 
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
                {...register('email')}
                helperText={errors?.email?.message}
            />
            <InputGroup
                id='password' 
                type='password'
                {...register('password')}
                helperText={errors?.password?.message}
            />
            <InputGroup
                id='passwordConfirm' 
                type='password'
                {...register('passwordConfirm')}
                helperText={errors?.passwordConfirm?.message}
            />
            <Button type='button' onClick={()=>reset()}>Limpar</Button>
            <Button type='submit'disabled={isSubmitting}>Enviar</Button>
            <Button type='button' onClick={()=>navigate("/")}>Voltar</Button>
        </form>
    )
}

export default FormRegister;