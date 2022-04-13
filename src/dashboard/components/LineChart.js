
import {
  Chart as ChartJS,
  registerables 
} from 'chart.js';

import { Chart } from 'react-chartjs-2'; 

ChartJS.register(...registerables);

export const LineChart = (props) => {

    const values = {
      labels: props.label,
      datasets: [
        {
          type: 'line' ,
          label: 'Saldo',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: props.line,
        },
        {
          type: 'bar',
          label: 'Entradas',
          backgroundColor: 'rgb(75, 192, 192)',
          data: props.bar1,
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: 'Saídas',
          backgroundColor: 'rgb(53, 162, 235)',
          data: props.bar2,
        },
      ],
    }

    const options = {
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            display: true
          }
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: true
          }
        }
      },
    }

    return (
        <>
          <Chart type='bar' data={values} options={options} />
        </>
    )
}

