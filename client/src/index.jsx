import React from 'react';
import ReactDOM from 'react-dom';
let data = require('../../database/data.js').groceryList;
import GroceryList from './components/GroceryList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.groceryList,
      value: '',
      qty: 1,
      itemsList: props.groceryList.map(obj => obj.description)
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
  }
  handleChange (event) {
    this.setState({value: event.target.value});
  }
  handleQtyChange (event) {
    this.setState({qty: +event.target.value});
  }
  handleAdd (event) {
    event.preventDefault();
    if (this.state.itemsList.indexOf(this.state.value) >= 0) {
      let arr = this.state.list.slice();
      arr[this.state.itemsList.indexOf(this.state.value)].quantity += this.state.qty;
      this.setState({list: arr, value: '', qty: 1});
    } else {
      let arr = this.state.itemsList.slice();
      arr.push(this.state.value);
      let obj = {quantity: this.state.qty, description: this.state.value};
      this.setState({
        list: this.state.list.concat([obj]),
        value: '',
        qty: 1,
        itemsList: arr
      });
    }
  }
  render () {
    return (
      <div>
        <input value={this.state.value} placeholder="Add an item" onChange={this.handleChange}/>
        <select value={this.state.qty} onChange={this.handleQtyChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <button onClick={this.handleAdd} >Add</button>
        <GroceryList state = {this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App groceryList = {data} />, document.getElementById('app'));
