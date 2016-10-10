import React, { Component } from 'react';
import './App.css';
import file from './../../../python/data_bd.json';
import PieChart from './components/Piechart';
import BarChart from './components/Barchart';
import Table from './components/Table';
import Menu from './components/Menu';

class App extends Component {
  data = [];
  count = 20000;
  BreakException = {};

  constructor(props){
    super(props);
    this.state = {
      publish : 0,
      edit : 0
    }
  }
  render() {
    this.readFile();
    return (
      <div className="col-xs-12">
        <Menu nav="home"/>
        <h1>Products Status</h1>
        <h2>Published: {this.state.publish} products | Edited: {this.state.edit} products</h2>
        <div className="col-xs-6">
      <PieChart legendA='Published' legendB='Edited'
          valueA={this.state.publish} valueB={this.state.edit} />
      </div>
      <div className="col-xs-6">
    <BarChart legendA='Published' legendB='Edited'
        valueA={this.state.publish} valueB={this.state.edit} />
    </div>
        <h2>Adverts By User</h2>
        <Table data={this.data}/>
      </div>
    );
  }

  readFile(){
    var that = this;
    try{
      file.forEach(function(line, idx){
        switch(line.action_type){
          case 'publish':
            that.state.publish++;break;
          case 'edit':
            that.state.edit++;break;
          default:
        }
        that.data[idx] = line;
        if(idx === that.count){
          throw this.BreakException;
        }
      });

    } catch(e){}
  }
}

export default App;
