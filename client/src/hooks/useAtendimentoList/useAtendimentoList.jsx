import { useState, useEffect } from "react";
import { apiService } from "../../service/api";

const useAtendimentoList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const getListaAtendimento = async (id) => {
    setIsLoading(true);
    const response = await apiService.get(`/accompaniments?userId=${id}`);
    setError(response.error);
    setData(response.data);
    setIsLoading(false);
  };


  const getListaAtendimentoByTitulo = async (titulo) => {
    setIsLoading(true);
    const paramFilter = titulo ? `?title_like=${titulo}` : "";
    const response = await apiService.get(`/accompaniments${paramFilter}`);
    setError(response.error);
    setData(response.data);
    setIsLoading(false);

    return response.data;
  };

  return {
    atendimentos: data,
    isLoading,
    error,
    getListaAtendimento,
    getListaAtendimentoByTitulo
  };
};

export default useAtendimentoList;
