import { useEffect, useMemo, useState } from "react";
import { useGetPassword } from "./useGetPassword";

export function useGetItems(ids, setItems, page, limit, setLoadingStatus) {
  const authString = useGetPassword();

  useMemo(() => {
    if (!ids) return;
    if (ids.length < 1) {
      setItems([]);
      return;
    }

    //теперь создаю массив, в котором находятся только новые id
    page * limit - 1 < ids.length - 1 ?
      getItems(ids.slice((page - 1) * limit, page * limit)) :
      getItems(ids.slice((page - 1) * limit));

  }, [page, ids])

  function getItems(requestIds) {
    setLoadingStatus('pending');
    fetch('https://api.valantis.store:41000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': authString
      },
      body: JSON.stringify(
        {
          action: 'get_items',
          params: { ids: requestIds }
        }
      ),
    })
      .then(response => response.json())
      .then(result => {
        setItems(result.result);
        setLoadingStatus('ok');
      })
      .catch((error) => {
        console.error(error);
        setLoadingStatus('err');
      });
  }
}