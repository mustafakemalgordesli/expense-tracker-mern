function TotalBalance({ balance }) {
  return (
    <div className="total-balance text-white text-center">
      <div className="fs-4">YOUR BALANCE</div>
      <div className="fs-2">${balance}</div>
    </div>
  );
}

export default TotalBalance;
