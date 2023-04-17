import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        nome: Yup.string().required('Nome obrigatório'),
        telefone: Yup.string().required('Campo obrigatório'),
        dataNascimento: Yup.string().required('Campo obrigatório'),
        cpf: Yup.string().required('Campo obrigatório'),
        nota: Yup.number().required('Campo obrigatório'),    
    });

export const defaultValues = {
    nome: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    nota: ''
}
