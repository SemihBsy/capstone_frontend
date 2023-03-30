import React, { useState, useEffect } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import EditProfile from "../../components/EditProfile/EditProfile";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Tweet from "../../components/Tweet/Tweet";

const Profile = () => {
	const [open, setOpen] = useState(false);
	const { currentUser } = useSelector((state) => state.user);
	const [userTweets, setUserTweets] = useState(null);
	const [userProfile, setUserProfile] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userTweets = await axios.get(`/tweets/user/all/${id}`);
				const userProfile = await axios.get(`/users/find/${id}`);

				setUserTweets(userTweets.data);
				setUserProfile(userProfile.data);
			} catch (err) {
				console.log("error", err);
			}
		};
		fetchData();
	}, [currentUser, id]);

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-4">
				<div className="px-6">
					<LeftSidebar />
				</div>
				<div className="col-span-2 border-x-2 border-t-slate-800 px-6">
					<div className="flex justify-between items-center">
						<img
							src={userProfile?.profilePicture}
							alt="Profile Picture"
							className="w-12 h-12 rounded-full"
						/>
						{currentUser._id === id ? (
							<button
								className="px-4 -y-2 bg-blue-500 rounded-full text-white"
								onClick={() => setOpen(true)}
							>
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
					</div>
					<div className="mt-6">
						{userTweets &&
							userTweets.map((tweet) => {
								return (
									<div className="p-2" key={tweet._id}>
										<Tweet tweet={tweet} setData={setUserTweets} />
									</div>
								);
							})}
					</div>
				</div>

				<div className="px-6">
					<RightSidebar />
				</div>
			</div>
			{open && <EditProfile setOpen={setOpen} />}
		</>
	);
};

export default Profile;
