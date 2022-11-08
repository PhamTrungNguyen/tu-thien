import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
import ProjectList from "../layout/homePage/ProjectList";
import LoadMore from "../layout/homePage/LoadMore";
import Banner from "../layout/homePage/Banner";
import { useSelector } from "react-redux";
import UploadImage from "../layout/UploadImage";

// import "../js/sidebarMenuJS";
const HomePage = () => {
	const user = JSON.parse(localStorage.getItem('userLogin'))
	return (

		<div className="flex">
			{/* <SidebarMenu props={user}></SidebarMenu> */}
			<main>

				<MainImage></MainImage>
				<ProjectImportant></ProjectImportant>
				<div className="">
					<BarItem>Nổi bật</BarItem>
					<ProjectList></ProjectList>
					<LoadMore></LoadMore>
				</div>
				<div className="">
					<BarItem></BarItem>
					<ProjectList></ProjectList>
					<LoadMore></LoadMore>
				</div>
				<Banner></Banner>
			</main>
		</div>
	);
};

export default HomePage;
