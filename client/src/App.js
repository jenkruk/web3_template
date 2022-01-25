import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MembersOnly from './pages/MembersOnly';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/MembersOnly" element={<MembersOnly />} />
        <Route exact path ="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App

