import "../assets/Transaction.scss";
import { useTransaction } from "../context/TransactionContext";
import axios from "axios";
function Transaction({ transaction }) {
  const { transactions, SetTransactions } = useTransaction();
  function handleRemove(id) {
    axios
      .delete(`${process.env.REACT_APP_BASE_API_URL}/transaction/${id}`)
      .then((response) => {
        if (response.data.success) {
          SetTransactions(transactions.filter((x) => x._id !== id));
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <li
      key={transaction._id}
      className="transaction"
      style={
        transaction.type === "expense"
          ? { border: "2px solid red" }
          : { border: "2px solid green" }
      }
    >
      <div className="col-4 transaction-text text-break">
        {transaction.text.substring(0, 15)}
        {transaction.text.length > 15 ? "..." : null}
      </div>
      <div className="col-3">${transaction.amount}</div>
      <div className="col-3">{transaction.type}</div>
      <div className="col-2">
        <button
          className="btn btn-warning"
          onClick={() => handleRemove(transaction._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Transaction;
