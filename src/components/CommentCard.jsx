function CommentCard({ c }) {
  return (
    <div className="card ccard">
      <div className="row">
        <b>{c.name}</b>
        <span className="sub">({c.email})</span>
      </div>
      <p>{c.body}</p>
    </div>
  )
}

export default CommentCard
