import React from 'react'
import ReactDom from 'react-dom'
import namor from 'namor'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './react-bootstrap-table.css'


const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
}

const data = () => {
  const statusChoice = Math.random();
  return {
    id : Math.floor(Math.random(1-10) * 50),
    firstName: namor.generate({ words: 1, number: 0 }),
    lastName: namor.generate({ words: 1, number: 0 }),
    age: Math.floor(Math.random() * 100),
    visits: Math.floor(Math.random() * 100),
    status: statusChoice > 0.66 ? "relationShip" : statusChoice > 0.33 ? "complicated" : "single",
    image: <img src="http://content.etilize.com/images/200/1037382341.jpg?noimage=404" />
  }
}
function makeData(len = 10) {
  return range(len).map(d => {
    return {
      ...data(),
      children: range(10).map(data)
    };
  });
}

class TableComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    console.log(data)
    return (
      // <h1 className="testing">hello</h1>
      <BootstrapTable data={data} exportCSV csvFileName='table-export.csv' version='4'>
        <TableHeaderColumn isKey dataField='id'>Id </TableHeaderColumn> 
        <TableHeaderColumn dataField='firstName'>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='lastName'>Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField='age'>Age</TableHeaderColumn>  
      </BootstrapTable>
    )
  }
}
ReactDom.render(
  <TableComponent />,
  document.getElementById("root")
);

