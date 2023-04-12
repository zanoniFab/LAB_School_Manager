import { useState, createContext, useContext } from "react";
import { useUserInfo } from "../useUserInfo/useUserInfo";
import { useNavigate } from "react-router-dom";

const AuthenticationContext = createContext({});

export function useAuthenticationContext () {
    return useContext(AuthenticationContext);
}

export const AuthenticationProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const {loginRequest} = useUserInfo();
    const navigate = useNavigate();

    const login = async ({email,password}) => {
        const data = await loginRequest('/login',{email,password});
        if (data) {
            setUser({id:data.user.id,name:data.user.nome});
            localStorage.setItem('token',data.accessToken);
            navigate('/home');
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate('/login');
    }

    return (
    <AuthenticationContext.Provider value={{login, logout, user}}>
        {children}
    </AuthenticationContext.Provider>
    )
}