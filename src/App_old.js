import React, { Component } from 'react';
import './App.css';
import file from './../../../python/data_function.json';
import BarChart from './components/Barchart';
import PieChart from './components/Piechart';

class App extends Component {
  data = [];
  BreakException = {};
  success = 0; error = 0;

  readFile(){
    var that = this;
    try{
      file.forEach(function(line, idx){
        if(line.type === 'success') that.success++;
        if(line.type === 'error') that.error++;
        that.data[idx] = line;
        if(idx === that.count){
          throw this.BreakException;
        }
      });

    } catch(e){}
  }

  renderItems(){
     return this.data.map((log, idx) =>
       <tr key={idx} className={log.type === 'success' ? 'success' : 'danger'}>
         <td>{log.date}</td>
         <td>{log.type}</td>
         <td>{log.message}</td>
       </tr>);
  }

  render() {
    //this.readFile();
    return (
      <div className="col-xs-12">
        <div className="App">
          <div className="col-xs-6">
              <BarChart success={this.success} error={this.error} />
          </div>
          <div className="col-xs-6">
            <PieChart success={this.success} error={this.error} />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
