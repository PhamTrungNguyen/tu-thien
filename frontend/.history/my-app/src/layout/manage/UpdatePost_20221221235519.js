import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import BarItem from "../../components/bar/BarItem";
import Field from "../../components/field/Field";
import InputPost from "../../components/input/InputPost";
import TextArea from "../../components/input/TextArea";
import Label from "../../components/label/Label";
import Toggle from "../../components/toggle/Toggle";
import UploadImage from "../UploadImage";
const UpdatePost = () => {
	const [post, setPost] = useState();
	const navigate = useNavigate();
	const [params] = useSearchParams();
	const [countParticipantByPostID, setCountParticipantByPostId] = useState("");
	const postId = params.get("id");
	// const accountNow = JSON.parse(localStorage.getItem("userLogin"))
	// const accountIDNow = accountNow?.id
	const schema = yup
		.object({
			title: yup.string().required("Vui lòng nhập vào tiêu đề"),
			desc: yup.string().required("Vui lòng nhập vào nội dung"),
			totalParticipant: yup
				.number()
				.min(
					countParticipantByPostID,
					`Phải nhập lớn hơn hoặc bằng số lượng người đang tham gia: ${countParticipantByPostID} `
				)
				.required("Vui lòng nhập số lượng người tham gia"),
			date: yup
				.number()
				.min(
					0, "Vui lòng nhập số ngày lớn hơn 0"
				)
				.required("Vui lòng  số ngày của dự án"),

		})
		.required();

	const {
		control,
		handleSubmit,
		setValue,
		getValues,
		watch,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
		defaultValues: {
			title: "",
			desc: "",
			hot: false,
			image_url: "",
		},
	});
	console.log("🚀 ~ file: UpdatePost.js:50 ~ UpdatePost ~ errors", errors)

	const watchHot = watch("hot");
	const dataURL = useSelector((count) => count.redux.image_url);
	setValue("image_url", dataURL);
	async function handleGet(url) {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		return result;
	}

	const handleAPIUpdate = async (url, data) => {
		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await response.json();
			toast.success(`${result?.message}`, {
				pauseOnHover: false,
				delay: 0,
				autoClose: 1300,
			});
		} catch (error) {
			toast.error("Cập nhập tài khoản thất bại", {
				pauseOnHover: false,
				delay: 0,
				autoClose: 1300,
			});
		}
	};
	useEffect(() => {
		const getCountParticipant = async () => {
			const kq = await handleGet(
				`http://localhost:8080/api/participant/getCountParticipantByPostId?postId=${postId}`
			);
			setCountParticipantByPostId(kq.participant);
		};
		getCountParticipant();
	}, [postId]);
	useEffect(() => {
		const getPostById = async () => {
			let kq = await handleGet(
				`http://localhost:8080/api/post/getPostById?idPost=${postId}`
			);
			setPost(kq);
			setValue("title", post?.title);
			setValue("desc", post?.desc);
			setValue("image_url", post?.image);
			setValue("hot", post?.hot);
			setValue("totalParticipant", post?.totalParticipant);
			setValue("date", post?.date);
		};
		getPostById();
	}, [
		post?.desc,
		post?.hot,
		post?.image,
		post?.title,
		post?.totalParticipant,
		post?.date,
		postId,
		setValue,
	]);
	const handleUpdate = (values) => {

		console.log(post?.image);
		let newValue = { ...values };
		if (!values?.image_url) {
			newValue.image_url = post?.image;
		}
		// console.log("🚀 ~ file: UpdatePost.js:101 ~ handleUpdate ~ newValue", newValue)
		// console.log("🚀 ~ file: UpdatePost.js:101 ~ handleUpdate ~ newValue", newValue)
		handleAPIUpdate(
			`http://localhost:8080/api/post/UpdatePostByPostId?postId=${postId}`,
			newValue
		);
		setTimeout(() => {
			navigate("/quan-ly");
			// const reloadUsingLocationHash = () => {
			//     window.location.hash = "reload";
			// }
			// window.onload = reloadUsingLocationHash();
			window.location.href = window.location.href;
		}, 1500);

	};
	return (
		<div className="">
			<BarItem text="">Sửa bài viết</BarItem>
			<form
				onSubmit={handleSubmit(handleUpdate)}
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
						<Label>Số lượng người tham gia</Label>
						<InputPost
							control={control}
							placeholder="Nhập số lượng người tham gia"
							name="totalParticipant"
						></InputPost>
						{errors?.totalParticipant?.message && (
							<p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
								{errors?.totalParticipant?.message}
							</p>
						)}

						<UploadImage url={post?.image}></UploadImage>
						{!getValues("image_url") && !post?.image && (
							<p className="mt-[-15px] text-[14px] text-red-500 ">
								Vui lòng chọn hình ảnh
							</p>
						)}


					</Field>
					<Field>
						<Label>Số lượng ngày triển khai dự án</Label>
						<InputPost
							control={control}
							placeholder="Nhập số lượng ngày"
							name="date"
						></InputPost>
						{errors?.date?.message && (
							<p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
								{errors?.date?.message}
							</p>
						)}
						<Label>Nội dung</Label>
						<TextArea name="desc" control={control}></TextArea>
						{errors?.desc?.message && (
							<p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
								{errors?.desc?.message}
							</p>
						)}
						<Label>Nổi bật</Label>
						<Toggle
							on={watchHot === true}
							onClick={() => {
								setValue("hot", !watchHot);
							}}
						></Toggle>

					</Field>
				</div>
				<div className="text-center pb-[30px]">
					<button
						disabled={!isValid}
						type="submit"
						className={`cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#00b6f1]  text-white duration-300 text-[15px] text-center rounded-[10px]  w-[150px] ${isValid ? " hover:bg-white hover:text-[#00b6f1] hover:border-[#00b6f1] " : "opacity-60"
							} `}
					// onClick={() => {

					// }}
					>
						Cập nhập
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdatePost;
