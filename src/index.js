import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Label extends React.Component {
  render(){
    if (this.props.thisIsTheFirst) {
      return (
          <p>Please press the button</p>
        );
    } else {
      let res = [];
      let nums = [4,5,6];
      for (var i = 0; i < nums.length; i++) {
        res.push(<li>{nums[i]}</li>);
      }
      return (
          <ul>{res}</ul>
        );
    }
  }
}

class Form extends React.Component {
  render() {
    return (
      <button className="shuffle" onClick={() => this.props.onClick()}>Shuffle</button>
    );
  }
}

class History extends React.Component {
  render() {
    return(
        <p>history</p>
    );
  }
}

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      thisIsTheFirst : true,
      numlist : [[8],[9,8]],
      amount : 2,
      maximum : 2000
    }
  }
  render(){
    return (
      <div>
        <Label
          thisIsTheFirst = {this.thisIsTheFirst}
          numlist = {this.numlist}
        />
        <Form
          onClick={() => this.handleClick()}
        />
        <History />
      </div>
    );
  }
  handleClick() {
  }
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
