import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import Radio from "../../components/radio/Radio";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import FormDialog from "./FormDialog";
import IconEyeOpen from "../../components/icon/IconEyeOpen";
import IconEyeClose from "../../components/icon/IconEyeClose";
const $ = require("jquery");
const SignUpPage = () => {
	const [icon, setIcon] = useState(false);
	const [icon2, setIcon2] = useState(false);
	const [isFormDialog, setIsFormDialog] = useState(false);
	const ref = useRef(null);
	const [watchRadio, setWatchRadio] = useState(1);
	const [checkClass, setCheckClass] = useState(true);

	const schema = yup
		.object({
			username: yup.string().required("Please enter your username"),
			password: yup
				.string()
				.min(8, "Your password must be at least 8 characters")
				.required("Please enter your password"),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref("password"), null], "Passwords must match")
				.min(8, "Your password must be at least 8 characters"),
		})
		.required();
	const {
		control,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
		defaultValues: {
			username: "",
			password: "",
			confirmPassword: "",
			role_name: 1,
		},
	});
	useEffect(() => {
		if (checkClass) {
			reset({
				username: "",
				password: "",
				confirmPassword: "",
				role_name: 1,
			});
		}
	}, [checkClass]);
	useEffect(() => {
		const classRadio = document.getElementById(2);
		const check = classRadio.checked;
		setIsFormDialog(check);
	}, [watchRadio]);
	/* ----------  hàm thêm account lên database ------------- */
	async function handlePostAccount(url, data) {
		try {

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data)
			});
			const result = await response.json();
			if (result.status === 200) {
				toast.success("Create account successfully", {
					pauseOnHover: false,
					delay: 0,
				});
				return true
			}
			else {
				toast.error(`${result.message}`, {
					pauseOnHover: false,
					delay: 0,
				});
				return false
			}

		} catch (error) {
			toast.error("Register Fail !!!", {
				pauseOnHover: false,
				delay: 0,
			});
		}
	}
	/* ------------ham đăng kí trong quay về form đăng nhập  ---------- */
	function handlerClick() {
		if (!$(this).hasClass("material-button")) {
			$(".shape").css({
				width: "100%",
				height: "100%",
				transform: "rotate(0deg)",
			});

			setTimeout(function () {
				$(".overbox").css({
					overflow: "initial",
				});
			}, 600);

			$(".alt-2").animate(
				{
					width: "100px",
					height: "100px",
				},
				500,
				function () {
					$(".box").removeClass("back");

					$(this).removeClass("active");
				}
			);

			$(".overbox .title").fadeOut(300);
			$(".overbox .input").fadeOut(300);
			$(".overbox .button").fadeOut(300);

			$(".alt-2").addClass("material-buton");
		}
	}

	const onSubmit = (values) => {
		if (isValid) {
			console.log(values);
			const query = document.querySelector(".alt-2");
			const check = handlePostAccount("http://localhost:8080/api/auth/addAccount", values)
			if (check) {
				query.addEventListener("click", handlerClick());
			}


		}
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="overbox"
				autoComplete="off"
			>
				<div className="material-button alt-2 " ref={ref}>
					<span
						className="shape"
						onClick={() => {
							const classHover = document.querySelector(".click-efect");
							if (classHover) {
								classHover.classList.remove("click-efect");
							}
							if (ref?.current?.classList.contains("material-button")) {
								setCheckClass(true);
							} else {
								setCheckClass(false);
							}
						}}
					/>
				</div>
				<div className="title mt-[-40px]">REGISTER</div>
				<div>
					<Input
						className="input mb-[20px]"
						name="username"
						type="text"
						control={control}
					>
						Username
					</Input>
					{!checkClass && errors?.username?.message && (
						<p className="font-semibold text-[16px] absolute z-10 top-[150px] left-[50px] text-red-700 ">
							{errors?.username?.message}
						</p>
					)}
				</div>
				<div>
					<Input
						className="input"
						name="password"
						type={`${!icon ? "password" : "text"}`}
						control={control}
					>
						Password
						{icon ? (
							<IconEyeOpen
								onClick={() => {
									setIcon(!icon);
								}}
								className=" fixed top-[39%] right-[13%] z-42"
								color="black"
							></IconEyeOpen>
						) : (
							<IconEyeClose
								onClick={() => {
									setIcon(!icon);
								}}
								color="black"
								className=" fixed top-[38%] right-[13%] z-42"
							></IconEyeClose>
						)}
					</Input>
					{!checkClass && errors?.password?.message && (
						<p className="font-semibold text-[16px] absolute z-10 top-[230px] left-[50px] text-red-700 ">
							{errors?.password?.message}
						</p>
					)}
				</div>
				<div>
					<Input
						className="input"
						name="confirmPassword"
						type={`${!icon2 ? "password" : "text"}`}
						control={control}
					>
						ConfirmPass
						{icon2 ? (
							<IconEyeOpen
								onClick={() => {
									setIcon2(!icon2);
								}}
								className=" fixed top-[55%] right-[13%] z-42"
								color="black"
							></IconEyeOpen>
						) : (
							<IconEyeClose
								onClick={() => {
									setIcon2(!icon2);
								}}
								color="black"
								className=" fixed top-[54%] right-[13%] z-42"
							></IconEyeClose>
						)}
					</Input>
					{!checkClass && errors?.confirmPassword?.message && (
						<p className="font-semibold text-[16px] absolute z-10 top-[310px] left-[50px] text-red-700 ">
							{errors?.confirmPassword?.message}
						</p>
					)}
				</div>

				<div className="input">
					<div className="flex items-center gap-x-[50px]">
						<Radio
							name="role_name"
							control={control}
							value={1}
							checked={Number(watchRadio) === 1}
							onClick={(e) => {
								setWatchRadio(1);
								setValue("role_name", e.target.value);
							}}
						>
							User
						</Radio>
						<Radio
							name="role_name"
							control={control}
							value={2}
							checked={Number(watchRadio) === 2}
							onClick={(e) => {
								setWatchRadio(2);
								setValue("role_name", e.target.value);
							}}
						>
							Admin
						</Radio>
					</div>
				</div>
				<div className="button">
					<button
						disabled={!isValid}
						type="submit"
						className={`${!isValid && "opacity-20"}`}
					>
						NEXT
					</button>
				</div>
			</form>
			<FormDialog
				open={isFormDialog}
				getRadio={(radio) => {
					setWatchRadio(radio);
					// setRadio(radio)
				}}
			></FormDialog>
		</div>
	);
};

export default SignUpPage;
