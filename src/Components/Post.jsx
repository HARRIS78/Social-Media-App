import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/Postliststore";


const Post = ({post}) =>{

  const {deletepost} = useContext(PostList);
    return <div className="card post-card" style={{width: "30rem"}}>
    
    <div className="card-body ">
      <h5 className="card-title">{post.title}</h5>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      onClick={() => deletepost(post.id)}>
      <MdDelete />
      </span>
    
      <p className="card-text">{post.body}</p>
      {post.tags.map(tags=>(<span key={tags} className="badge text-bg-primary hashtag">{tags}</span>))}

      <div  className="alert alert-success reactions" role="alert">
  this post has been reacted by {post.reactions} people.
</div>
    </div>
  </div>
}

export default Post; 