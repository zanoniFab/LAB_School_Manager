import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        nome: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória').min(8,'A senha deve conter no mínimo 8 caracteres'),
        passwordConfirm: Yup.string()
            .required('Campo obrigatório')
            .oneOf([Yup.ref('password')], 'As senhas não conferem'),
    });

export const defaultValues = {
    nome: 'zanonao',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    email: 'zanonao@gmail.com',
    password: '12345678',
    passwordConfirm: '12345678'
}

