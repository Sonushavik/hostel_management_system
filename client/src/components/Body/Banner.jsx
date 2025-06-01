import React from "react";
import { ReactTyped } from "react-typed";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useAuth } from "../../store/auth";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const {isLoggedIn} = useAuth();
	return (
		<div className="max-w-[1240px] mx-auto bg-red-900 w-full  py-[15px] ">
			<div className="max-w-[1240px] mx-auto my-[20px] text-center text-white ">
				<div className="text-white text-2xl md:text-[50px] my-6 font-bold ">
					<ReactTyped
						className="pl-2" // for padding between animated string and book
						strings={["Welcome to JKT Boys Hostel"]}
						typeSpeed={140}
						loop={true}
						backSpeed={50}
						// attr="placeholder"
					></ReactTyped>
				</div>

				<div className="py-2 font-medium sm:font-light">
					<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
						Bihar Government’s Free Hostel for Students
					</h2>
					<h5 className="text-[8px] sm:text-[12px] md:text-[15px]">
						Location : sikandarpur marine drive road Muzaffarpur, Bihar 842001{" "}
					</h5>

					<div className="flex justify-center items-center py-2 text-sm text-black ">
						<IoIosCall className="mr-1 text-xl" /> {/* Phone icon */}
						<p className="mr-2">1234567891 </p>
						<MdEmail className="mr-1 text-xl" /> {/* Email icon */}
						<p>
							<a
								href="mailto:example@example.com"
								className="text-blue-600 underline"
							>
								example@example.com
							</a>
						</p>
					</div>
				</div>

				<button className="w-[30%] bg-black text-white p-3 font-bold rounded">
          {isLoggedIn ? <NavLink to="/applicationForm">Application Form</NavLink> : <NavLink to="/login">Apply for Hostel</NavLink>}
				</button>
			</div>
		</div>
	);
};

export default Banner;
