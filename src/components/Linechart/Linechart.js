import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Line} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
let element = [];
let info = 0;
let err = 0;
let trace = 0;

const LineChart = () => {
  const [chart, setChart] = useState({});
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000/api/v1/logs/log').then((res)=>res.json()).then((result)=>{
            for (let i of result.data) {
              element = i.log_level;
              if (element == 'INFO') {
                info++;
              }
              else if (element == 'ERROR') {
                err++;
              }
              else if (element == 'TRACE') {
                trace++;
              }
            }
            setChart(result);
          }, (err)=>{
          console.error(err);
          });
      };
      fetchData();
    }, []);

const state = {
  labels: chart?.data?.map(x => x.log_level).filter((value, index, self) => self.indexOf(value) === index) ,
  datasets: [
    {
      label: 'Number of logs',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [info, trace, err]
    }
  ]
}
  return (
    <div className="line">
      <Line
        data={state}
        options={{
          title:{
            display:true,
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
}
export default LineChart


