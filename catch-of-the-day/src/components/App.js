import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} index = {key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
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

//data will live within app to be used by other components - cant pass the data up but you can always pass it down

//how do we get an item into state? you can't update it directly from forms etc: The method and the declaration of state have to live in the same component

//in order to utilize a function/method within another component, you have to use props. props will allow you to take the function that lives within the App/parent component and pass it to another component. Like passing a ball to neighbor - it's being passed by each component level until it reaches it's lowest level/required level.

//any function that is going to update state needs to live within the same component as the state.

//displaying state with JSX --- review: video 15

//don't pass down data unless you actually need it within a component -- example: you need parts of state, you don't want to pass the entire state including information that wont be used.