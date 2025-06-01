import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { storeTokenInLS, API } = useAuth();

	const URL = `${API}/api/auth/login`;

	const navigate = useNavigate();
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			const res_data = await response.json();
			// console.log(response);
			// console.log("Response from server: ", res_data);
			if (response.ok) {
				storeTokenInLS(res_data.token);
				toast.success(res_data.msg || "Logged in successfully!");
				setUser({ email: "", password: "" });
				// alert(res_data.msg);
				setTimeout(() =>navigate("/"), 3000 )

			} else if (res_data.extraDetails) {
				toast.error(res_data.extraDetails || "please enter correct email and password!!")
				// alert(res_data.extraDetails);
			} else {
				toast.error(res_data.msg || "please enter correct email and password!!")
				// alert(res_data.msg);
			}
		} catch (error) {
			console.log("server error", error);
		}
	};

	// const notify = () => toast(message);

	return (
		<div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">
			<ToastContainer 
				position="top-right"
  				autoClose={3000}
  				closeOnClick
  				pauseOnHover
  				theme="colored"
			 />
			<div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
				<h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
					Login Page
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<input
							type="email"
							name="email"
							required
							placeholder="Enter email"
							value={user.email}
							onChange={handleChange}
							className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
						/>
					</div>

					<div>
						<input
							type="password"
							name="password"
							required
							placeholder="Enter password"
							value={user.password}
							onChange={handleChange}
							className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
						/>
					</div>

					<button
						// onClick={notify}
						type="submit"
						className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all font-medium"
					>
						Submit
					</button>
				</form>

				<p className="text-sm text-center text-gray-600 mt-4">
					Don&apos;t have an account?{" "}
					<Link
						to="/register"
						className="text-red-600 hover:underline font-medium"
					>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
