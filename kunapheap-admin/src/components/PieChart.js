import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['T-Shirt', 'Jacket', 'Trousers', 'Shoes'],
  datasets: [
    {
      label: 'Popular products',
      data: [100,50,40,80],
      backgroundColor: [
        'rgb(139,0,139)',
        'rgb(0,191,255)',
        'rgb(60,179,113)',
        'rgb(210,105,30)'
      ],
      
    }
  ]
};
const PieChart = () => {
  return (
    <Doughnut data={data} />
  )
}

export default PieChart