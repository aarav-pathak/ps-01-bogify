import { useState, useEffect } from 'react'
import PostCard from './PostCard'

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
    <div>
      <h1>Posts</h1>
      <input
        type='text'
        placeholder='search by title...'
        value={txt}
        onChange={sethand}
      />

      <div>
        {list.map(p => (
          <PostCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}

export default Posts
