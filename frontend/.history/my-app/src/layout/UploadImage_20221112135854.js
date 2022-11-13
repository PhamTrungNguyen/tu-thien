import React from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { getImageURL } from "../redux/reduxSlice";

const UploadImage = () => {
	const [images, setImages] = React.useState([]);
	// console.log("🚀 ~ file: UploadImage.js ~ line 8 ~ UploadImage ~ images", images)
	const dispatch = useDispatch()

	const maxNumber = 69;
	const onChange = (imageList, addUpdateIndex) => {
		// console.log("🚀 ~ file: UploadImage.js ~ line 12 ~ onChange ~ imageList", imageList)
		// data for submit
		// console.log(imageList, addUpdateIndex);
		setImages(imageList);
		dispatch(getImageURL(imageList[0]?.data_url))
	};

	return (
		<div>
			<div>
				<ImageUploading
					multiple
					value={images}
					onChange={onChange}
					maxNumber={maxNumber}
					dataURLKey="data_url"
				>
					{({
						imageList,
						onImageUpload,
						onImageRemoveAll,
						onImageUpdate,
						onImageRemove,
						isDragging,
						dragProps,
					}) => (
						// write your building UI
						<div className="upload__image-wrapper ">
							{imageList.map((image, index) => {

								return (
									<div key={index} className="image-item">
										<img
											src={image["data_url"]}
											alt=""
											width="100"
											className="w-full relative"
										/>

										<div className="image-item__btn-wrapper mt-[10px]">
											<div className="flex gap-x-[20px]">
												<div
													className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px] w-[100px]"
													onClick={() => onImageUpdate(index)}
												>
													Cập nhập
												</div>
												<div
													className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px] w-[100px]"
													onClick={() => onImageRemove(index)}
												>
													Xóa
												</div>
											</div>
										</div>
									</div>
								)
							}
							)}
							{images.length !== 1 &&
								<div className="flex gap-x-[20px] pt-[30px] items-center justify-center">
									<div
										style={isDragging ? { color: "red" } : undefined}
										onClick={onImageUpload}
										{...dragProps}
										className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#e22d28]  text-white hover:bg-white hover:text-[#e22d28] hover:border-[#e22d28] duration-300 text-[15px] text-center rounded-[10px]"
									>
										Tải hình ảnh lên
									</div>

								</div>
							}
						</div>
					)}
				</ImageUploading>
			</div>
		</div>
	);
};

export default UploadImage;
