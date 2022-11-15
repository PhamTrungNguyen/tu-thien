import React from "react";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
import Banner from "../layout/homePage/Banner";
import ProjectListHot from "../layout/homePage/ProjectListHot";
import ProjectListNoHot from "../layout/homePage/ProjectListNoHot";

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
					<ProjectListHot></ProjectListHot>

				</div>
				<div className="">
					<BarItem></BarItem>
					<ProjectListNoHot></ProjectListNoHot>
				</div>
				<Banner></Banner>
			</main>
		</div>
	);
};

export default HomePage;
