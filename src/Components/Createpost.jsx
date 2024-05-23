import { useContext, useRef } from "react";
import { PostList } from "../Store/Postliststore";

const Createpost = () =>{

  const {addpost} = useContext(PostList);


  const useridElement = useRef();
  const post_titleElement = useRef();
  const post_bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handlesubmit = (e) =>{
    e.preventDefault();
    const userid = useridElement.current.value;
    const posttitle = post_titleElement.current.value;
    const postbody = post_bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addpost(userid,posttitle,postbody,reactions,tags);
  }
  
  useridElement.current.value = "";
  post_titleElement.current.value = "";
  post_bodyElement.current.value="";
  reactionsElement.current.value="";
  tagsElement.current.value="";







    return <form className="create-post" onSubmit={handlesubmit}>
    <div className="mb-3">
      <label htmlFor="userid" className="form-label">ENTER YOUR USER-ID HERE :</label>
      <input type="text" ref={useridElement} className="form-control" id="userid" aria-describedby="emailHelp" placeholder="USER-ID"/>
    </div>

    <div className="mb-3">
      <label htmlFor="post_title" className="form-label">POST-TITLE</label>
      <input type="text" ref= {post_titleElement} className="form-control" id="post_title" aria-describedby="emailHelp" placeholder="How are you feeling today..."/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="post_body" className="form-label">POST-CONTENT</label>
      <textarea type="text" ref= {post_bodyElement} className="form-control" id="post_body" aria-describedby="emailHelp" placeholder="Tell us more aboute it"/>
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of reactions</label>
      <input type="text" ref= {reactionsElement} className="form-control" id="reactions" aria-describedby="emailHelp" placeholder="How many people reacted to this post ?"/>
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" aria-describedby="emailHelp" placeholder="please enter tags using space ?"/>
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
  </form>
} 

export default Createpost ;