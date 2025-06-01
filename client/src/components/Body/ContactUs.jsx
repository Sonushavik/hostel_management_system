import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhoneAlt,
	FaClock,
} from "react-icons/fa";
import { useAuth, API } from "../../store/auth";

const URL = `${API}/api/contact/form`;

function ContactUs() {
	const [contact, setContact] = useState({
		username: "",
		email: "",
		phone: "",
		message: "",
	});

	const [userData, setUserData] = useState(true);

	const { user } = useAuth();

	useEffect(() => {
		if (user && userData) {
			setContact({
				username: user.username,
				email: user.email,
				phone: "",
				message: "",
			});
			setUserData(false); // prevent it from re-running again
		}
	}, [user, userData]);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(contact);

		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// body: JSON.stringify(contact),
			});
			const res_data = response.json();
			console.log(res_data);
			if (response.ok) {
				alert(res_data.message);
			} else {
				alert(res_data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=" max-w-[1240px] flex flex-col items-center justify-center py-10 bg-red-900 bg-opacity-10 mx-auto ">
			<ToastContainer
				position="top-right"
				autoClose={3000}
				closeOnClick
				pauseOnHover
				theme="colored"
			/>
			<h3 className="text-[20px] md:text-[30px] font-bold mb-8 ">Contact Us</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl  w-full px-6">
				{/* Contact Information Section */}
				<div>
					<div className="flex items-start mb-4">
						<FaMapMarkerAlt className="text-red-900 text-2xl  mr-4" />
						<div>
							<h3 className="text-lg font-semibold">Our Office Address</h3>
							<p className="text-slate-700">Muzaffarpur, Bihar</p>
						</div>
					</div>
					<div className="flex items-start mb-4">
						<FaEnvelope className="text-red-900 text-2xl mr-4" />
						<div>
							<h3 className="text-lg font-semibold">General Enquiries</h3>
							<p className="text-slate-700">abc@gmail.com</p>
						</div>
					</div>
					<div className="flex items-start mb-4">
						<FaPhoneAlt className="text-red-900 text-2xl mr-4" />
						<div>
							<h3 className="text-lg font-semibold">Call Us</h3>
							<p className="text-slate-700">+91-1234567891</p>
						</div>
					</div>
					<div className="flex items-start mb-4">
						<FaClock className="text-red-900 text-2xl mr-4" />
						<div>
							<h3 className="text-lg font-semibold">Our Timing</h3>
							<p className="text-slate-700">Mon - Sun: 10:00 AM - 07:00 PM</p>
						</div>
					</div>
				</div>

				{/* Contact Form Section */}
				<div className="bg-slate-100 p-8 rounded-lg shadow-md">
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<input
								className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
								type="text"
								placeholder="Your Name"
								name="username"
								onChange={handleInput}
								value={contact.username}
							/>
						</div>
						<div className="mb-4">
							<input
								className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
								type="email"
								placeholder="Your Email"
								name="email"
								onChange={handleInput}
								value={contact.email}
							/>
						</div>
						<div className="mb-4">
							<input
								className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
								type="text"
								placeholder="Your Contact No."
								name="phone"
								onChange={handleInput}
								value={contact.phone}
							/>
						</div>
						<div className="mb-4">
							<textarea
								className="w-full p-3 border border-slate-300 rounded focus:outline-none focus:border-red-900"
								placeholder="Your Message"
								rows="4"
								name="message"
								onChange={handleInput}
								value={contact.message}
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-black text-white font-semibold p-3 rounded hover:bg-red-900 transition"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
