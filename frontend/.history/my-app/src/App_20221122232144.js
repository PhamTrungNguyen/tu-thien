import './App.css';
import SignPage from './pages/SignPage';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Manage from './pages/Manage';
import SidebarMenu from './layout/homePage/SidebarMenu';
import DashboardLayout from './pages/DashboardLayout';
import AddPost from './layout/manage/AddPost';


function App() {
  return (

    <Routes >
      {/* <Route path="/signpage" element={<SignPage></SignPage>}></Route> */}
      <Route path="/signpage" element={<SignPage></SignPage>}></Route>
      <Route element={<DashboardLayout></DashboardLayout>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/:Id" element={<DetailPage></DetailPage>}></Route>
        <Route path="/quan-ly" element={<Manage></Manage>}></Route>
        <Route path="/quan-ly/them" element={<AddPost></AddPost>}></Route>
        <Route path="/quan-ly/them" element={<AddPost></AddPost>}></Route>
      </Route>

    </Routes>

  );
}

export default App;
