function CommentCard({ c }) {
  return (
    <div className="card ccard">
      <p><b>{c.name}</b> ({c.email})</p>
      <p>{c.body}</p>
    </div>
  )
}

export default CommentCard
