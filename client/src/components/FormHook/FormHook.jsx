import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './FormSchema';
import { useState } from 'react';
import { apiService } from '../../service/api';
import { useNavigate } from 'react-router-dom';
function FormHook () {
    const [isSubmitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const {register,
            handleSubmit,
            formState:{errors},
            reset} = useForm({resolver: yupResolver(validationSchema),defaultValues});

    const onSubmit = async (data)=> {
        setSubmitting(true);
        const payload = {...data};
        delete payload.passwordConfirm;
        const response = await apiService.post("/register",payload);
        if (response.data) {
            navigate("/login");
            return;
        }
        setSubmitting(false);
        alert(response.error);
    }

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
                labelText='dataNascimento'
                {...register('dataNascimento')}
                helperText = {errors?.dataNascimento?.message}
            />
            <InputGroup 
                id='cpf' 
                type='number'
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
            <button type='button' onClick={()=>reset()}>Limpar</button>
            <button type='submit'disabled={isSubmitting}>Enviar</button>
        </form>
    )
}

export default FormHook;