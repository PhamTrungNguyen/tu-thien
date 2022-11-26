import React from 'react';

const UpdatePost = () => {
    return (
        <div className="">
            <BarItem text="">Thêm bài viết</BarItem>
            <form
                onSubmit={handleSubmit(handleAddPost)}
                autoComplete="off"
                className="px-[30px]"
            >
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Tiêu đề</Label>
                        <InputPost
                            control={control}
                            placeholder="Nhập tiêu đề"
                            name="title"
                        ></InputPost>
                        {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )}
                        <UploadImage></UploadImage>
                        {!getValues("image_url") && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ">
                                Vui lòng chọn hình ảnh
                            </p>
                        )}

                    </Field>
                    <Field>
                        <Label>Nổi bật</Label>
                        <Toggle
                            on={watchHot === true}
                            onClick={() => {
                                setValue("hot", !watchHot);
                            }}
                        ></Toggle>
                        <Label>Nội dung</Label>
                        <TextArea name="desc" control={control}></TextArea>
                        {errors?.desc?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.desc?.message}
                            </p>
                        )}
                    </Field>
                </div>
                <div className="text-center pb-[30px]">
                    <button
                        // disabled={isValid}
                        type="submit"
                        className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#00b6f1]  text-white hover:bg-white hover:text-[#00b6f1] hover:border-[#00b6f1] duration-300 text-[15px] text-center rounded-[10px]  w-[150px]"
                    // onClick={() => this.refresh()}
                    >
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePost;