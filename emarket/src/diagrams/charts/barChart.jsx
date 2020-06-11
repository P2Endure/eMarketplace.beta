import React from 'react';
import './style/charts.css';
import uploadData from '../../upload/uploadData/modelOutput.json';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

export default class BarChart extends React.Component{

constructor(props){
    super(props);
        this.state = {
        valueBar : uploadData.End_Uses.Heating,
    }
}

  //handle Change for bar chart
  handleHeatinChange(){
    this.setState({
      valueBar : uploadData.End_Uses.Cooling,
    })
  }

  handleCoolingChange(){
    this.setState({   
      valueBar : uploadData.End_Uses.Heating,
    })
  }

  handleLightningChange(){
    this.setState({   
      valueBar : uploadData.End_Uses.Interior_Lighting,
    })
  } 

render(){
    return(
    <div id = "one">      
        <div className="panel-inlay">
          <h5>End Uses</h5>
          <form id="form">
                <select>
                    <option value="heating" onClick={()=>this.handleCoolingChange()}>Heating</option>
                    <option value="cooling" onClick={()=>this.handleHeatinChange()}>Cooling</option>
                    <option value="cooling" onClick={()=>this.handleLightningChange()}>Interior Lighting</option>
                </select>
            </form>
    </div> 
   
        <VictoryChart domainPadding={20} theme={VictoryTheme.material} height={350} width={700}>
            <VictoryAxis tickValues={[1, 2, 3, 4, 5, 6]} tickFormat={
                ["Electricity [kWh]", "Natural Gas", "Additinal Fuel", "District Cooling", "District Heating", "Water"]
                }/>
            <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
            <VictoryBar data={this.state.valueBar} x="name" y="value"/>
        </VictoryChart> 
     
    </div>     
        )
    }
}


