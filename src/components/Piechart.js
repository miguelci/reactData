import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

class PieChart extends Component{

  constructor(props){
    super(props);
    this.state = {
      legendA : props.legendA,
      legendB : props.legendB,
      valueA : props.valueA,
      valueB : props.valueB,
    }
  }


  render(){
    return(
      <div className={'my-preety-chart-container'}>
        <Chart chartType="PieChart" data={[
          ["Element", "Number", {"role": "style"}],
          [this.state.legendA, this.state.valueA, "number"],
          [this.state.legendB, this.state.valueB, "number"]
          ]}
            options={{}}
            graph_id="SomeChart"
            width={"100%"} height={"400px"}
            legend_toggle={true}
          />
      </div>
    )
  }
}

export default PieChart;
