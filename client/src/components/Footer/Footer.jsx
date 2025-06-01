import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
    <div className='bg-black mx-auto max-w-[1240px] overflow-scroll'>
      <div className=" text-white text-[10px] grid grid-cols-2 mx-auto max-w-[1000px] gap-2">
        <div className=' grid '>
            <ul className='sm:flex gap-2 p-2'>
            <li >
                  <Link to="banner" smooth={true} duration={500} className='hover:text-gray-400 hover:font-bold cursor-pointer'>Home</Link>
                </li>
              <li>
                <Link to="about" smooth={true} duration ={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>About</Link>
              </li>
              <li>
                <Link to="service" smooth={true} duration={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Facility</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Contact</Link>
              </li>
              <li>
                <Link to="gallery" smooth="true" duration={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Gallery</Link>
              </li>
            </ul>
            <div className='flex gap-2 m-2 '>
                <p>Developer-Contact</p>
                <a href='mailto:sonuk06212@gmail.com' className=' text-gray-300 hover:text-gray-500'><MdEmail /></a>

                <a
                    href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
                    target='_blank'
                    rel='noopene noreferrer'
                    className='text-blue-300 hover:text-blue-600'
                ><BsLinkedin /></a>
                
                <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                  ><FaInstagram />
                   </a>
            </div>
        </div>

        <div className='grid'>
            <div className=' h-[170px] m-2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.954260712642!2d85.37693941007494!3d26.133034293067954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed119e4eab1105%3A0x6b553c63ed02177f!2sKarpuri%20thakur%20hostel!5e0!3m2!1sen!2sin!4v1729069702642!5m2!1sen!2sin"></iframe>
            <p>Sikandarpur Muzaffarpur, Bihar 842001</p>
            </div>
            <div>
            <p>© 2024 JKT Hostel. All rights reserved.</p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer
