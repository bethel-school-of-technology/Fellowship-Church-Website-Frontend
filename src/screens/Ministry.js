import React, { useState } from 'react';
import '../styles/Ministry.css';



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
    x=== 0 ? setX(-100 * (selectedImage - 1)) : setX(x + 100);
  };
  
  const nextButton = () => {
    x=== -100 * (selectedImage + 1) ? setX(0) : setX(x - 100)
  };


return( 
  
  <div className="screen" >
    <button id="goLeft" onClick={prevButton}>Previous</button>
    <button id="goRight" onClick={nextButton}>Next</button>
    <div className="carousel">
        
        {selectedImage.map((item, index) => {
          return( 
             <div key={index} >
             {item}
             </div>
             );
    
        })}
  
      </div> 
      
  </div>

  );
}
export default Carousel;