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
            label: 'Lucro',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: props.line,
          },
          {
            type: 'bar',
            label: 'Entrada',
            backgroundColor: 'rgb(75, 192, 192)',
            data: props.bar1,
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'Saída',
            backgroundColor: 'rgb(53, 162, 235)',
            data: props.bar2,
          },
        ],
      }

    return (
        <>
          <Chart type='bar' data={values}/>
        </>
    )
}

