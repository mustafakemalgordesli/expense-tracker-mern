import "./App.css";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionHistory from "./components/TransactionHistory";
import TransactionProvider from "./context/TransactionContext";

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
              <IncomeExpenses />
              <TransactionHistory />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <AddTransaction />
            </div>
          </div>
        </div>
      </TransactionProvider>
    </div>
  );
}

export default App;
