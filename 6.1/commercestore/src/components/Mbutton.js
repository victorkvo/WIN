import { Button, Modal, Carousel } from 'react-bootstrap'
import React, { Component } from 'react'
import '../CSS/Mbutton.css';

class Mbutton extends Component {
  constructor()
    {
      super()
      this.state={
        show:false,
      }
    }
    handleModal()
    {
      this.setState({show: !this.state.show})
    }
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <Button onClick={()=>{this.handleModal()}}>View</Button>
        <Modal centered className="animate__animated animate__flip" show={this.state.show} onHide={()=>this.handleModal()}> 
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body ><div className="row">
            <div className="popUp">
              <h1>{this.props.title}</h1>
              {
                  <Carousel>
                    <Carousel.Item>
                      <img
                        style={{ width: "300px", height: "300px" }}
                        src={this.props.pic[0]}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{ width: "300px", height: "300px" }}
                        src={this.props.pic[1]}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{ width: "300px", height: "300px" }}
                        src={this.props.pic[2]}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                }
              <p>{this.props.price}</p>
              <p class="descrip">{this.props.body}</p>
            </div>
            </div>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}
export default Mbutton;