import './App.css';
import SignPage from './pages/SignPage';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Manage from './pages/Manage';
import SidebarMenu from './layout/homePage/SidebarMenu';


function App() {
  return (

    <Routes >
      {/* <Route path="/signpage" element={<SignPage></SignPage>}></Route> */}
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/quan-ly" element={<Manage></Manage>}></Route>
      <Route path="/signpage" element={<SignPage></SignPage>}></Route>
      <Route path="/:Id" element={<DetailPage></DetailPage>}></Route>

    </Routes>

  );
}

export default App;
