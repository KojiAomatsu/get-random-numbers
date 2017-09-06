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
      let nums = this.props.numList[0];
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
      numList : [],
      amount : 2,
      maximum : 2000
    }
  }
  render(){
    return (
      <div>
        <Label
          thisIsTheFirst = {this.state.thisIsTheFirst}
          numList = {this.state.numList}
        />
        <Form
          onClick={() => this.handleClick()}
        />
        <History />
      </div>
    );
  }
  handleClick() {
    let aList = [];
    let theList = this.state.numList;
    for (var i=0;i<this.state.amount;i++) {
      let randomN = Math.floor(Math.random() * this.state.maximum) + 1;
      aList.push(randomN);
    }
    theList.unshift(aList);
    this.setState({
      thisIsTheFirst : false,
      numlist : theList
    });
  }
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
