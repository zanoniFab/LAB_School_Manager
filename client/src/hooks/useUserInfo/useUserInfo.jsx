import { useState } from 'react';
import { apiService } from '../../service/api';

export const useUserInfo = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [data,setData] = useState();
    const [error,setError] = useState(null);
    
    const loginRequest = async (path, loginData) => {

        setSubmitting(true);
        
        const response = await apiService.post(path, loginData);
        setError(response.error);
        setData(response.data);
        setSubmitting(false);

        if(response.error) {
            alert(response.error);
        }
        return response.data;
        
    }

    return {
        user: data,
        error,
        isSubmitting,
        loginRequest
    }
}