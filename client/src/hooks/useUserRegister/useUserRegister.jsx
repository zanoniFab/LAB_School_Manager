import { useState } from 'react';
import { apiService } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export const useUserRegister = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

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
        const response = await apiService.post("/register",data);
        if (response.data) {
            // navigate("/login");
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