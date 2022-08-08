import { createContext } from "react";
import { useState, useContext } from "react";
const TransactionContext = createContext();

const Provider = ({ children }) => {
  const [transactions, SetTransactions] = useState([]);

  const data = {
    transactions,
    SetTransactions,
  };

  return (
    <TransactionContext.Provider value={data}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);

export default Provider;
