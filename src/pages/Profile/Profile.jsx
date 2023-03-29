import React, { useState, useEffect } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
	const { currentUser } = useSelector((state) => state.user);
	const [userTweets, setUserTweets] = useState(null);
	const [userProfile, setUserProfile] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userTweets = await axios.get(`/tweets/user/all/${id}`);
				const userProfile = await axios.get(`/users/find/${id}`);

				setUserTweets(userTweets);
				setUserProfile(userProfile);
			} catch (err) {
				console.log("error", err);
			}
		};
		fetchData();
	}, [currentUser, id]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-4">
			<div className="px-6">
				<LeftSidebar />
			</div>
			<div className="col-span-2 border-x-2 border-t-slate-800 px-6" />
			{/* <img src="" alt="" /> */}
			{currentUser._id === id ? (
				<button className="px-4 -y-2 bg-blue-500 rounded-full text-white">
					Edit Profile
				</button>
			) : currentUser.following.includes(id) ? (
				<button className="px-4 -y-2 bg-blue-500 rounded-full text-white">
					Following
				</button>
			) : (
				<button className="px-4 -y-2 bg-blue-500 rounded-full text-white">
					Follow
				</button>
			)}

			<div className="px-6">
				<RightSidebar />
			</div>
		</div>
	);
};

export default Profile;
