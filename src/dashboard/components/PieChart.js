import Chart from "react-apexcharts";


export const PieChart = (props) => {

  const labels = props.labels
  const value = props.value

  const state = {
    options: {
      labels: labels,
      legend:{
        show: false,
        fontSize: '10px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
      },
      plotOptions: {
        pie: {
          donut: {
            show: true,
            labels: {
              show: true,
              name: {
                fontSize: "14px",
                formatter: function (val){
                  return val
                }
              },
              value: {
                show: true,
                formatter: function (val){
                  return val
                }
              },
            },
          }
        }
      }
    },
    series: value,
    }

    return <>
          <Chart
              options={state.options}
              series={state.series}
              type="donut"
              width={props.width}
          />
    </>
}

export const PieChartMoney = (props) => {

  const labels = props.labels
  const value = props.value

  const state = {
    options: {
      labels: labels,
      legend:{
        show: false,
        fontSize: '10px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
      },
      plotOptions: {
        pie: {
          donut: {
            show: true,
            labels: {
              show: true,
              name: {
                fontSize: "14px",
                formatter: function (val){
                  return val
                }
              },
              value: {
                show: true,
                formatter: function (val){
                  return  `R$ ${val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` 
                }
              }
            },
          }
        }
      }
    },
    series: value,
    }

    return <>
          <Chart
              options={state.options}
              series={state.series}
              type="donut"
              width={props.width}
          />
    </>
}