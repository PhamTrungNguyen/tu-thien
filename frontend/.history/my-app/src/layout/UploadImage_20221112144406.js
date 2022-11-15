// import React from "react";
// import ImageUploading from "react-images-uploading";
// import { useDispatch } from "react-redux";
// import { getImageURL } from "../redux/reduxSlice";

// const UploadImage = () => {
// 	const [images, setImages] = React.useState([]);
// 	// console.log("🚀 ~ file: UploadImage.js ~ line 8 ~ UploadImage ~ images", images)
// 	const dispatch = useDispatch()

// 	const maxNumber = 69;
// 	const onChange = (imageList, addUpdateIndex) => {
// 		// console.log("🚀 ~ file: UploadImage.js ~ line 12 ~ onChange ~ imageList", imageList)
// 		// data for submit
// 		// console.log(imageList, addUpdateIndex);
// 		setImages(imageList);
// 		dispatch(getImageURL(imageList[0]?.data_url))
// 	};

// 	return (
// 		<div>
// 			<div>
// 				<ImageUploading
// 					multiple
// 					value={images}
// 					onChange={onChange}
// 					maxNumber={maxNumber}
// 					dataURLKey="data_url"
// 				>
// 					{({
// 						imageList,
// 						onImageUpload,
// 						onImageRemoveAll,
// 						onImageUpdate,
// 						onImageRemove,
// 						isDragging,
// 						dragProps,
// 					}) => (
// 						// write your building UI
// 						<div className="upload__image-wrapper ">
// 							{imageList.map((image, index) => {

// 								return (
// 									<div key={index} className="image-item">
// 										<img
// 											src={image["data_url"]}
// 											alt=""
// 											width="100"
// 											className="w-full relative"
// 										/>

// 										<div className="image-item__btn-wrapper mt-[10px]">
// 											<div className="flex gap-x-[20px]">
// 												<div
// 													className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px] w-[100px]"
// 													onClick={() => onImageUpdate(index)}
// 												>
// 													Cập nhập
// 												</div>
// 												<div
// 													className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px] w-[100px]"
// 													onClick={() => onImageRemove(index)}
// 												>
// 													Xóa
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								)
// 							}
// 							)}
// 							{images.length !== 1 &&
// 								<div className="flex gap-x-[20px] pt-[30px] items-center justify-center">
// 									<div
// 										style={isDragging ? { color: "red" } : undefined}
// 										onClick={onImageUpload}
// 										{...dragProps}
// 										className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px]"
// 									>
// 										Tải hình ảnh lên
// 									</div>

// 								</div>
// 							}
// 						</div>
// 					)}
// 				</ImageUploading>
// 			</div>
// 		</div>
// 	);
// };

// export default UploadImage;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getImageURL } from "../redux/reduxSlice";
const UploadImage = () => {
	const dispatch = useDispatch()
	const [URL, setURL] = useState()
	const uploadProfileImg = async (formData) => {
		try {
			const res = await fetch("https://api.cloudinary.com/v1_1/tuanpham/image/upload", {
				method: "POST",
				body: formData
			});
			const file = await res.json();
			const { url } = file;
			return url;
			// const response = await axios.post(API_URL_POST + "/uploadProfileImg", { url }, {
			// 	headers: AuthService.authHeader()
			// });
			// const { data } = response;
			// return data.profileImage
		} catch (err) {
			console.log(err)
		}
	};
	const upLoadImage = async (e) => {
		const formData = new FormData();
		formData.append("file", e.target.files[0])
		formData.append('upload_preset', 'tuanpham');
		const path = await uploadProfileImg(formData);
		console.log("🚀 ~ file: UploadImage.js ~ line 119 ~ upLoadImage ~ path", path)
		setURL(path)
		dispatch(getImageURL(path))
		// delete user.profileImage;
		// user.profileImage = path;
		// localStorage.setItem("user", JSON.stringify(user));
		// this.props.getProfileImage(path);
		// this.setState({
		// 	profileImage: path
		// })

	}
	return (
		<div>
			{URL &&
				<img src="" alt="" />
			}
			<div div className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px] h-[35px] w-[150px] relative" >

				<input
					onChange={upLoadImage}
					type="file"
					className="w-full h-full absolute z-[-1] overflow-hidden opacity-0"
					id="file"

				/>
				<label htmlFor="file" className="z-10 w-full h-full absolute left-[0px] top-[5px]">Tải hình ảnh lên</label>
			</div>
		</div>
	);
};

export default UploadImage;