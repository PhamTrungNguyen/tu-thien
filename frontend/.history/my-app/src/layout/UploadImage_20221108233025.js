import React from "react";
import ImageUploading from "react-images-uploading";

const UploadImage = () => {
    const [images, setImages] = React.useState([]);
    console.log(
        "🚀 ~ file: UploadImage.js ~ line 6 ~ UploadImage ~ images",
        images
    );
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        console.log(
            "🚀 ~ file: UploadImage.js ~ line 6 ~ UploadImage ~ images",
            images
        );
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
                        <div className="upload__image-wrapper relative">
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                        className="w-full"
                                    />
                                    <div className="absolute"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg></div>
                                    <div className="image-item__btn-wrapper">
                                        <div className="flex gap-x-[20px]">

                                            <div onClick={() => onImageUpdate(index)}>Update</div>
                                            <div onClick={() => onImageRemove(index)}>Remove</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex gap-x-[20px]">
                                <div
                                    style={isDragging ? { color: "red" } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className="cursor-pointer p-[10px] bg-red-500 text-center rounded-[10px]"
                                >
                                    Tải hình ảnh lên
                                </div>
                                <div
                                    onClick={onImageRemoveAll}
                                    className="cursor-pointer p-[10px] bg-red-500 text-center rounded-[10px]"
                                >
                                    Xóa tất cả hình ảnh
                                </div>
                            </div>
                        </div>
                    )}
                </ImageUploading>
            </div>
        </div>
    );
};

export default UploadImage;
