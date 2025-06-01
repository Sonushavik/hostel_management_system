import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {

  const {userId} = useParams();

  const [userProfile, setUserProfile] = useState({
    _id: userId || "",
    username: "",
    email: "",
    phone:""
  })


  const {user} = useAuth();

  useEffect(() => {
    if (user) {
      setUserProfile({
        _id: userId || user._id || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || ""
      });
      
      // console.log("Profile ID changed:", userId);

    }
  }, [user,userId]);

  return (
<div className="max-w-md my-5 h-screen mx-auto bg-gradient-to-r from-red-900 to-black  text-white shadow-md rounded-xl p-6 border border-gray-200 space-y-4">
  <h2 className="text-xl font-semibold text-white underline text-center">User Profile</h2>

  <div className=" space-y-2 ">
    <p><span className="font-semibold">User ID:</span> {userProfile._id}</p>
    <p><span className="font-semibold">Username:</span> {userProfile.username}</p>
    <p><span className="font-semibold">Email:</span> {userProfile.email}</p>
    <p><span className="font-semibold">Phone:</span> {userProfile.phone}</p>
  </div>

  <Link
    to={`/viewApplication/${userProfile._id}`}
    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition"
  >
    View Application
  </Link>
</div>
  )
}

export default Profile
