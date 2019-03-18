import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state={
      allSushis:[],
      belt: 0,
      eatenSushi: [],
      budget: 100,
    }
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => this.setState({
      allSushis: sushiData
      })
    )
  }

  positionChange = () => {
    this.setState({
      belt: this.state.belt+4
    })
  }


  handleBudget = (event) => {
    (this.state.budget >= event.price) ?
    this.setState({
      budget: (this.state.budget - event.price)
    }) : alert("You do not have enough money!")

  }

  handleEatSushi = (event) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi,event]
    })
    return this.handleBudget(event)
  }




  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushis={this.state.allSushis}
          belt={this.state.belt}
          eatenSushi={this.state.eatenSushi}
          positionChange={this.positionChange}
          handleEatSushi={this.handleEatSushi}
          />
        <Table budget={this.state.budget}
          eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
