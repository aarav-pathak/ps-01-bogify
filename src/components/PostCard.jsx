import { Link } from 'react-router'

function PostCard({ p }) {
  const snip = p.body.length > 80 ? p.body.slice(0, 80) + '...' : p.body

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
      <h3>{p.title}</h3>
      <p>{snip}</p>
      <Link to={`/posts/${p.id}`}>View Details</Link>
      {" | "}
      <Link to={`/users/${p.userId}`}>Author #{p.userId}</Link>
    </div>
  )
}

export default PostCard
