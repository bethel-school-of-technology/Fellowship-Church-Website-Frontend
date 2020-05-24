import React, {useState} from 'react';
import '../styles/Ministry.scss';
import ImgComp from '../components/ImgComp.js'
//import Photo1 from "../img/Photo1.jpg";
import Photo2 from "../img/Photo2.jpg";
import Photo3 from "../img/Photo3.jpg";
import Photo4 from "../img/Photo4.jpg";
import Photo5 from "../img/Photo5.jpg";

function Carousel() {
  const [x,setX] = useState(0)
  let sliderArr = [
  
    //<ImgComp src={Photo1} />,
    <ImgComp src={Photo2} />,
    <ImgComp src={Photo3} />,
    <ImgComp src={Photo4} />,
    <ImgComp src={Photo5} />
 
  ];
  
  const goLeft = () => {
      console.log(x);
      x=== 0 ? setX( - 100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
      console.log(x);
    x=== -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };



return(
  <div className="Carousel">
        <div>
          <img src="../img/Photo1.jpg" />
        </div>

    {sliderArr.map((item,index) => {
        return(  <div key={index} className="slide" style={{transform:'translateX(${x}%)'}}>
           {item} </div>)
  
      })}


      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      
      <button id="goRight" onClick={goRight}>
      <i class="fas fa-chevron-right"></i>
      </button>
  </div>

);
}




/*


const photos = [ 
  {name: 'Photo 1',
 url: "https://images.pexels.com/photos/935944/pexels-photo-935944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
 {name: 'Photo 2',
 url: "/photos/Community_Projectshttps://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
 {name: 'Photo 3',
 url: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
 {name: 'Photo 4',
 url: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
 {name: 'Photo 5',
 url: "https://images.pexels.com/photos/576926/pexels-photo-576926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
  ];
  
  
  class Ministry extends React.Component {
    render() {
      const settings = {
        dots: true,
        fade: true, 
        infinte: true, 
        speed: 500,
        slidesToShow: 1, 
        arrows: true, 
        slidesToScroll: 1, 
        className: "slides"
      }
      return (
        <div className="Ministry">
          <Slider {...settings}>
            {photos.map((photo) => {
              return(
                <div>
                  <img width="100%" src={photo.url} alt="photos"/>
                 
                </div>
              );
            })};
          </Slider>
        </div>
      );
    }
  };
*/
export default Carousel;