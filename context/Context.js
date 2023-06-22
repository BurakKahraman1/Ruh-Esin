import { createContext, useState } from "react";

export const HomeContextProvider=createContext()

export const ContextProvider = ({ children }) => {

    const [page,setPage]=useState(1)
    const [data,setData]=useState([])

    const value = { 
      data,setData,
      page,setPage
    };
  
    return (
      <HomeContextProvider.Provider value={value}>{children}</HomeContextProvider.Provider>
    );
  };
  
  export default HomeContextProvider;