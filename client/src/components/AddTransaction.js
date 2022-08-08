import { useState } from "react";
import ModalLayout from "./ModalLayout";
import axios from "axios";
import { useTransaction } from "../context/TransactionContext";

function AddTransaction() {
  const [text, SetText] = useState("");
  const [amount, SetAmount] = useState("");
  const [type, SetType] = useState("Select transaction type...");
  const [succesShow, SetSuccessShow] = useState(false);
  const [failedShow, SetFailedShow] = useState(false);

  const { transactions, SetTransactions } = useTransaction();

  const handleSuccessClose = () => SetSuccessShow(false);
  const handleSuccessShow = () => SetSuccessShow(true);

  const handleFailedClose = () => SetFailedShow(false);
  const handleFailedShow = () => SetFailedShow(true);

  const handleSubmit = (e) => {
    console.log(e.target);
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/transaction`, {
        text,
        amount,
        type,
      })
      .then((response) => {
        if (response?.data?.success) {
          SetTransactions([response?.data?.data, ...transactions]);
          SetText("");
          SetAmount("");
          handleSuccessShow();
        } else {
          handleFailedShow();
        }
      })
      .catch((error) => {
        console.log(error);
        handleFailedShow();
      });
    e.preventDefault();
  };
  return (
    <div className="text-white">
      <form onSubmit={handleSubmit}>
        <div className="fs-4">Add New Transaction</div>
        <div className="mb-3">
          <label htmlFor="textInput" className="fs-5 form-label">
            Text
          </label>
          <input
            required
            value={text}
            type="text"
            className="form-control"
            id="textInput"
            placeholder="Enter text..."
            onChange={(e) => SetText(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amountInput" className="fs-5 form-label">
            Amount
          </label>
          <input
            required
            value={amount}
            type="number"
            className="form-control"
            id="amountInput"
            placeholder="Enter amount..."
            onChange={(e) => SetAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="typeSelected" className="fs-5 form-label">
            Type
          </label>
          <select
            className="form-select"
            id="typeSelected"
            onChange={(e) => SetType(e.target.value)}
            required
          >
            <option defaultValue value="" hidden>
              {type}
            </option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <ModalLayout
        show={succesShow}
        handleClose={handleSuccessClose}
        header="Transaction Added"
        body="Transaction successfully added"
      />

      <ModalLayout
        show={failedShow}
        handleClose={handleFailedClose}
        header="Failed to add transaction"
        body="The transaction could not be successfully added"
      />
    </div>
  );
}

export default AddTransaction;
