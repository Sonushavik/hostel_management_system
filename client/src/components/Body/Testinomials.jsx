import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testinomials = () => {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const data = [
    {
      "name": "Sonu",
      "description": "I had an amazing stay at this hostel! The staff were super friendly and helpful, and the dorms were clean and comfortable. I met some great people in the common room too. Would definitely recommend!"
    },
    {
      "name": "Anand",
      "description": "This hostel exceeded my expectations in every way. The location was perfect, the breakfast was delicious, and the atmosphere was lively and social. I'll be back for sure!"
    },
    {
      "name": "Abhijeetl",
      "description": "I was a bit nervous about staying in a hostel for the first time, but this place made me feel right at home. The staff were so welcoming and the facilities were top-notch. Thanks for a great stay!"
    },
    {
      "name": "Vikrant",
      "description": "This hostel is the best I've stayed in so far. The rooms are spacious, the beds are comfy, and the staff are super friendly. Highly recommended!"
    },
    {
      "name": "Ayush",
      "description": "I loved the vibe of this hostel! The common room was always buzzing with people, and the staff organized some great events. Can't wait to come back!"
    },
    {
      "name": "Amit",
      "description": "This hostel is in a great location, close to all the main attractions. The staff were really helpful with directions and recommendations too. Thanks for a great stay!"
    },
    {
      "name": "Pappu",
      "description": "I was impressed by how clean and modern the hostel was. The breakfast was also amazing! Would definitely stay here again."
    },
    {
      "name": "Himanshu",
      "description": "This hostel has a great atmosphere, perfect for solo travelers. The staff are super friendly and the dorms are comfortable. Highly recommended!"
    },
    {
      "name": "Shashi",
      "description": "I had a fantastic time at this hostel! The staff were so welcoming, and the facilities were top-notch. Can't wait to come back and stay again!"
    },
    {
      "name": "Raja",
      "description": "This hostel is a great value for the price. The rooms are clean and comfortable, and the staff are super friendly. Would definitely recommend!"
    }  
  ];

  return (
    <div className='bg-red-900 max-w-[1240px] mx-auto bg-opacity-10 text-black'>
         <p className='text-center font-bold  text-[20px] md:text-[30px] py-3'>Testonomials</p>
      <div className='w-3/4 mx-auto slider-container space-y-4'>
        <Slider {...settings}>
            
          {data.map((d, index) => (
            <div key={index} className=' m-4   rounded-t-xl overflow-y-auto '>
                <div className='m-3 bg-gradient-to-b from-red-900 to-red-100 rounded-md'>
              <div className='font-bold text-center my-1 py-2 bg-red-900 text-white rounded-t-md'>{d.name}</div>
              <div className='text-justify m-1 p-2'>{d.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testinomials;
