import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        idAluno: Yup.number(),
        idPedagogo: Yup.number(),
        dataAcompanhamento: Yup.string().required('Campo obrigatório'),
        titulo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string().required('Campo obrigatório'),  
        finalizado: Yup.bool(),    
    });
