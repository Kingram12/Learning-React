import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;

//export right away - don't forget it
//anything that isnt a string is passed in via curly braces

//implicit returns  - const Header = props => ( codejaljdoawdooawd );

//helper.js file for javascript functions 

//events are done inline 
//<button onClick={this.FunctionName}>Click me!</button>
//golden rule - don't touch the DOM

//state - like an object that holds data for the component and children -- updates all items with that variable name 