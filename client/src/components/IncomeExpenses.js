import { useEffect, useState } from "react";
import TotalBalance from "./TotalBalance";
import { useTransaction } from "../context/TransactionContext";

function IncomeExpenses() {
  const { transactions } = useTransaction();

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    console.log(transactions);

    setExpense((s) => 0);
    setIncome((s) => 0);
    transactions.forEach((item) => {
      if (item.type === "expense") {
        setExpense((s) => s + item.amount);
      } else {
        setIncome((s) => s + item.amount);
      }
    });
  }, [transactions]);

  return (
    <>
      <TotalBalance balance={income - expense} />
      <div className="container text-center">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3 bg-white border rounded m-1 p-2 ps-2 pe-2">
            <span className="fs-5">INCOME</span>
            <div className="fs-4 text-success">${income}</div>
          </div>
          <div className="col-3 bg-white border rounded m-1 p-2 ps-2 pe-2">
            <span className="fs-5">EXPENSE</span>
            <div className="fs-4 text-danger">${expense}</div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
