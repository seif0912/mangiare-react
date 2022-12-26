import './App.css';
import {Header, Footer} from './sections/Index'
import {Home, AboutUs1, AboutUs2, AboutUs3, ChefPage, Services1, Services2} from './pages/Index'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us-1' element={<AboutUs1/>}/>
            <Route path='/about-us-2' element={<AboutUs2/>}/>
            <Route path='/about-us-3' element={<AboutUs3/>}/>
            <Route path='/chef' element={<ChefPage/>}/>
            <Route path='/services-style-1' element={<Services1/>}/>
            <Route path='/services-style-2' element={<Services2/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;