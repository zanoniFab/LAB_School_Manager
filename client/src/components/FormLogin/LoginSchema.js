import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória').min(8,'A senha deve conter no mínimo 8 caracteres')
    });

export const defaultValues = {
    email: 'zanonao@gmail.com',
    password: '12345678',
}

