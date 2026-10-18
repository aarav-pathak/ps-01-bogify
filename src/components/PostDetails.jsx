import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import CommentCard from './CommentCard'

function PostDetails() {
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

  if (!post) return <p>loading...</p>

  return (
    <div>
      <button onClick={goback}>← Back</button>

      <h1>{post.title}</h1>
      <p>Post ID: {post.id} | Author: <Link to={`/users/${post.userId}`}>User #{post.userId}</Link></p>
      <p>{post.body}</p>

      <h3>Comments ({comms.length})</h3>
      <div>
        {comms.map(c => (
          <CommentCard key={c.id} c={c} />
        ))}
      </div>
    </div>
  )
}

export default PostDetails
