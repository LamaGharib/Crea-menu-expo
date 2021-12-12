import React, { createContext, useState, useEffect } from "react";
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState({});
  const [extra, setExtra] = useState({});
  const data = async () => {
    try {
      setIsLoading(true);
      const result = await fetch("https://crea-menu.herokuapp.com/api/menu");
      const jsonData = await result.json();
      setMenu(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        menu,
        cart,
        setCart,
        isLoading,
        error,
        total,
        setTotal,
        setShowModal,
        showModal,
        modal,
        setModal,
        extra,
        setExtra,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
