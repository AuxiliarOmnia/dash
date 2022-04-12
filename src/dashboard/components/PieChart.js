import Chart from "react-apexcharts";


export const PieChart = (props) => {

  const labels = props.labels
  const value = props.value

  const state = {
    options: {
      labels: labels,
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
                  return  `${val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}` 
                }
              },
              total: {
                show: true,
                showAlways: false,
                label: 'Total',
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: '#373d3f',
                formatter: function (w) {
                  return `${w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)} Operações`
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
              width="500"
          />
    </>
}


export const PieChartMoney = (props) => {

  const labels = props.labels
  const value = props.value

  const state = {
    options: {
      labels: labels,
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
              width="500"
          />
    </>
}