import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard.jsx'

function Posts() {
  const [posts, setposts] = useState([])
  const [txt, settxt] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setposts(data))
  }, [])

  const sethand = (e) => {
    settxt(e.target.value)
  }

  const list = posts.filter(p =>
    p.title.toLowerCase().includes(txt.toLowerCase())
  )

  return (
    <div className="wrap">
      <div className="top">
        <h2>All Posts</h2>
        <input
          type="text"
          placeholder="search by title..."
          value={txt}
          onChange={sethand}
          className="inp"
        />
      </div>

      <div className="grid">
        {list.map(p => (
          <PostCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}

export default Posts
