import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Pie, Doughnut} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
let element = [];
let info = 0;
let err = 0;
let trace = 0;

const PieChart = () => {
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
      label: 'Rainfall',
      backgroundColor: [
        '#2FDE00',
        '#C9DE00',
        '#B21F00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [info, trace, err]
    }
  ]
};


  return (
    <>
    <div className="pie">
      <Pie
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
    <div className="Doughnut">
      <Doughnut
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
    </>
  );
}
export default PieChart


