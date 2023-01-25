import "./Posts.css";
const Posts = () => {
  const posts = [
    { id: 1, title: "Node.js란 무엇인지 설명하세요", useful: 1 },
    { id: 2, title: "Ngnix에 대해 설명하세요", useful: 0 },
    { id: 3, title: "인덱스에 대해 설명하세요", useful: 2 },
    { id: 4, title: "RESTful API에 대해 설명하세요", useful: 5 },
    { id: 1, title: "Node.js란 무엇인지 설명하세요", useful: 1 },
    { id: 2, title: "Ngnix에 대해 설명하세요", useful: 0 },
    { id: 3, title: "인덱스에 대해 설명하세요", useful: 2 },
    { id: 4, title: "RESTful API에 대해 설명하세요", useful: 5 },
    { id: 1, title: "Node.js란 무엇인지 설명하세요", useful: 1 },
    { id: 2, title: "Ngnix에 대해 설명하세요", useful: 0 },
    { id: 3, title: "인덱스에 대해 설명하세요", useful: 2 },
    { id: 4, title: "RESTful API에 대해 설명하세요", useful: 5 },
  ];
  return (
    <div className="Posts-container">
      {posts.map((post) => {
        return (
          <div className="Posts-card">
            <div className="Post-title">{post.title}</div>
            <div className="Post-useful">추천수 {post.useful}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
