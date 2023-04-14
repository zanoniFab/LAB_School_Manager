import { useEffect, useState } from "react";
import { apiService } from "../../service/api";


const useAlunosList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const getListaAlunos = async (filter) => {
    setIsLoading(true);
    const paramFilter = filter ? `?name_like=${filter}` : "";
    const response = await apiService.get(`/students${paramFilter}`);
    setError(response.error);
    setData(response.data);
    setIsLoading(false);

    return response.data;
  };

  useEffect(() => {
    getListaAlunos();
  }, []);

  return {
    alunos: data,
    isLoading,
    error,
    getListaAlunos,
  };
};

export default useAlunosList;
