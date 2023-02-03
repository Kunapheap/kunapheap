import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({amout}) => {

  const category = useSelector((state) => state.category.value);

  const [label,setLabel] = useState([]);


  useEffect(() => {
    setLabel(category.map(item => item.category_name))
  },[])

  const data = {
    labels: label,
    datasets: [
      {
        label: 'Amout by Category',
        data: amout,
        backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B",
         "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"]
        
      }
    ]
  };

  return (
    <Doughnut data={data} />
  )
}

export default PieChart