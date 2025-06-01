import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplicationForm = () => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const [formData, setFormData] = useState({
		name: "",
		fatherName: "",
		dob: "",
		gender: "",
		aadharNumber: "",
		mobileNumber: "",
		email: "",
		address: "",
		college: "",
		course: "",
		session: "",
		currentAcademicSession: "",
		religion: "",
		category: "",
		caste: "",
		isAlloted: false,
	});


	useEffect(() => {
		if (user) {
			setFormData((prev) => ({
				...prev,
				mobileNumber: String(user.phone || ""),
				email: user.email || "",
			}));
		}
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		try {
			const response = await axios.post(
				"http://localhost:8080/api/form/applicationForm",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);

			console.log(response);
			if (response.status === 201) {
				// alert("Application submitted successfully");
				toast.success("Application submitted successfully");
				setFormData({
					name: "",
					fatherName: "",
					dob: "",
					gender: "",
					aadharNumber: "",
					mobileNumber: "",
					email: "",
					address: "",
					college: "",
					course: "",
					session: "",
					currentAcademicSession: "",
					cast: "",
					religion: "",
					category: "",
				});

				navigate(`/profile/${user._id}`);
			}
		} catch (error) {
			console.error(
				"Form submission error:",
				error.response?.data || error.extraDetails || error.message
			);
			// alert(
			// 	error.response?.data?.extraDetails || error.message ||
			// 		"Something went wrong. Try again later."
			// );
			toast.error(
				error.response?.data?.extraDetails ||
					error.message ||
					"Something went wrong. Try again later."
			);
		}
	};

	return (
		<div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
			<ToastContainer
				position="top-right"
				autoClose={3000}
				closeOnClick
				pauseOnHover
				theme="colored"
			/>
			<h2 className="text-2xl font-bold mb-6 text-center text-red-700">
				JKT Boys Hostel Application Form
			</h2>
			<h3 text-3xl font-bold text-center text-blue-800>
				hello : {user.username}
			</h3>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					name="name"
					placeholder="Full Name"
					value={formData.name}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="text"
					name="fatherName"
					placeholder="Father's Name"
					value={formData.fatherName}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="date"
					name="dob"
					value={formData.dob}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<select
					name="gender"
					value={formData.gender}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				>
					<option value="">Select Gender</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Other">Other</option>
				</select>
				<input
					type="text"
					name="aadharNumber"
					placeholder="Aadhar Number"
					value={formData.aadharNumber}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="text"
					name="mobileNumber"
					placeholder="Mobile Number"
					value={formData.mobileNumber}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
					disabled
				/>
				<input
					type="email"
					name="email"
					placeholder="Email (optional)"
					value={formData.email}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					disabled
				/>
				<textarea
					name="address"
					placeholder="Address"
					value={formData.address}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="text"
					name="college"
					placeholder="College Name"
					value={formData.college}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="text"
					name="course"
					placeholder="Course"
					value={formData.course}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="text"
					name="session"
					placeholder="Session (e.g. 2023-2026)"
					value={formData.session}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<input
					type="text"
					name="currentAcademicSession"
					placeholder="Current Academic Session (e.g. 2nd Year)"
					value={formData.currentAcademicSession}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<select
					name="religion"
					value={formData.religion}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				>
					<option value="">Select Religion</option>
					<option value="Hindu">Hindu</option>
					<option value="Muslim">Muslim</option>
					<option value="Christian">Christian</option>
					<option value="Sikh">Sikh</option>
					<option value="Buddhist">Buddhist</option>
					<option value="Jain">Jain</option>
					<option value="Other">Other</option>
				</select>
				<select
					name="category"
					value={formData.category}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				>
					<option value="">Select Category</option>
					<option value="General">General</option>
					<option value="OBC">OBC</option>
					<option value="SC">SC</option>
					<option value="ST">ST</option>
					<option value="EWS">EWS</option>
					<option value="Other">Other</option>
				</select>
				<input
					type="text"
					name="caste"
					placeholder="Caste"
					value={formData.caste}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					required
				/>
				<button
					type="submit"
					className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-900"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ApplicationForm;
