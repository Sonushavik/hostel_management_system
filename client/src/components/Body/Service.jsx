import React from 'react'
import library from '../../assets/img/library.jpg';
import mess from '../../assets/img/mess_icon.jpg';
import wifi from '../../assets/img/Wifi.jpg';
import room from '../../assets/img/room.jpg';
import houseKeeping from '../../assets/img/housekeeping_icon.jpg';
import watchman from '../../assets/img/watchman_icon.jpg';

const Service = () => {
  return (
    <div className='bg-red-900 bg-opacity-10 max-w-[1240px] mx-auto'>
      <div className=" py-[30px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center py-4">Services</h1>
        <div className='max-w-[1000px]  mx-auto  px-auto  grid sm:grid-cols-2 md:grid-cols-4 gap-[20px] text-center '>
            <div className=' h-[350px] w-[200px]  bg-slate-200 drop-shadow-2xl hover:scale-105 duration-300 flex mx-auto flex-col rounded-[20px] overflow-hidden'>
                <div className=' '>
                    <img src={room}></img>
                </div>
                <div className='text-center font-bold py-2'>Room</div>
                <div className="overflow-y-scroll scrollbar-hide h-[80px] px-4 text-justify">
                The room provides cozy, modern furnishings and a relaxing atmosphere.
                </div>
            </div>
            <div className=' h-[350px] w-[200px] mx-auto bg-slate-200 drop-shadow-2xl hover:scale-105 duration-300 rounded-[20px] overflow-hidden'>
            <div className=''>
                    <img src={library} className=''></img>
                </div>
                <div className='text-center font-bold py-2'>Library</div>
                <div className="overflow-y-scroll scrollbar-hide h-[80px] px-4 text-justify">
                The library offers a quiet space with extensive resources for studying.
                </div>
            </div>
            <div className=' h-[350px] w-[200px] mx-auto bg-slate-200 drop-shadow-2xl hover:scale-105 duration-300 rounded-[20px] overflow-hidden'>
            <div className=''>
                    <img src={mess}></img>
                </div>
                <div className='text-center font-bold py-2'>Mess</div>
                <div className="overflow-y-scroll scrollbar-hide h-[80px] px-4 text-justify">
                The mess provides nutritious meals in a clean and comfortable dining area.
                </div>
            </div>
            <div className=' h-[350px] w-[200px] mx-auto bg-slate-200 drop-shadow-2xl hover:scale-105 duration-300 rounded-[20px] overflow-hidden'>
            <div className=''>
                    <img src={wifi}></img>
                </div>
                <div className='text-center font-bold py-2'>Wifi</div>
                <div className="overflow-y-scroll scrollbar-hide h-[80px] px-4 text-justify">
                The hostel offers free, high-speed Wi-Fi for uninterrupted internet access.
                </div>
            </div>
            <div className=' h-[350px] w-[200px] mx-auto bg-slate-200 drop-shadow-2xl hover:scale-105 duration-300 rounded-[20px] overflow-hidden'>
            <div className=''>
                    <img src={houseKeeping}></img>
                </div>
                <div className='text-center font-bold py-2'>HouseKeeping</div>
                <div className=" overflow- h-[80px] px-4 text-justify">     
                  Housekeeping services ensure clean and well-maintained rooms for all residents.
                </div>
            </div>
            <div className=' h-[350px] w-[200px] mx-auto bg-slate-200 drop-shadow-2xl hover:scale-105 duration-300 rounded-[20px] overflow-hidden'>
            <div className=''>
                    <img src={watchman}></img>
                </div>
                <div className='text-center font-bold py-2'>WatchMan</div>
                <div className="overflow-y-scroll scrollbar-hide h-[80px] px-4 text-justify">
                The watchman provides 24/7 security, ensuring a safe living environment.
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
