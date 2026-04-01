export default function SummaryCards() {
  return (
    <div style={{display:"flex", gap:"20px", padding:"20px", justifyContent:"center"}}>

      <div style={{background:"#d4f8d4", padding:"20px", borderRadius:"10px"}}>
        <h3>Total Balance</h3>
        <p>₹30,500</p>
      </div>

      <div style={{background:"#d4e8ff", padding:"20px", borderRadius:"10px"}}>
        <h3>Income</h3>
        <p>₹33,000</p>
      </div>

      <div style={{background:"#ffd4d4", padding:"20px", borderRadius:"10px"}}>
        <h3>Expenses</h3>
        <p>₹2,500</p>
      </div>

    </div>
  );
}