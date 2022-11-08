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
                        <div className="upload__image-wrapper">
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                        className="w-full"
                                    />
                                    <div className="image-item__btn-wrapper">
                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                            ))}
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
                                Xóa hình ảnh
                            </div>

                        </div>
                    )}
                </ImageUploading>
            </div>
        </div>
    );
};

export default UploadImage;
