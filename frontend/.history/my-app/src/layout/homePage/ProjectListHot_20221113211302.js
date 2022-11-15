import React, { useEffect, useState } from 'react';
import ButtonDonate from '../../components/button/ButtonDonate';
import ButtonStatus from '../../components/button/ButtonStatus';
import { COLORHOMEPAGE } from '../../menuColor';
import ItemSupport from './ItemSupport';
import LoadMore from './LoadMore';

const ProjectListHot = () => {
    const [post, setPost] = useState();
    // console.log("🚀 ~ file: ProjectList.js ~ line 9 ~ ProjectList ~ post", post)

    async function handleGetAllPost(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setPost(result)
    }
    useEffect(() => {
        handleGetAllPost("http://localhost:8080/api/post/getAllPostHot")
    }, [])
    return (

        <div className="itemSupport p-[30px]">
            <div className="grid grid-cols-4 gap-x-[20px]">
                {post?.length > 0 && post.map((item, index) => (
                    <ItemSupport key={item.id} item={item} status={"Đang vận động"} button={"Đóng góp"}></ItemSupport>
                ))
                }
            </div>
            <LoadMore onClick={() => {
                handleGetAllPost(`http://localhost:8080/api/post/getAllPostHot?limi`)
            }}></LoadMore>
        </div>

    );
};

export default ProjectListHot;