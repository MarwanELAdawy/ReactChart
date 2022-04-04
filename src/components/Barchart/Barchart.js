import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
let element = [];
let info = [];
let err = [];
let trace = [];

const BarChart = () => {
  const [chart, setChart] = useState({});
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/api/v1/logs/log').then((res)=>res.json()).then((result)=>{
            for (let i of result.data) {
              element = i.log_level;
              if (element == 'INFO') {
                info.push(element);
              }
              else if (element == 'ERROR') {
                err.push(element);
              }
              else if (element == 'TRACE') {
                trace.push(element);
              }
            }
            setChart(result);
          }, (err)=>{
          console.error(err);
          });
      };
      fetchData();
    }, []);
    console.log("chart", chart);
    var data = {
      labels:['info', 'error', 'trace'] ,
      datasets: [
        {
          label: 'Number of logs',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [parseInt(info.length),parseInt(err.length),parseInt(trace.length)]
        }
      ]
    // //labels: chart.data.map(x => x.log_level),
    // datasets: [{
    //   // label: `${chart?.coins?.length} Coins Available`,
    //   // data: chart?.data?.map(x => x.price),
    //   backgroundColor: [
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(255, 159, 64, 0.2)'
    //   ],
    //   borderColor: [
    //     'rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)'
    //   ],
    //   borderWidth: 1
    // }]
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }
  return (
    <div>
      <Bar
        data={data}
        height={400}
        options={options}
      />
    </div>
  )
}

export default BarChart


// export default class Barchart extends React.Component {
  
//   constructor(){
//     super();
//     getChartData();
//   }
//   render() {
//     return (
//       <div className="bar">
//         <Bar
//           data={State}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }

// Barchart.propTypes = {};

// Barchart.defaultProps = {};
