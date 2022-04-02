import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useState, useEffect } from "react";


const State = {
  labels: ['INFO', 'ERROR', 'Trace'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: []
    }
  ]
};
let element = [];
let info = [];
let err = [];
let trace = [];


function getChartData (){
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
    console.log(State.datasets[0]);
  }, (err)=>{
    console.error(err);
  });
};




export default class Barchart extends React.Component {
  constructor(){
    super();
    getChartData();
  }
  render() {
    return (
      <div className="bar">
        <Bar
          data={State}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
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
}

Barchart.propTypes = {};

Barchart.defaultProps = {};
