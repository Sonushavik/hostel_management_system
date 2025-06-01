import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import h1 from '../../assets/img/h1.jpg';
import h2 from '../../assets/img/h2.png';
import h3 from '../../assets/img/h3.png';
import h4 from '../../assets/img/h4.png';
import h5 from '../../assets/img/h5.png';
import h6 from '../../assets/img/h6.png';

const Gallery = () => {
  const images = [
    { name: 'h1', img: h1 },
    { name: 'h2', img: h2 },
    { name: 'h3', img: h3 },
    { name: 'h4', img: h4 },
    { name: 'h5', img: h5 },
    { name: 'h6', img: h6 },
  ];

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-red-900 bg-opacity-10 text-black max-w-[1240px] mx-auto'>
      <p className='text-center font-bold  text-[20px] md:text-[30px] py-3'>Gallery</p>
      <div className='w-3/4 mx-auto slider-container space-y-4'>
        <Slider {...settings}>
            
          {images.map((d, index) => (
            <div key={index} className=' m-4   rounded-t-xl overflow-y-auto '>
                <div className='m-3 bg-gradient-to-b from-red-900 to-red-100 rounded-md w-fit h-auto'>
              <div className='text-justify m-1 p-2'> 
                <img src={d.img}></img>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;

