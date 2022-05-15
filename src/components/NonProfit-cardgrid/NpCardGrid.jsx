import "./NpCardGrid.css";

export function NpCardGrid({ data }) {
  return (
    <div className="np-cards-container">
      {data.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}

function Card({ post }) {
  return (
    <div className="np-card">
      <img src={post.img} alt="non profit image" />
      <div className="np-card-content">
        <span>{post.categories[0]}</span>
        <h4>{post.name}</h4>
        <p>{post.aboutText}</p>
      </div>
      <div className="np-card-footer">
        <p>Average donation: {post.averageDonated} nok/mth</p>
      </div>
    </div>
  );
}
