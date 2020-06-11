import React from 'react';
import './style/charts.css';
import uploadData from '../../upload/uploadData/modelOutput.json';

export default class Costs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
        };
    };

changeTest(){
    this.setState({
      valueSingle : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    })
  }

render(){
    return(
        <div id="two">
            <div className="panel-inlay">
                <h3> Costs</h3>
            </div>
            <div>
                <div id="inlay">{this.state.valueSingle[0].name} : {this.state.valueSingle[0].value + " kWh" + "--" + Math.round(this.state.valueSingle[0].value * 0.144) + " Euro"}</div>
                <div id="inlay">{this.state.valueSingle[1].name} : {this.state.valueSingle[1].value + " kWh" + "--" + Math.round(this.state.valueSingle[1].value * 0.144) + " Euro"}</div>
            </div>      
        </div>
        )
    }     
}