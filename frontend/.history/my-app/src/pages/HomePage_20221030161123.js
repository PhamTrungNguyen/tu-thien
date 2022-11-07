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
				<div className="pb-[50px] text-[#f0f0f0]">
					<div className="w-full h-[250px] bg-[#0f1e31]">
						<div className="px-[30px] pt-[30px]">
							<h2 className="pb-[5px]  font-semibold text-[20px] uppercase border-b-[1px]">ĐẾN HÔM NAY chúng ta ĐÃ LÀM ĐƯỢC :</h2>
						</div>
						<div className="py-[40px] px-[100px] flex justify-between items-center">
							<div className="flex items-center flex-col">
								<h3 className="text-[40px] text-[#f06626] font-semibold">100</h3>
								<h5 className="text-[30px] font-semibold">Trường hợp</h5>
							</div>
							<div className="flex items-center flex-col">
								<h3 className="text-[40px] text-[#e22d28] font-semibold">95.000.000</h3>
								<h5 className="text-[30px] font-normal">Đồng</h5>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
