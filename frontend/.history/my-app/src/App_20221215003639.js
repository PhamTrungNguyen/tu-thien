import './App.css';
import SignPage from './pages/SignPage';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Manage from './pages/Manage';
import DashboardLayout from './pages/DashboardLayout';
import AddPost from './layout/manage/AddPost';
import UpdateUser from './layout/updateUser/UpdateUser';
import UpdatePost from './layout/manage/UpdatePost';


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
        <Route path="/quan-ly/sua/" element={<UpdatePost></UpdatePost>}></Route>
        <Route path="/update-user" element={<UpdateUser></UpdateUser>}></Route>
      </Route>

    </Routes>

  );
}

export default App;
