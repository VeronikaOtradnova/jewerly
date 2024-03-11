import { useEffect, useState } from "react";
import { useGetPassword } from "./useGetPassword";

export function useGetFields(type) {
  const [fields, setFields] = useState([]);
  const authString = useGetPassword();

  useEffect(() => {
    getFields();
  }, [])

  function getFields() {
    fetch('http://api.valantis.store:40000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': authString
    },
    body: JSON.stringify(
      {
        action: 'get_fields',
        params: {
          field: type
        }
      }
    ),
  })
    .then(response => response.json())
    .then(result => {
      const resultSet = new Set(result.result); //избавляемся от дублей
      setFields([...resultSet]);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return fields;
}