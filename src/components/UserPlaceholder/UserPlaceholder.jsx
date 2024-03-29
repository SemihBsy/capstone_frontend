import React, { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../../config.js";

import { useLocation, useParams } from "react-router-dom";

const UserPlaceholder = ({ setUserData, userData }) => {
	const { id } = useParams();
	const location = useLocation().pathname;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userProfile = await axios.get(baseURL + `/users/find/${id}`);
				setUserData(userProfile.data);
			} catch (e) {
				console.log(e);
			}
		};
        fetchData();
	}, [id]);

	return <div>{userData?.username}</div>;
};

export default UserPlaceholder;
