import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="box center">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" className="btn">Go to Home</Link>
    </div>
  )
}

export default NotFound
