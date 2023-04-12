import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        nome: Yup.string().required('Nome obrigatório'),
        cpf: Yup.string().required('Campo obrigatório'),
        nota: Yup.number().required('Campo obrigatório'),
        
    });

export const defaultValues = {
    nome: 'Fabiane',
    telefone: '',
    dataNascimento: '',
    cpf: '8470606634',
    nota: 5,
}

