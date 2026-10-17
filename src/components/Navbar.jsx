import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">Blogify</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  )
}

export default Navbar
