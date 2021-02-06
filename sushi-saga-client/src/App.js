import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint! 
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    displayedSushi: [],
    renderPoint: 0,
    sushiEaten: [],
    money: 100
  }

  componentDidMount(){
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API).then(res => res.json()).then(data => this.setState({
      sushi: data,
      displayedSushi: data.slice(0,4)
    }))
  }

  handleClick = sushi => {
    if(this.state.money - sushi.price > 0){
    this.setState((prevState) => ({
      sushiEaten: [...prevState.sushiEaten, sushi],
      money: prevState.money - sushi.price
    }))}else{
      null
    }
  }

  handleMore = () => {
    this.setState((prevState) => ({
      displayedSushi: prevState.sushi.slice(prevState.renderPoint + 4, prevState.renderPoint + 8),
      renderPoint: prevState.renderPoint + 4
    }))
  }

  checkIfSushiEaten = sushi => {    
    if(this.state.sushiEaten.includes(sushi)){
      return true
    }else{
      return false
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.displayedSushi} 
          handleClick={this.handleClick} 
          handleMore={this.handleMore}
          checkIfSushiEaten={this.checkIfSushiEaten}
        />
        <Table 
          sushi={this.state.sushi} 
          sushiEaten={this.state.sushiEaten}
          money={this.state.money}          
        />
      </div>
    );
  }
}

export default App;