
import Card from "./Card"
import './App.css';
import Wakit from "./Wakit "

import React, { Component } from 'react'

export default class App extends Component {
  constructor( props){ 
    super (props) 
    this.state ={  
      Person:{ fullName:"jihen Bouheni",
      bio:"this is bio",
      imgSrc:"https://www.wallpapertip.com/wmimgs/66-666274_more-wallpaper-collections-beautiful-pictures-for-profile.jpg",
                
     profession:"etudiant"    },
        shows:true


    }

  

}
  badelstate (){
    this.setState({shows :!this.state.shows})

  }
  render() {
    return (
      <div>
            
      
        <button onClick={()=>this.badelstate()}>  Hello </button>
        {this.state.shows?  <Card card={this.state.Person }  />:null}
        <Wakit/>
      </div>
    )
 
    }

}