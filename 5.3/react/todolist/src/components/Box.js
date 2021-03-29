import React, { Component } from 'react'
import '../css/Box.css';

class Box extends Component {
    constructor() {
      super();
    }
    render() {
        return (
            <div className="mountNode2">Hello React  
              <div> <input>
               </input>
               <pre>{new Date().toLocaleTimeString()}</pre>  
              </div>
        </div>
        )}
}
export default Box;

