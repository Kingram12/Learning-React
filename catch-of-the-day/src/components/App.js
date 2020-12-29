import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
render() {
    return (
        <div className="catch-of-the-day">
        <div className="menu">
            <Header tagline="Fresh Seafood Market"></Header>
        </div>
        <Order></Order>
        <Inventory></Inventory>
        </div>
    );
}
}

export default App;


//export right away - don't forget it
//anything that isnt a string is passed in via curly braces

//implicit returns  - const Header = props => ( codejaljdoawdooawd );

//helper.js file for javascript functions 