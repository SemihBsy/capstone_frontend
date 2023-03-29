import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import formatDistance from "date-fns/formatDistance";

const Tweet = ({ tweet, setData }) => {
	const { currentUser } = useSelector((state) => state.user);

	const [userData, setUserData] = useState();
    // Calculating distance from createdAt in database
    const dateStr = formatDistance(new Date(tweet.createdAt), new Date())

	useEffect(() => {
		const fetchData = async () => {
			try {
				// finding the user from the tweet
				const findUser = await axios.get(`/users/find/${tweet.userId}`);

				setUserData(findUser.data);
			} catch (err) {
				console.log("error", err);
			}
		};

		fetchData();
	}, [tweet.userId, tweet.likes]);

	return (
		<div>
            {/* conditional for userData */}
			{userData && (
				<>
					<div className="flex space-x-2">
						{/* <img src="" alt="" /> */}
						<Link to={`/profile/${userData._id}`} >
                            <h3 className="font-bold">{userData.username}</h3>
                        </Link>

                        <span className="font-normal">@{userData.username}</span>
                        <p> - {dateStr}</p>
					</div>
                    
				</>
			)}
		</div>
	);
};

export default Tweet;