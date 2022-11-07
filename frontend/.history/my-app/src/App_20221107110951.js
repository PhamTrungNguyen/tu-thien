import './App.css';
import SignPage from './pages/SignPage';

import { Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';


function App() {
  return (

    <Router >
      {/* <Route path="/signpage" element={<SignPage></SignPage>}></Route> */}
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/signpage" element={<SignPage></SignPage>}></Route>
      <Route path="/:Id" element={<DetailPage></DetailPage>}></Route>

    </Router>

  );
}

export default App;
