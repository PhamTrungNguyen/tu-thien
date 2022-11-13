import React from 'react';
import ActionDelete from '../../components/actions/ActionDelete';
import ActionEdit from '../../components/actions/ActionEdit';
import ActionView from '../../components/actions/ActionView';
import LabelStatus from '../../components/label/LabelStatus';

const ItemPost = ({ props }) => {
    console.log("🚀 ~ file: ItemPost.js ~ line 8 ~ ItemPost ~ props", props)
    const date = props?.createAt?.seconds
        ? new Date(props?.createAt?.seconds * 1000)
        : new Date();
    const formatDate = new Date(date).toLocaleDateString("vi");
    console.log("🚀 ~ file: ItemPost.js ~ line 13 ~ ItemPost ~ formatDate", formatDate)
    return (

        <tr>
            <td>1</td>
            <td>
                <div className="flex items-center gap-x-3">
                    <img
                        src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg"
                        alt=""
                        className="w-[66px] h-[55px] rounded object-cover"
                    />
                    <div className="flex-1">
                        <h3
                            className="title-post text-[12px] font-semibold max-w-[300px] whitespace-normal cursor-pointer"
                            title={props.title}
                        >
                            {props.title}
                        </h3>
                        <time className="text-sm text-gray-500">
                            01/01/2002
                        </time>
                    </div>
                </div>
            </td>
            <td >
                <h3 className="pl-[10px]" >Phạm Trung Nguyên</h3>
            </td>
            <td>
                <LabelStatus type="CanHoTro">Cần hỗ trợ</LabelStatus>
            </td>
            <td>
                <LabelStatus type="Khong">Không</LabelStatus>
            </td>
            <td>
                <div className="flex items-center gap-x-3 text-gray-500">
                    <ActionView ></ActionView>
                    <ActionEdit

                    ></ActionEdit>
                    <ActionDelete

                    ></ActionDelete>
                </div>
            </td>

        </tr>

    );
};

export default ItemPost;