import { useState } from "react";

export default function TransactionTable() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const transactions = [
    { id: 1, date: "2026-04-01", category: "Food", amount: 500, type: "Expense" },
    { id: 2, date: "2026-04-02", category: "Salary", amount: 25000, type: "Income" },
    { id: 3, date: "2026-04-03", category: "Shopping", amount: 2000, type: "Expense" },
    { id: 4, date: "2026-04-04", category: "Freelance", amount: 8000, type: "Income" },
    { id: 5, date: "2026-04-05", category: "Transport", amount: 400, type: "Expense" }
  ];

  const filteredTransactions = transactions.filter((t) => {
    const matchSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "all" || t.type.toLowerCase() === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div style={{padding:"30px"}}>

      <h2>Transactions</h2>

      <div style={{marginBottom:"20px"}}>

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{padding:"8px", marginRight:"10px"}}
        />

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
          style={{padding:"8px"}}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

      </div>

      <table
        style={{
          width:"100%",
          borderCollapse:"collapse",
          textAlign:"center"
        }}
      >

        <thead style={{background:"#f0f0f0"}}>

          <tr>
            <th style={{padding:"10px"}}>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>

        </thead>

        <tbody>

        {filteredTransactions.map((t)=>(
          <tr key={t.id} style={{borderBottom:"1px solid #ddd"}}>

            <td style={{padding:"10px"}}>{t.date}</td>
            <td>{t.category}</td>
            <td>₹{t.amount}</td>
            <td>{t.type}</td>

          </tr>
        ))}

        </tbody>

      </table>

    </div>
  );
}