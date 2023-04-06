import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import { useSetUserInfo } from '../../hooks/useUserInfo'
import { apiService } from '../../service/api'
import './LoginPage.css'
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './LoginSchema';
import {useForm} from 'react-hook-form';

function LoginPage () {
  const navigate = useNavigate()
  const setUserInfo = useSetUserInfo()
  const [isSubmitting, setSubmitting] = useState(false);

  const {register,
          handleSubmit,
          formState:{errors},
          reset} = useForm({resolver: yupResolver(validationSchema),defaultValues});

  const onSubmit = async (data) => {
    setSubmitting(true);
    const response = await apiService.post(
      `/users?email=${email.value}&password=${password.value}`
    )
    if (response.data) {
      navigate('/')
      return;
    }
    setSubmitting(false);
    alert(response.error);
  }

  return (
    <div className='login-container'>
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
        <Link to="/registerPage" className="signinButton">
          Cadastrar
        </Link>
      </div>
    </div>
  )
}

export default LoginPage