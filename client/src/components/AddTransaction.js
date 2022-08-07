function AddTransaction() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="p-5 text-white">
      <form onSubmit={onSubmit}>
        <div className="fs-4">Add New Transaction</div>
        <div className="mb-3">
          <label htmlFor="textInput" className="fs-5 form-label">
            Text
          </label>
          <input
            type="text"
            className="form-control"
            id="textInput"
            placeholder="Enter text..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amountInput" className="fs-5 form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amountInput"
            placeholder="Enter amount..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="typeSelected" className="fs-5 form-label">
            Type
          </label>
          <select className="form-select" id="typeSelected">
            <option defaultValue hidden>
              Select transaction type...
            </option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
