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
    nomeAluno: "Derick",
    nomePedagogo: "Zanonao",
    dataAcompanhamento: "07/06/1992",
    titulo: "Titulo de teste",
    descricao: "Descrição teste",  
    finalizado: false,    
}
