import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router'
import Home from './components/Home'
import Posts from './components/Posts'
import PostDetails from './components/PostDetails'
import UserDetails from './components/UserDetails'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Home</Link> {"||"}
        <Link to='/posts'>Posts</Link>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostDetails />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
