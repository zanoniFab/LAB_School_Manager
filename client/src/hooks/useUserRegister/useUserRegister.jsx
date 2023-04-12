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
        const token = localStorage.getItem("token");
        setSubmitting(true);

        //const response = await apiService.post("/students",data);
        const response = await apiService.post(loginRequest('/students', {Headers: {Authorization: `Bearer ${token}`}, Body: data}));
        if (response.data) {
            alert("Registrou");
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
