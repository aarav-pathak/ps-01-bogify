import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import PostCard from './PostCard'

function UserDetails() {
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

  if (!user) return <p>loading...</p>

  return (
    <div>
      <button onClick={goback}>← Back</button>

      <h1>{user.name}</h1>
      <p><b>Username:</b> @{user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Company:</b> {user.company?.name || 'N/A'}</p>

      <h3>Posts by {user.name} ({posts.length})</h3>
      <div>
        {posts.map(p => (
          <PostCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}

export default UserDetails
