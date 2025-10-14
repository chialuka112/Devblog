import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer';
import Index from './Components/pages/index';
import Blog from './Components/pages/blog'
import AboutPage from './Components/pages/About';
import ContactPage from './Components/pages/Contact';
import Createpost from './Components/pages/Createpost';
import BlogPost from './Components/pages/Blogpost';


function App() {
 
    return( 
    <Router >
        <Navbar />
        <div>
     <Routes>
        <Route path='/' element= {<Index />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path='about' element={<AboutPage />}/> 
        <Route path='contact' element={<ContactPage />} />
        <Route path='/createpost' element={<Createpost />} />
        <Route path='/blog/:id' element={<BlogPost />} />
      </Routes>
      <Footer />
        </div>
    </Router>
    ) 
}

export default App
