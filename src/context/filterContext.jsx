import { createContext } from "react";
import { useContext } from "react";

export const filterContext = createContext({
  filter: 'none',
  setFilter: () => {}
})

export const FilterProvider = filterContext.Provider;