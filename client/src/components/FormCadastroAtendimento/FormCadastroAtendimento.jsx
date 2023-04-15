import {useForm} from 'react-hook-form';
import InputGroup from '../InputGroup';
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema, defaultValues} from './FormSchema';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import SelectGroup from '../SelectGroup';
import { useAtendimentoRegister } from '../../hooks/useAtendimentoRegister';
import { useEffect } from 'react';

function FormCadastroAtendimento ({onSubmit,isSubmitting,initialValues=defaultValues}) {
    const navigate = useNavigate();
    const {listaPedagogos, listaAlunos, getListas} = useAtendimentoRegister();
    const {register,
            handleSubmit,
            formState:{errors},
            reset} = useForm({resolver: yupResolver(validationSchema),defaultValues:initialValues});

    useEffect( () => {
        (async () => {
            await getListas();
        })()
    },[]);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <SelectGroup 
                name="alunos" 
                lista = {listaAlunos}
                {...register('nomeAluno')}
            />
            <SelectGroup 
                name="pedagogos" 
                lista = {listaPedagogos}
                {...register('nomePedagogo')}
            />
            <InputGroup 
                id='dataAcompanhamento'
                type='date'
                labelText='Data de Acompanhamento'
                {...register('dataAcompanhamento')}
                helperText = {errors?.dataAcompanhamento?.message}
            />
            <InputGroup 
                id='titulo' 
                type='text' 
                labelText='Título'
                {...register('titulo')}
                helperText = {errors?.titulo?.message}
            />              
            <InputGroup 
                id='descricao'
                type='text' 
                labelText='Descrição' 
                {...register('descricao')}
            />
            <div className='box-finalizado'>
                <InputGroup 
                    id='finalizado' 
                    type='checkbox' 
                    labelText='Atendimento finalizado?'
                    {...register('finalizado')}
                />
            </div>
            

            
            <div className='box-buttons'>
                <Button type='button' onClick={()=>navigate("/acompanhamentosPedagogicos")}>Voltar</Button>
                <Button type='button' onClick={()=>reset()}>Limpar</Button>
                <Button type='submit'disabled={isSubmitting}>Enviar</Button>
            </div>
        </form>
    )
}

export default FormCadastroAtendimento;