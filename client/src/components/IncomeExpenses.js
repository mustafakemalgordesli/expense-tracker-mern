function IncomeExpenses() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 bg-white border rounded m-1 p-2 ps-2 pe-2">
          <span className="fs-5">INCOME</span>
          <div className="fs-4 text-success">$0.00</div>
        </div>
        <div className="col-3 bg-white border rounded m-1 p-2 ps-2 pe-2">
          <span className="fs-5">EXPENSE</span>
          <div className="fs-4 text-danger">$0.00</div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default IncomeExpenses;
