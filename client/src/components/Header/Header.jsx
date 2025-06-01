import React, { useEffect, useState } from 'react';
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';
// const navigate = useNavigate();

const Header = () => {
  const [toggle, setToggle] = useState(false);
const {isLoggedIn,user} = useAuth();

useEffect(() => {
    console.log("User or login status changed:", isLoggedIn, user);
},[isLoggedIn,user]);

  return (
    <>
      <div className='navbar max-w-[1240px] mx-auto bg-gradient-to-r from-red-900 to-black px-4 py-1 border-b border-black shadow sticky top-0 z-50 opacity-95'>
        <div className='max-w-[1240px] flex justify-between mx-2 py-[10px] items-center'>
          {/* Logo or Brand Name */}
          <div className='text-[10px] font-semibold sm:text-[20px] md:text-3xl text-white'>
            <p>JKT Boys Hostel</p>
            <p className='text-[8px] flex'>
              <FaLocationDot className="mt-1 sm:mt-[13px] mr-1" />
              <a
                href="https://maps.app.goo.gl/pdero7HMEtvVSmnG9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline sm:mt-[10px]"
              >
                Muzaffarpur, Bihar
              </a>
            </p>
          </div>

          {/* Hamburger Icon for Mobile Menu */}
          <div className='flex items-center'>
            {toggle ?
              <RiMenuUnfold3Fill onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
              :
              <RiMenuFold3Fill onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
            }

            {/* Main Navigation for Desktop */}
            <ul className='hidden md:flex text-white gap-10'>

              <li >
                <Link to="/"  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Home</Link>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={100} className='hover:text-gray-400 hover:font-bold cursor-pointer'>About</ScrollLink>
              </li>
              <li>
                <ScrollLink to="service" smooth={true} duration={200} className='hover:text-gray-400 hover:font-bold cursor-pointer'>Facility</ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={300} className='hover:text-gray-400 hover:font-bold cursor-pointer'>Contact</ScrollLink>
              </li>
              <li>
                <ScrollLink to="gallery" smooth="true" duration={400} className='hover:text-gray-400 hover:font-bold cursor-pointer'>Gallery</ScrollLink>
              </li>

            </ul>

            {/* Responsive Login Button (remains outside of the mobile menu) */}
            <div className='ml-5'>
              {
                isLoggedIn ? (
                  <>
                  <Link to="/logout">
                <button className='flex items-center gap-2 bg-white text-red-900 px-3 py-2 rounded-md hover:bg-gray-200 transition-all'>
                  <FiLogIn className='text-xl' />
                  <span className='hidden md:inline'>Logout</span>
                </button>
              </Link>

              <Link to={`/profile/${user._id}`}>
                <button className='flex items-center gap-2 bg-white text-red-900 px-3 py-2 rounded-md hover:bg-gray-200 transition-all'>
                  <FiLogIn className='text-xl' />
                  <span className='hidden md:inline'>Profile</span>
                </button>
              </Link>
              </>
                ) : (
                  <Link to="/login">
                <button className='flex items-center gap-2 bg-white text-red-900 px-3 py-2 rounded-md hover:bg-gray-200 transition-all'>
                  <FiLogIn className='text-xl' />
                  <span className='hitdden md:inline'>Login</span>
                </button>
              </Link>
                )
              }
              
            </div>

          </div>
        </div>

        {/* Responsive Mobile Menu */}
        <ul className={`py-2 mx-auto duration-300 md:hidden text-white fixed bg-black top-[65px] text-center w-screen ${toggle ? 'left-0' : 'left-[100%]'}`}>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
            {/* <ScrollLink to="/" smooth={true} duration={100}>Home</ScrollLink> */}
            <Link to="/">Home</Link>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
            <ScrollLink to="about" smooth={true} duration={200}>About</ScrollLink>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
            <ScrollLink to="service" smooth={true} duration={300}>Facility</ScrollLink>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
            <ScrollLink to="contact" smooth={true} duration={400}>Contact</ScrollLink>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
            <ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink>
          </li>

          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
            <ScrollLink to="testonomials" smooth={true} duration={600}>Testonomials</ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
