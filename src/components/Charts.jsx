import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Charts() {

  const doughnutData = {
    labels: ["Food", "Shopping", "Transport"],
    datasets: [
      {
        data: [500, 2000, 400],
        backgroundColor: [
          "#ff6b6b",
          "#4dabf7",
          "#51cf66"
        ],
        borderWidth: 0
      }
    ]
  };

  const doughnutOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  };

  const barData = {
    labels: ["Jan","Feb","Mar","Apr"],
    datasets: [
      {
        label: "Income",
        data: [20000,25000,22000,30000],
        backgroundColor: "rgba(77,171,247,0.8)",
        borderRadius: 8
      },
      {
        label: "Expense",
        data: [8000,10000,9000,12000],
        backgroundColor: "rgba(255,107,107,0.8)",
        borderRadius: 8
      }
    ]
  };

  const barOptions = {
    responsive:true,
    plugins:{
      legend:{position:"top"}
    },
    animation:{
      duration:1500
    }
  };

  return (

    <div style={{marginTop:"50px"}}>

      <h2 style={{textAlign:"center",marginBottom:"40px"}}>
        Financial Insights
      </h2>

      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"120px"
      }}>

        <div style={{width:"280px"}}>
          <Doughnut data={doughnutData} options={doughnutOptions}/>
        </div>

        <div style={{width:"520px"}}>
          <Bar data={barData} options={barOptions}/>
        </div>

      </div>

    </div>

  );
}