import "./Transaction.scss";
function Transaction({ transaction }) {
  return (
    <li
      className="transaction"
      style={
        transaction.type === "expense"
          ? { border: "2px solid red" }
          : { border: "2px solid green" }
      }
    >
      <div className="transaction-text">{transaction.text}</div>
      <div className="">${transaction.amount}</div>
      <div className="">{transaction.type}</div>
      <div>
        <button className="btn btn-warning">Sil</button>
      </div>
    </li>
  );
}

export default Transaction;
