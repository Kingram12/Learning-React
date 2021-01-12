import React from "react";
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
      const { image, name, price, desc, status } = this.props.details;
    return <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
        <span className="price">{formatPrice(price)}</span></h3>
        <p>{desc}</p>
        <button>Add To Cart</button>
        </li>;
  }
}

export default Fish;



//what is the longest repeated piece of the code? Ex: this.props.details.name then this.props.details.image --- shorten to a deconstructed version SEE ABOVE -- 