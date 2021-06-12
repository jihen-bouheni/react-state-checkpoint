import React, { Component } from 'react';

class Wakit  extends Component {
    constructor( props){ 
        super (props) 
        this.state={heur:0}}
         componentDidMount(){
             setInterval(() =>  {
                this.setState(
                  {heur:new Date().toLocaleTimeString()
              })
                 
             }, 1000);
         }
         
    render() {
        return (
            <div>
            <h2>{this.state.heur}</h2>  
            </div>
        );
    }
}

export default Wakit ;
