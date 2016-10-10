import React, { Component } from 'react';

class Table extends Component{

  userData = [];
  constructor(props){
    super(props);
    this.state = {
      data : props.data
    }
  }

  fetchData(){
    var that = this;
    // number of publishs/edits by user
    this.state.data.forEach(function(line){
      //console.log(line, that.userData[line.id_user])
      if(that.userData[line.id_user] === undefined){
        that.userData[line.id_user] = [0, 0];
      }
      switch (line.action_type) {
        case 'publish':
          that.userData[line.id_user][0]++;
          break;
        case 'edit':
          that.userData[line.id_user][1]++;
          break;
        default:
      }
    });
  }

  getTable(){
    return this.userData.map((user, idx) =>
      <tr key={idx}>
        <td>{idx}</td>
        <td>{user[0]}</td>
        <td>{user[1]}</td>
      </tr>);
  }

  render(){
    this.fetchData();
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <td># User</td>
            <td>Publish</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>
          {this.getTable()}
        </tbody>
      </table>
    )
  }
}

export default Table;
