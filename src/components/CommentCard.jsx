function CommentCard({ c }) {
  return (
    <div style={{ border: '1px solid #eee', margin: '5px 0', padding: '8px' }}>
      <p><b>{c.name}</b> ({c.email})</p>
      <p>{c.body}</p>
    </div>
  )
}

export default CommentCard
