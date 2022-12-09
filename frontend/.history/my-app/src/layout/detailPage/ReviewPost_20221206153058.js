import React from 'react';

const ReviewPost = () => {
    return (
        <div>
            <div className="reviews py-[40px]">
                <h3 className="text-[20px] font-semibold ">
                    Kết quả đánh giá thiện nguyện
                </h3>
                <div className="border-[1px] p-[10px] mb-[20px] h-[100px] overflow-auto">

                </div>
                <form onSubmit={handleSubmit(submitReviewForm)} action="">
                    <TextArea
                        placeholder="Nhập đánh giá tại đây."
                        height="70px"
                        padding="10px"
                        name="review"
                        control={control}
                    ></TextArea>
                    <button className="px-[10px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium">
                        Viết đánh giá
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ReviewPost;