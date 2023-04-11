import { useState } from 'react';
import { apiService } from '../../service/api';
import { useNavigate } from 'react-router-dom';
export const useUserInfo = () => {

    const [isSubmitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        setSubmitting(true);
        const response = await apiService.post('/login',data)
        if (response.data) {
        navigate('/')
        return;
        }
        setSubmitting(false);
        alert("Login ou senha inválidos");
    }

    return {
        isSubmitting,
        onSubmit
    }
}