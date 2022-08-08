import Transaction from "./Transaction";
import { useEffect } from "react";
import axios from "axios";
import { useTransaction } from "../context/TransactionContext";
function TransactionHistory() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/transaction`)
      .then((response) => {
        if (response.data.success) {
          SetTransactions(response.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const { transactions, SetTransactions } = useTransaction();
  return (
    <div className="mt-3 text-center">
      <div className="text-white fs-4 border-bottom">History</div>
      <ul style={{ padding: "0px" }}>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction._id} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
