import React, { useState, useEffect } from "react";

import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";

import app from "../../firebase";

const EditProfile = ({ setOpen }) => {
	const [img, setImg] = useState(null);
	const [imgUploadProgress, setImgUploadProgress] = useState();

	const uploadImg = (file) => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		// Listen for state changes, errors, and completion of the upload.
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setImgUploadProgress(Math.round(progress));
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
					default:
						break;
				}
			},
			(error) => {},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log("File available at", downloadURL);
				});
			},
		);
	};

    useEffect(() => {
        img && uploadImg(img);
    }, [img]);
	return (
		<div className="absolute w-full h-full top-0 left-0 bg-transparent flex items-center justify-center">
			<div className="w-[600px] h-[600px] bg-slate-200 rounded-lg p-8 flex flex-col gap-4 relative">
				<button
					onClick={() => setOpen(false)}
					className="absolute top-3 right-3 cursor-pointer"
				>
					x
				</button>
				<h2 className="font-bold text-xl">Edit Profile</h2>
				<p>Choose a new profile picture</p>
				{imgUploadProgress > 0 ? (
					"Uploading..." + imgUploadProgress + "%"
				) : (
					<input
						type="file"
						className="bg-transparent border border-slate-500 rounded p-2"
						accept="image/*"
						onChange={(e) => setImg(e.target.files[0])}
					/>
				)}

				<p>Delete Acount</p>
				<button className="bg-red-500 text-white py-2 rounded-full">
					Delete account
				</button>
			</div>
		</div>
	);
};

export default EditProfile;
