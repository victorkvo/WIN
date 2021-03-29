import React, {Component} from 'react';
import '../CSS/Item.css';
import Mbutton from './Mbutton';

class Item extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      // Bootstrap container styling
      <div className="col-sm-4">
        <div className="card card-view">
          <div className="card-body">
            {/* These props are being passed down from the Board Component */}
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.price}</p>
            <img style={{width:"50%", height:"50%", margin:"10px"}} src={this.props.pic[0]}/>
            <br></br>
            <Mbutton pic={this.props.pic} price={this.props.price} body={this.props.body} title={this.props.title}/>
            <button className="btn btn-success" onClick={() => {alert('Item added to Cart');}}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;