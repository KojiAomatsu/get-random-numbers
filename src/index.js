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
    if (this.props.thisIsTheFirst) {
      return(
        <p>There is no history</p>
      );
    } else {
      let theList = this.props.numList;
      let res1 = [];
      let res2 = [];
      for (var i=0; i < theList.length; i++) {
        for (var j=0; j < theList[i].length; j++) {
          res1.push(<li>{theList[i][j]}</li>);
        }
        res2.push(<li><ul>{res1}</ul></li>);
        res1 = [];
      }
      return(
        <div>
          <p>History</p>
          <ul>{res2}</ul>
        </div>
      );
    }
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
        <History
          thisIsTheFirst = {this.state.thisIsTheFirst}
          numList = {this.state.numList}
        />
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
