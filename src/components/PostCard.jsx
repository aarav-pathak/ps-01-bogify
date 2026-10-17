import { Link } from 'react-router-dom'

function PostCard({ p }) {
  const snip = p.body.length > 80 ? p.body.slice(0, 80) + '...' : p.body

  return (
    <div className="card">
      <h3>{p.title}</h3>
      <p>{snip}</p>
      <div className="foot">
        <Link to={`/posts/${p.id}`} className="link">Read more</Link>
        <Link to={`/users/${p.userId}`} className="sub">User #{p.userId}</Link>
      </div>
    </div>
  )
}

export default PostCard
