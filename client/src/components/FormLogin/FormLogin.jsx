import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './LoginSchema';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom'

function FormLogin ({onSubmit,isSubmitting,initialValues=defaultValues}) {
    const {register,
            handleSubmit,
            formState:{errors},
            reset} = useForm({resolver: yupResolver(validationSchema),defaultValues:initialValues});

    return (
            <div className='box-login'>
                <h2 className='title'>Bem-vindo ao LAB School Manager!</h2>
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
                <Link to="/registerPage" className="signinButton">Criar conta</Link>
        </div>

    )
}

export default FormLogin;