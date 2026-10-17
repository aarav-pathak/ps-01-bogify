import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="box center">
      <h1>Welcome to Blogify</h1>
      <p>simple blog reader to read posts and comments</p>
      <Link to="/posts" className="btn">Read posts</Link>
    </div>
  )
}

export default Home
