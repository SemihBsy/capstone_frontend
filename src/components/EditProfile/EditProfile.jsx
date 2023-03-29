import React from "react";

const EditProfile = ({ setOpen }) => {
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

                <p>Delete Acount</p>
			<button className="bg-red-500 text-white py-2 rounded-full">
				Delete account
			</button>
			</div>
		</div>
	);
};

export default EditProfile;
