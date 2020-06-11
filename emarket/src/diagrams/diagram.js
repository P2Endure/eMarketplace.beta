import React from 'react';
import '../diagrams/charts/style/charts.css';
import Model from '../testData/buildingModel/modelPresenter';
import Uploader from '../upload/uploader';
import Costs from './charts/costs';
import BarChart from './charts/barChart';
import PieChart from './charts/pieChart';
import PieChartTime from './charts/pieChartTime';
import BarChartEnergy from './charts/barChartEnergy';

export default class Diagram extends React.Component{


render(){
  return(  
  <div>
    <Uploader/>
    <div className="flex-container-row">
    <Model/> 
      <div className="flex-container-col">
      <Costs/>
      <PieChart/>
    </div>
    <BarChart />
    </div>
    <div className="flex-container-row">
    <BarChartEnergy/>
    <PieChartTime/>
    </div>
  </div>
  )}
}