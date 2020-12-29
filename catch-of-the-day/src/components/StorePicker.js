import React, { Fragment } from "react";

class StorePicker extends React.Component {
  render() {
    return (
        <form className="store-selector">
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit">Visit Store</button>
        </form>

    );
  }
}

export default StorePicker;

//use return followed by parenthesis for formatting

//only ever render 1 PARENT element - use React.Fragment
// import react fragment on initial import - import React, { Fragment } ...- 

// 