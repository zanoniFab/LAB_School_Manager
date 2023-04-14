import { useEffect, useState } from "react";
import { apiService } from "../../service/api";


const useAlunosList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const getListaAlunosByName = async (filter) => {
    setIsLoading(true);
    const paramFilter = filter ? `?nome_like=${filter}` : "";
    const response = await apiService.get(`/students${paramFilter}`);
    setError(response.error);
    setData(response.data);
    setIsLoading(false);
    return response.data;
  };
  console.log("data",data);

  const getListaAlunos = async () => {
    setIsLoading(true);
    const response = await apiService.get(`/students`);
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
    getListaAlunosByName,
    getListaAlunos,
  };
};

export default useAlunosList;
