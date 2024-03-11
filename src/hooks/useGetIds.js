import { useEffect, useState } from "react";
import { useGetPassword } from "./useGetPassword";

export function useGetIds(setIds, setLoadingStatus) {
  const authString = useGetPassword();

  useEffect(() => {
    getIds()
  }, [])

  function getIds() {
    setLoadingStatus('pending');
    fetch('http://api.valantis.store:40000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': authString
    },
    body: JSON.stringify(
      {
        action: 'get_ids',
      }
    ),
  })
    .then(response => response.json())
    .then(result => {
      const resultSet = new Set(result.result); //избавляемся от дублей
      setIds([...resultSet]);
    })
    .catch((error) => {
      console.error(error);
      setLoadingStatus('err');
    });
  }
}