import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './LoginSchema';
import Button from '../Button';
import { Link } from 'react-router-dom'
import './FormLogin.css';

function FormLogin ({onSubmit,isSubmitting,initialValues=defaultValues}) {
    const {register,
            handleSubmit,
            formState:{errors},
            } = useForm({resolver: yupResolver(validationSchema),defaultValues:initialValues});

    return (
        <>
            <form className='box-login-form' onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                    id='email'
                    type="text"
                    labelText="E-mail"
                    placeholder="Seu e-mail"
                    {...register('email')}
                    helperText = {errors?.email?.message}
                />
                <InputGroup
                    id='password'
                    type="password"
                    placeholder="Senha"
                    labelText="Senha"
                    {...register('password')}
                    helperText={errors?.password?.message}
                />
                <Button type='submit' disabled={isSubmitting}>Entrar</Button>
            </form>
            <div className="register-button">
                <Link to="/registerPage">Criar conta</Link>
            </div>
        </>

    )
}

export default FormLogin;