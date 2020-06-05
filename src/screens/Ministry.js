import React, { useState } from 'react';
import '../styles/Ministry.css';

class TodoApp extends React.Component{
	constructor(props) {
    super(props)
  	this.state = { 
    	imgIdx: 0,
      imgs: [
"https://images.pexels.com/photos/935944/pexels-photo-935944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 
"https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", 

"https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

"https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 
"https://images.pexels.com/photos/576926/pexels-photo-576926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]
    }
  }
 next(){
 	let n = this.state.imgIdx
  n += 1
  if(n == this.state.imgs.length){
  	n = 0
	}
  this.setState({imgIdx: n})
 }
 back(){
 	let n = this.state.imgIdx
  n -= 1
  if(n < 0){
  	n = this.state.imgs.length - 1
	}
  this.setState({imgIdx: n})
 }
 render(){
  <button onClick={() => this.back()}>Previous</button>
 let img = this.state.imgs[this.state.imgIdx];
 console.log(this.state.imgIdx)
 return(
 <div>
   <img src={img} />
   
   
   <button onClick={() => this.next()}>Next</button>
   
 </div>
 )
 }
}


export default TodoApp;
