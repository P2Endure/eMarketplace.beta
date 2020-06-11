import React from 'react';
import './style/charts.css';
import uploadData from '../../upload/uploadData/modelOutput.json';
import { VictoryPie, VictoryTheme} from 'victory';

export default class PieChart extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        valueCosts : uploadData.EAp2_6_Energy_Use_Summary.Additional
    };
}


  //handle Change for pie chart
handleTotalSiteEnergyChange(){
    this.setState({   
        valueCosts : uploadData.EAp2_6_Energy_Use_Summary.Electricity,
    })
  }

handleTotalSourceEnergyChange(){
    this.setState({   
      valueCosts : uploadData.EAp2_6_Energy_Use_Summary.Additional,
    })
}

render(){
    return (
        <div id="two">
            <div className="panel-inlay">
                Energy Use Summary
                    <form id="form">
                        <select>
                            <option value="Additional" onClick={()=>this.handleTotalSiteEnergyChange()}>Electricity</option>
                            <option value="Additional" onClick={()=>this.handleTotalSourceEnergyChange()}>Additional</option>
                        </select>
                    </form>
            </div>
                <VictoryPie data={this.state.valueCosts} x="name" y="value" theme={VictoryTheme.material}/>
        </div>
    )}
}
