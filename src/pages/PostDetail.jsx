import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import CommentCard from '../components/CommentCard.jsx'

function PostDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const [post, setpost] = useState(null)
  const [comms, setcomms] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setpost(data))

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(data => setcomms(data))
  }, [id])

  const goback = () => {
    nav(-1)
  }

  if (!post) return <div className="msg">loading...</div>

  return (
    <div className="wrap">
      <button onClick={goback} className="back">← Back</button>

      <div className="card">
        <h2>{post.title}</h2>
        <div className="sub">
          <span>Post #{post.id}</span> | <span>Author: <Link to={`/users/${post.userId}`}>User #{post.userId}</Link></span>
        </div>
        <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>{post.body}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Comments ({comms.length})</h3>
        <div className="list">
          {comms.map(c => (
            <CommentCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostDetail
