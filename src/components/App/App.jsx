import AsideBar from "../AsideBar/AsideBar";
import Main from "../Main/Main";
import {Routes, Route} from "react-router-dom"

import './App.css'

function App() {
  return (
    <div className="App">
      <AsideBar/>
      <Routes>
          <Route path="/HOME"/>
          <Route path="/CHAT/*" element={<Main/>}/>
          <Route path="/CONTACT"/>
          <Route path="/NOTIFICATION"/>
          <Route path="/CALENDAR"/>
          <Route path="/SETTINGS"/>
          <Route path="/avtorization"/>
      </Routes>
    </div>
  );
}

export default App;
