import Transaction from "./Transaction";
function TransactionHistory() {
  const data = { text: "Coffe", amount: 5.0, type: "income" };
  return (
    <div className="mt-3 text-center">
      <div className="text-white fs-4 border-bottom">History</div>
      <ul style={{ padding: "0px" }}>
        <Transaction transaction={data} />
        <Transaction transaction={data} />
        <Transaction transaction={data} />
        <Transaction transaction={data} />
      </ul>
    </div>
  );
}

export default TransactionHistory;
