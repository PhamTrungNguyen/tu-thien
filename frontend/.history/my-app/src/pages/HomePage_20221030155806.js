import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
import ProjectList from "../layout/homePage/ProjectList";
import LoadMore from "../layout/homePage/LoadMore";

// import "../js/sidebarMenuJS";
const HomePage = () => {
	return (
		<div className="flex">
			<SidebarMenu></SidebarMenu>
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
				<div className="pb-[50px]">
					<div className="w-full h-[250px] bg-[#0f1e31]">
						<div className="px-[">
							<h2 className="text-white uppercase">ĐẾN HÔM NAY chúng ta ĐÃ LÀM ĐƯỢC :</h2>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
