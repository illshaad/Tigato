import { createContext, useContext, useState } from "react";

const DataFoodContext = createContext();

export const DataFoodProvider = ({ children }) => {
  const [nameFood, setNameFood] = useState(null);
  const [information, setInformation] = useState([]);
  const [total, setTotal] = useState(0);

  const additionnerTableau = () => {
    const calcule = information.map((e) => e.products.price * e.quantity);
    let somme = 0;
    for (let i = 0; i < calcule.length; i++) {
      somme += calcule[i];
    }
    return somme;
  };

  const commandeForReservation = additionnerTableau();

  return (
    <DataFoodContext.Provider
      value={{
        nameFood,
        setNameFood,
        information,
        setInformation,
        total,
        setTotal,
        commandeForReservation,
      }}
    >
      {children}
    </DataFoodContext.Provider>
  );
};

export const useData = () => useContext(DataFoodContext);
