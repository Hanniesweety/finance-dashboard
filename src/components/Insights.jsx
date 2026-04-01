export default function Insights() {

  const transactions = [
    { category: "Food", amount: 500 },
    { category: "Shopping", amount: 2000 },
    { category: "Transport", amount: 400 }
  ];

  const highest = transactions.reduce((prev, current) =>
    prev.amount > current.amount ? prev : current
  );

  const totalExpense = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div style={{padding:"30px"}}>

      <h2>Insights</h2>

      <div style={{
        display:"flex",
        gap:"30px",
        justifyContent:"center"
      }}>

        <div style={{
          background:"#fff",
          padding:"20px",
          borderRadius:"10px",
          boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <h4>Highest Spending</h4>
          <p>{highest.category} (₹{highest.amount})</p>
        </div>

        <div style={{
          background:"#fff",
          padding:"20px",
          borderRadius:"10px",
          boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <h4>Total Expenses</h4>
          <p>₹{totalExpense}</p>
        </div>

        <div style={{
          background:"#fff",
          padding:"20px",
          borderRadius:"10px",
          boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <h4>Observation</h4>
          <p>Shopping is the highest spending category.</p>
        </div>

      </div>

    </div>
  );
}