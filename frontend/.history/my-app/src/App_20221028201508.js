import './App.css';
import SignPage from './pages/SignPage';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <div >
      <Routes>
        {/* <Route path="/signpage" element={<SignPage></SignPage>}></Route> */}
        <Route path="/" element={<SignPage></SignPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>

      </Routes>
    </div>
  );
}

export default App;
