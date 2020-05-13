import React, {Component} from 'react';
import '../styles/Ministry.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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
  
  
  class Ministry extends Component {
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
      )
    }
  }

export default Ministry;