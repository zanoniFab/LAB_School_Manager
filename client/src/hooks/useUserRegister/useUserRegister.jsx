import { useState } from 'react';
import { apiService } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '../useUserInfo/useUserInfo';
export const useUserRegister = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const {loginRequest} = useUserInfo();

    const registerUser = async (data)=> {
        setSubmitting(true);
        const payload = {...data};
        delete payload.passwordConfirm;
        const response = await apiService.post("/register",payload);
        if (response.data) {
            navigate("/login");
            return;
        }
        setSubmitting(false);
        alert(response.error);
    }

    const registerAluno = async (data) => {
        setSubmitting(true);
        const token = localStorage.getItem("token");

        const response = await apiService.post('/students', data);
        console.log("response",response);
        if (response.data) {
            alert("Aluno cadastrado com sucesso!");
            return;
        }
        setSubmitting(false);
        alert(response.error);

    }

    return {
        isSubmitting,
        registerUser,
        registerAluno
    }
}
