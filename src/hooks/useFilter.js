import { useEffect } from "react";
import { useGetPassword } from "./useGetPassword";

export function useFilter(filter, setIds, setPage, setLoadingStatus) {
  const authString = useGetPassword();

  useEffect(() => {
    if (filter === 'none') return;
    getFilteredIds(filter)
  }, [filter])

  function getFilteredIds(f) {
    setLoadingStatus('pending')
    fetch('https://api.valantis.store:41000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': authString
      },
      body: JSON.stringify(
        {
          action: 'filter',
          params: f
        }
      ),
    })
      .then(response => response.json())
      .then(result => {
        const resultSet = new Set(result.result); //избавляемся от дублей
        setIds([...resultSet]);
        setPage(1);
        setLoadingStatus('ok');
      })
      .catch((error) => {
        console.error(error);
        setLoadingStatus('err');
      });
  }
}