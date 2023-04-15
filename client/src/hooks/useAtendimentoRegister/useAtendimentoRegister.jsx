import { useState } from 'react';
import { apiService } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useUserInfo }  from '../useUserInfo/useUserInfo';
import useAlunosList from '../useAlunosList';
;
export const useAtendimentoRegister = () => {
    const {alunos, getListaAlunos} = useAlunosList();
    const {listaPedagogos, getListaPedagogos} = useUserInfo();

    const [isSubmitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const atendimentoRegister = async (data) => {
        console.log("data",data);
        alert("aqui")
        setSubmitting(true);
        const response = await apiService.post('/accompaniments', data);
        if (response.data) {
            alert("Atendimento cadastrado com sucesso!");
            navigate("/acompanhamentosPedagogicos");
            return;
        }
        setSubmitting(false);
        alert(response.error);

    }

    const getListas = async () => {
        await getListaAlunos();
        await getListaPedagogos();
    }


    return {
        listaAlunos: alunos,
        listaPedagogos,
        isSubmitting,
        atendimentoRegister,
        getListas
    }
}
