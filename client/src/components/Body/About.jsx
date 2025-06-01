import React from 'react'
import hostel from '../../assets/img/hostel.png';


const About = () => {
  return (
    <div className='bg-red-900 bg-opacity-10 max-w-[1240px] mx-auto'>
      <div className='max-w-[1000px]  sm:h-[400px] grid sm:grid-cols-2 mx-auto p-4 items-center' >

        <div className='mx-auto m-2 pt-2 '>
          <img src={hostel} className='shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-4 border-red-900 hover:scale-105 duration-300 hover:bg-black'></img>
        </div>
          <div className='text-center mx-auto px-3'>
            <h2 className='font-bold text-[20px] sm:text-[30px] mx-auto pb-2' >About</h2>
            <p className='text-justify text-sm sm:text-base'><b>Our government hostel, fully funded and operated by the Bihar government,</b> provides free accommodation for students pursuing their education in the city. We are committed to offering a safe, supportive, and student-centered environment at no cost, ensuring that financial barriers do not hinder access to quality housing. With well-maintained facilities, spacious rooms, and dedicated study areas, the hostel promotes both academic success and personal growth. Located conveniently near educational institutions, we also prioritize safety with round-the-clock security. This hostel is part of the Bihar government's initiative to support students by offering completely free and comfortable living arrangements.</p>
          </div>
      </div>
              
    </div>
  )
}

export default About
