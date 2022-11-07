import './App.css';
import SignPage from './pages/SignPage';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';


function App() {
  return (

    <Routes>
      {/* <Route path="/signpage" element={<SignPage></SignPage>}></Route> */}
      <Route path="/" element={<SignPage></SignPage>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/:Id" element={<DetailPage></DetailPage>}></Route>

    </Routes>

  );
}

export default App;
