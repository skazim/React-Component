import React from 'react';

class Person2 extends React.Component {
  componentDidMount() {
    console.log("Person2 Component Did Mount is called")
  }
  componentWillMount() {
    require('./custom.css');
    console.log("Person2's Component Will mount is called")
  }
  constructor(props) {
    super(props);
    console.log("Person2's constructor is called")
  }
  componentWillReceiveProps() {
    console.log("person2 Updating Components")
  }
  componentWillUnmount() {
    console.log("Person2 Unmounting is called")
  }
  render(){
    console.log("Person2 render is called")
    return(
      <h1 className="headColor">Hello Person2</h1>
    )
  }
}

export default Person2;