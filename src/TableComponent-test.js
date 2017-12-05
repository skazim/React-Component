import React from 'react'
import ReactDom from 'react-dom'
import namor from 'namor'
import ReactTable from 'react-table'

import "react-table/react-table.css";   
const range = len => {
  const arr = [];
  for (let i =0 ; i < len ;i++)
  {
    arr.push(i);
   }
  return arr;
}

const data = () => {
  const statusChoice = Math.random ();  
  return {
  firstName: namor.generate({ words: 1, number: 0 }),
    lastName : namor.generate({ words: 1, number: 0 }),
      age : Math.floor(Math.random() * 100),
        visits: Math.floor(Math.random() * 100),
          status : statusChoice > 0.66 ? "relationShip" : statusChoice > 0.33 ? "complicated" : "single",
            image: <img src="http://content.etilize.com/images/200/1037382341.jpg?noimage=404"/>

  }
}
function makeData(len = 50) {
  return range(len).map(d => {
    return {
      ...data(),
      children: range(10).map(data)
    };
  });
}
 
class TableComponent extends React.Component{

  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }  
  render() {
    const { data } = this.state;

    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName
              },
              { 
                Header: "Image",
                accessor : "image"


              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age"
              },
              {
                Header: "Status",
                accessor: "status"
              }
            ]
          },
          {
            Header: 'Stats',
            columns: [
              {
                Header: "Visits",
                accessor: "visits"
              }
            ]
          }
        ]}
        defaultPageSize={50}
        className="-striped -highlight"
      />
    )
  }
}
ReactDom.render(
<TableComponent />,
 document.getElementById("root")
);

