import { useState } from "react";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import TransactionTable from "./components/TransactionTable";
import RoleToggle from "./components/RoleToggle";
import Insights from "./components/Insights";

function App() {

  const [role, setRole] = useState("viewer");

  return (
    <div>

      <Header />

      <RoleToggle role={role} setRole={setRole} />

      <SummaryCards />

      <Charts />

      <TransactionTable />

      <Insights />

    </div>
  );
}

export default App;