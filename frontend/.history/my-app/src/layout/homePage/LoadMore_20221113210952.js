import React from 'react';

const LoadMore = (onClick) => {
    return (
        <button className="loadMore pb-[50px] px-[20px] cursor-pointer w-full" onClick={onClick}>
            <div className="py-[5px] bg-[#f0f0f0] text-center font-semibold">Xem thêm</div>
        </button>
    );
};

export default LoadMore;