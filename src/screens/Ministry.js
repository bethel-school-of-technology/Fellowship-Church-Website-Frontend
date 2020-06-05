import React, { useState } from 'react';
import '../styles/Ministry.scss';



function Carousel() {
  const [x, setX] = useState(0);
  let selectedImage = [
    <div>
      <img className="carousel_cell" src="/img/Photo1.jpg" alt="1"/>,
      <img className="carousel_cell" src="/img/Photo2.jpg" alt="2"/>,
      <img className="carousel_cell" src="/img/Photo3.jpg" alt="3"/>,
      <img className="carousel_cell" src="/img/Photo4.jpg" alt="4"/>,
      <img className="carousel_cell" src="/img/Photo5.jpg" alt="5"/>
  </div>
  
  ];
 

  const prevButton = () => {
    x=== 0 ? setX(-100 * (selectedImage.length - 1)) : setX(x + 100);
  };
  
  const nextButton = () => {
    x=== -100 * (selectedImage.length - 1) ? setX(0) : setX(x - 100)
  };


return( 
  
  <div className="screen" transform = 'translateZ(-137px) rotateY(-72deg)'>
    <button id="goLeft" onClick={prevButton}>Previous</button>
        
    <div className="carousel">
        
        {selectedImage.map((item, index) => {
          return( 
             <div key={index} >
             {item}
             </div>
             );
    
        })}
  
      </div> 
      <button id="goRight" onClick={nextButton}>Next</button>
  </div>

  );
}
export default Carousel;import React, { useState } from 'react';
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
