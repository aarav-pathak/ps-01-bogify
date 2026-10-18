import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <h1>Welcome to Blogify</h1>
      <p>simple blog reader to read posts and comments</p>
      <Link to='/posts'>
        <button>Read posts</button>
      </Link>
    </div>
  )
}

export default Home
