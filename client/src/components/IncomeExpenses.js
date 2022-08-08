import { useEffect, useState } from "react";
import TotalBalance from "./TotalBalance";
import { useTransaction } from "../context/TransactionContext";

function IncomeExpenses() {
  const [total, SetTotal] = useState(0);
  const [income, SetIncome] = useState(0);
  const [expense, SetExpense] = useState(0);
  const { transactions } = useTransaction();

  useEffect(() => {
    console.log("çalışıyorum");
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type === "expense") {
        console.log(expense, transactions[i].amount);
        let temp = expense + transactions[i].amount;
        console.log(temp);
        SetExpense(temp);
      } else {
        SetIncome(income + transactions[i].amount);
      }
    }
    SetTotal(income - expense);
  }, [transactions]);
  return (
    <>
      <TotalBalance balance={total} />
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
