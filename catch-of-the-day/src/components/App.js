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
            <Header tagline="Wes is Cool"></Header>
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