
import './App.css';
import Dashboard from './components/dashboard';
import ExploreNavbar from "./components/navbar/navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/project/project'

import Footer from './components/footer/footer'

function App() {
  return (
    <BrowserRouter>
      <ExploreNavbar/>
      <Routes>
        <Route path="/" element={null}>
          <Route index element={<Dashboard />} />
          <Route path="create-project" element={<Project />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
