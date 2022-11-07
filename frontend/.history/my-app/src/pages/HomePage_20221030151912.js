import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
import ProjectList from "../layout/homePage/ProjectList";

// import "../js/sidebarMenuJS";
const HomePage = () => {
	return (
		<div className="flex">
			<SidebarMenu></SidebarMenu>
			<main>
				<MainImage></MainImage>
				<ProjectImportant></ProjectImportant>
				<BarItem></BarItem>
				<ProjectList></ProjectList>
				<div className="loadMore pb-[50px]">
					<div className="py-[10px] bg-[#f0f0f0]">Xem thêm</div>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
