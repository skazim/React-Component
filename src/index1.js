import React from 'react';
import ReactDOM from 'react-dom';
import Person2 from './person'


class Person extends React.Component {

  componentDidMount() {
    console.log("Person Component Did Mount is called")
  }
  componentWillMount() {
    require('./index.css');
    console.log("Person's Component Will mount is called")
  }
  constructor(props) {
    super(props);
    console.log("Person's constructor is called")
  }
  componentWillReceiveProps() {
    console.log("Updating Components")
  }
  componentWillUnmount() {
    console.log("Unmounting is called")
  }
  mount(){
    ReactDOM.render(<Person2 />, document.getElementById('renderHere'))
  }
  Unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'))
  }
  render() {
    const name = this.props.name, age = this.props.age;
    console.log("rendering")
    console.log(name, age);
    return (
      <div>
        <h1 className="headColor">Hello Person1</h1>
        {this.props.name} (age: {this.props.age})
        <button onClick={this.mount}>mount me</button>
      <button onClick={this.Unmount}>Unmount me</button>
        <div id="renderHere"></div>
      </div>
    )
  }
}
Person.defaultProps = { age: '24' }

class App extends React.Component {

  render() {
    return (
      <div>
        <Person name="Kazim" />

      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
