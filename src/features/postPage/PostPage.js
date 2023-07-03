import "./PostPage.css";
import { useOutletContext, useLocation } from "react-router-dom";

export function PostPage() {
  const [arrayOfPosts] = useOutletContext();
  let { state } = useLocation();
  const { subreddit, title, imageLink, upvotes, comments } = arrayOfPosts[state - 1];
  
  return (
    <div className="PostPage_Container">
      <div className="PostPage_Wrapper">
        <p>r/{subreddit}</p>
        <h3>{title}</h3>
        <div className="Poste_Image_Container">
          <img className="Poste_Image" src={imageLink} alt="placeholder"></img>
        </div>
        <div className="Info_Container">
          <h4>Comments</h4>
        </div>
      </div>
    </div>
  );
}
