import { useSelector } from "react-redux";
import { activePostId } from "../navBar/navBarSlice";
import "./PostPage.css";
import { useOutletContext } from "react-router-dom";

export function PostPage() {
  const [arrayOfPosts] = useOutletContext();
  const postId = useSelector(activePostId);
  const { subreddit, title, imageLink, upvotes, comments } =
    arrayOfPosts[postId - 1];

  return (
    <div className="PostPage_Container">
      <div className="PostPage_Wrapper">
        <p>r/{subreddit}</p>
        <div className="PostTitle_Container">
          <h3>{title}</h3>
          <div className="Info_Box">
            <i className="fa-solid fa-circle-up"></i> {upvotes}
          </div>
        </div>
        <div className="Poste_Image_Container">
          <img className="Poste_Image" src={imageLink} alt="placeholder"></img>
        </div>
        <div className="CommentsTitle_Container">
          <h4>Comments</h4>
          <div className="Info_Box">
            <i className="fa-solid fa-comments"></i> {comments}
          </div>
        </div>
        <div className="CommentCards_Container"></div>
      </div>
    </div>
  );
}
