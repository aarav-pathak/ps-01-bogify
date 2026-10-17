import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'

function UserDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const [user, setuser] = useState(null)
  const [posts, setposts] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setuser(data))

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(res => res.json())
      .then(data => setposts(data))
  }, [id])

  const goback = () => {
    nav(-1)
  }

  if (!user) return <div className="msg">loading...</div>

  return (
    <div className="wrap">
      <button onClick={goback} className="back">← Back</button>

      <div className="card">
        <h2>{user.name}</h2>
        <p><b>Username:</b> @{user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Company:</b> {user.company?.name || 'N/A'}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Posts by {user.name} ({posts.length})</h3>
        <div className="grid" style={{ marginTop: '1rem' }}>
          {posts.map(p => (
            <PostCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserDetail
