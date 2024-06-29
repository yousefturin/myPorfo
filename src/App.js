
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './components/Home/Home';
import BlogPost from './components/BlogPost/BlogPost';
import FooterSection from './components/footer/footerSection';
import RestView from './components/ResetView/ResetView';
// import { useTheme } from './context/ThemeProvider';


function App() {
  // const { theme, toggleTheme } = useTheme();
  return (
    <div className="App">
      <Router>
        <RestView />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
        <FooterSection />
        {/* <div>
          <p style={{ color: "#ffffff" }}>
            The current theme is {theme}
          </p>
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button> */}
      </Router>
    </div>
  );
}

export default App;
