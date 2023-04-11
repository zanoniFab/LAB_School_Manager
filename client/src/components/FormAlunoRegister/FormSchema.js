import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        nome: Yup.string().required('Nome obrigatório'),
        nota: Yup.number().required('Nota obrigatória'),
        
    });

export const defaultValues = {
    nome: 'Fabiane',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    nota: 5,
}

