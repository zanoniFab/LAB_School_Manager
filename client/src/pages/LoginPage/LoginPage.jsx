import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import { apiService } from '../../service/api'
import './LoginPage.css'
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './LoginSchema';
import {useForm} from 'react-hook-form';

function LoginPage ({onSubmit,isSubmitting,initialValues=defaultValues}) {
  const navigate = useNavigate()

  const {register,
          handleSubmit,
          formState:{errors},
          reset} = useForm({resolver: yupResolver(validationSchema),defaultValues});

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
          <Button type='button' onClick={()=>navigate("/")}>Voltar</Button>
        </form>
        <Link to="/registerPage" className="signinButton">
          Criar conta
        </Link>
      </div>
    </div>
  )
}

export default LoginPage;