import React from 'react';
import './style/charts.css';
import uploadData from '../../upload/uploadData/modelOutput.json';
import { VictoryPie, VictoryTheme} from 'victory';

export default class PieChartTime extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        valueTime : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S01_SLEEPINGROOM1,
    };
}


  //handle Change for pie chart
  handleTotalSiteEnergyChange(){
    this.setState({   
        valueTime : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S01_SLEEPINGROOM1,
    })
  }

  handleNetSiteEnergyChange(){
    this.setState({   
        valueTime : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S02_SLEEPINGROOM2,
    })
  }

  handleTotalSourceEnergyChange(){
    this.setState({   
        valueTime : uploadData.Time_Not_Comfortable_Based_on_Simple_ASHRAE_55_2004.Z01_S03_GROUPROOM1,
    })
  }

render(){
    return (
        <div id="one">
            <div className="panel-inlay">
                <h5 >Time Not Comfortable</h5>
                <form id="form">
                        <select>
                            <option value="Net_Site_Energy" onClick={()=>this.handleTotalSiteEnergyChange()}>Sleeping Room 1</option>
                            <option value="Net_Site_Energy" onClick={()=>this.handleNetSiteEnergyChange()}>Sleeping Room 2</option>
                            <option value="Net_Site_Energy" onClick={()=>this.handleZ01_S03_GROUPROOM1Change()}>Grouproom</option>
                        </select>
                    </form>
            </div> 
            <VictoryPie data={this.state.valueTime} x="name" y="value" theme={VictoryTheme.material}  width={400}/>
        </div>
    )}
}
