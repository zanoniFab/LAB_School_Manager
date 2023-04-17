import * as Yup from 'yup';

export const validationSchema = Yup.object(
    {
        nomeAluno: Yup.string(),
        nomePedagogo: Yup.string(),
        dataAcompanhamento: Yup.string().required('Campo obrigatório'),
        titulo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string().required('Campo obrigatório'),  
        finalizado: Yup.bool(),    
    });

export const defaultValues = {
    nomeAluno: "",
    nomePedagogo: "",
    dataAcompanhamento: "",
    titulo: "",
    descricao: "",  
    finalizado: "",    
}
