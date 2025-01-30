import { useState } from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import Contact from './components/Contact.jsx'
import Topics from './components/Topics.jsx'

function App() {
  return (
    <>
      <h2>React Router Dom Ex</h2>
      <ul>
        {/* <p>{'<Link> 태그 이용 시 브라우저 리로드가 되지 않는다.'}</p>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topic">Topic</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <br></br> */}
        <p>{'<NavLink> 선택한 링크의 클래스가 active가 된다.'}</p>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topic">Topic</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <br></br>
        {/* <p>{'<a> 태그 이용 시 브라우저 리로드가 된다.'}</p>
        <li><a href="/">Home</a></li>
        <li><a href="/topic">Topics</a></li>
        <li><a href="/contact">Contact</a></li> */}
      </ul>

      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/topic/*" element={<Topics/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={'404 Not Found!'}/>
      </Routes>
    </>
  )
}

export default App
