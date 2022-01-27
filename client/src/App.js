import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MembersOnly from './pages/MembersOnly';
import ProtectedRoute from './Web3/ProtectedRoute';
import { ContextProvider } from './Context';

function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route exact path ="/" element={<Home />}/>
          <Route element={<ProtectedRoute />}>
          <Route exact path="/MembersOnly" element={<MembersOnly />} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App

