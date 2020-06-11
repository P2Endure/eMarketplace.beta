import React from 'react';
import './style/charts.css';
import uploadData from '../../upload/uploadData/modelOutput.json';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';

export default class BarChartEnergy extends React.Component{

constructor(props){
    super(props);
        this.state = {
        valueEnergy : uploadData.Site_and_Source_Energy.Total_Site_Energy,
    }
}

  //handle Change for bar chart
  handleHeatinChange(){
    this.setState({
        valueEnergy : uploadData.Site_and_Source_Energy.Net_Site_Energy,
    })
  }

  handleCoolingChange(){
    this.setState({   
        valueEnergy : uploadData.Site_and_Source_Energy.Total_Source_Energy,
    })
  }

  handleLightningChange(){
    this.setState({   
        valueEnergy : uploadData.Site_and_Source_Energy.Net_Source_Energy,
    })
  }       

render(){
    return(
    <div id = "one">      
        <div className="panel-inlay">
          <h5> Site and Source Energy</h5>
          <form id="form">
                <select>
                    <option value="heating" onClick={()=>this.handleCoolingChange()}>Net Site Energy</option>
                    <option value="cooling" onClick={()=>this.handleHeatinChange()}>Total Source Energy</option>
                    <option value="cooling" onClick={()=>this.handleLightningChange()}>Net Source Energy</option>
                </select>
            </form>
    </div> 
        <VictoryChart domainPadding={80} theme={VictoryTheme.material} height={350} width={1200}>
            <VictoryAxis tickValues={[1, 2, 3]} tickFormat={
                ["Total Energy [kWh]", "Energy/Total Building Area [kWh/m2]", "Energy/Conditioned Building Area [kWh/m2]"]
                }/>
            <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
            <VictoryBar data={this.state.valueEnergy} x="name" y="value"/>
        </VictoryChart> 
    </div>     
        )
    }
}
