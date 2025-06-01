import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import axios from "axios";
import generatePDF, { Resolution, Margin } from 'react-to-pdf';


const ViewApplication = () => {
	const { token,API } = useAuth();
	const { userId } = useParams();
	const [applicationData, setApplicationData] = useState(null);
	const [error, setError] = useState(null);
        const navigate = useNavigate();

	const URL = `${API}/api/form/fetchApplicationData/${userId}`

        const options = {
                 method: 'open',
                 page:{
                        margin: Margin.LARGE,
                        format: 'letter',
                 },
                 overrides: {
                        pdf: {
                                compress: true
                        },
                        canvas: {
                         useCORS: true
                        }
                 }, 
        }

        const getTargetElement = () => document.getElementById('content-id');


	const getApplicationData = async () => {
		try {
			const response = await axios.get(URL,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			console.log(response.data);
			setApplicationData(response.data);
			console.log("application data", applicationData);
		} catch (error) {
			console.log("application data is not available", error);
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				setError(error.response.data.message); 
			} else {
				setError("Something went wrong.");
			}
		}
	};

	useEffect(() => {
		getApplicationData();
	}, [userId, token]);

        if(error) {
                return (
                        <div className="text-red-500 text-center mt-10 h-screen">
                                <div>{error}</div>
                                <br />
                                <button onClick={() =>navigate(-1)} className="bg-red-600 text-white p-2 rounded-md font-bold m-5 hover:bg-red-800">Go Back</button>
                        </div>
                )
        }

	if (!applicationData) {
		return (
			<div className="text-black text-center m-10 h-screen">
				Loading application data...
			</div>
		);
	}


	return (

                <div>
                        <div  id="content-id" className="max-w-3xl mx-auto my-5 bg-gradient-to-r from-red-900 to-black text-white rounded-2xl shadow-xl border border-gray-800 p-6 transition duration-300">
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-4">
					<div>
						<h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
							{applicationData.name}
						</h2>
						<p className="text-xs text-gray-500 dark:text-gray-400">
							Application ID:{" "}
							<span className="font-medium">{applicationData._id}</span>
						</p>
					</div>
				</div>
                                <button onClick={() => generatePDF(getTargetElement, options)} className="px-4  py-1.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-800 rounded-lg shadow">
					Download PDF
			        </button>
			</div>
			<hr />
			<br />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-sm text-gray-700 dark:text-gray-300">
				<p>
					<span className="font-semibold">Course:</span> {applicationData.course}
				</p>
				<p>
					<span className="font-semibold">College:</span> {applicationData.college}
				</p>
				<p>
					<span className="font-semibold">Academic Session:</span>{" "}
					{applicationData.session}
				</p>
				<p>
					<span className="font-semibold">Current Academic Session:</span>{" "}
					{applicationData.currentAcademicSession}
				</p>
				<p>
					<span className="font-semibold">Gender:</span> {applicationData.gender}
				</p>
				<p>
					<span className="font-semibold">Date of Birth:</span>{" "}
					{new Date(applicationData.dob).toLocaleDateString()}
				</p>
				<p>
					<span className="font-semibold">Father's Name:</span>{" "}
					{applicationData.fatherName}
				</p>
				<p>
					<span className="font-semibold">Mobile:</span>{" "}
					{applicationData.mobileNumber}
				</p>
				<p>
					<span className="font-semibold">Email:</span> {applicationData.email}
				</p>
				<p>
					<span className="font-semibold">Religion:</span>{" "}
					{applicationData.religion}
				</p>
				<p>
					<span className="font-semibold">Category:</span>{" "}
					{applicationData.category}
				</p>
				<p>
					<span className="font-semibold">Caste:</span> {applicationData.caste}
				</p>
				<p className="md:col-span-2">
					<span className="font-semibold">{applicationData.address}</span>
				</p>
				<p className="md:col-span-2">
					<span className="font-semibold">Hostel Allotment Status:</span>
					{applicationData.isAlloted ? (
						<span className="inline-block ml-2 px-2 py-0.5 rounded-full bg-red-100 dark:bg-green-800 text-green-600 dark:text-red-200 font-medium text-xs">
							Allotted
						</span>
					) : (
						<span className="inline-block ml-2 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-200 font-medium text-xs">
							Not Allotted
						</span>
					)}
				</p>
			</div>
		</div>
                </div>

		
	);
};

export default ViewApplication;
