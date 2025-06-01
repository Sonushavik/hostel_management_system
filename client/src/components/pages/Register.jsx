import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

        const [user, setUser] = useState({
                username: '',
                email: '',
                phone: '',
                password: ''
        }); 

        const navigate = useNavigate();
        const {storeTokenInLS, API} = useAuth()
        const URL = `${API}/api/auth/register`;

        const handleChange = (e) => {
                setUser({
                        ...user,
                        [e.target.name]: e.target.value
                })
        }

        const handleSubmit = async(e) => {
                e.preventDefault();
                try {
                        const response = await fetch(URL, {
                                method: "POST",
                                headers: {
                                        "Content-Type" : "application/json",
                                },
                                body: JSON.stringify(user)
                        });

                        console.log(response)
                        const res_data = await response.json();
                        console.log("Response from server", res_data);

                        if(response.ok){
                                storeTokenInLS(res_data.token)
                                toast.success(res_data.msg || "register successfully!");
                                setUser({username: "", email: "", phone: "", password: ""});
                                // alert(res_data.msg)
                                setTimeout(() => navigate("/"),2000 )
                        }else{
                          // alert("Registration failed:  "+res_data.extraDetails);
                          toast.error("Registration failed:  "+res_data.extraDetails);
                          return;
                        }
                } catch (error) {
                        console.log(error);
                        toast.error("Something went wrong. Please try again.");
                }
        }


  return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
          <ToastContainer 
				  position="top-right"
				  autoClose={3000}
				  closeOnClick
				  pauseOnHover
				  theme="colored"
			/>
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
  
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
  
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all font-medium"
            >
              Register
            </button>
          </form>
        </div>
      </div>
  )
}

export default Register
