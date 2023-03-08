import { createContext, useContext, useState } from "react";

const DataFoodContext = createContext();

export const DataFoodProvider = ({ children }) => {
  const [nameFood, setNameFood] = useState(null);
  const [information, setInformation] = useState([]);
  return (
    <DataFoodContext.Provider
      value={{
        nameFood,
        setNameFood,
        information,
        setInformation,
      }}
    >
      {children}
    </DataFoodContext.Provider>
  );
};

export const useData = () => useContext(DataFoodContext);
