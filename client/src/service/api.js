import axios from 'axios';

// - Ajustar forma de setar o token, pois não são carregados os itens logo após lofar,
//  sendo necessário atualizar a página, pois ocorre um erro 403 na requisição devido a
//  forma que foi implementado o header no axios, pois é criada uma instância dele e no momento 
//  dessa instância não existe ainda o token no localStorage, com isso ficando sem authorization.
// No arquivo da api pode ser removido o Authorization do axios.create e adicionado esse trecho
//  de código abaixo após a criação da instância (axios.create)

 
// api.interceptors.request.use( (config)=> {
// const token = localStorage.getItem('accessToken');
// config.headers.Authorization = token ? `Bearer ${token}` : '';
// return config;
// });

const api = axios.create({
  baseURL: 'http://localhost:8081',
 
});

api.interceptors.request.use( (config)=> {
const token = localStorage.getItem('token');
config.headers.Authorization = token ? `Bearer ${token}` : '';
return config;
});

const handleGet = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

const handlePost = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return { data: response.data, error: null };
  } catch (error) {
    switch (error.response.data) {
      case "Email already exists":
        return { data: null, error: "E-mail já existe!" };
      
      case "Cannot find user":
      return { data: null, error: "Usuário não cadastrado" };
    
      default:
        return { data: null, error: error.message };
    }
  }
};

const handlePut = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

const handleDelete = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const apiService = {
  get: handleGet,
  post: handlePost,
  put: handlePut,
  delete: handleDelete,
};
