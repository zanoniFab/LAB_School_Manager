import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './FormSchema';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function FormAlunoRegister ({onSubmit,isSubmitting,initialValues=defaultValues}) {
    const navigate = useNavigate();
    const {register,
            handleSubmit,
            formState:{errors},
            reset} = useForm({resolver: yupResolver(validationSchema),defaultValues:initialValues});


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup 
                id='nomeAluno' 
                type='text' 
                labelText='Nome'
                {...register('nome')}
                helperText = {errors?.nomeAluno?.message}
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
                id='nota' 
                type='number'
                labelText='Nota'
                {...register('nota')}
                helperText={errors?.nota?.message}
            />
            <div className='box-buttons'>
                <Button type='button' onClick={()=>navigate("/")}>Voltar</Button>
                <Button type='button' onClick={()=>reset()}>Limpar</Button>
                <Button type='submit'disabled={isSubmitting}>Enviar</Button>
            </div>
        </form>
    )
}

export default FormAlunoRegister;