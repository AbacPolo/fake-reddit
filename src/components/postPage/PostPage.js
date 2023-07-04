import { useSelector } from "react-redux";
import { activePostId } from "../../features/navBar/navBarSlice";
import "./PostPage.css";
import { useOutletContext } from "react-router-dom";
import { CommentCard } from "../commentCard/CommentCard";

export function PostPage() {
  const [arrayOfPosts] = useOutletContext();
  const postId = useSelector(activePostId);
  const { subreddit, title, imageLink, upvotes, commentsNumb, comments } =
    arrayOfPosts[postId - 1];

  return (
    <div className="PostPage_Container">
      <div className="PostPage_Wrapper">
        <p>r/{subreddit}</p>
        <div className="PostTitle_Container">
          <h2>{title}</h2>
          <div className="Info_Box">
            <i className="fa-solid fa-circle-up"></i> {upvotes}
          </div>
        </div>
        <div className="Poste_Image_Container">
          <img className="Poste_Image" src={imageLink} alt="placeholder"></img>
        </div>
        <div className="CommentsTitle_Container">
          <h3>Comments</h3>
          <div className="Info_Box">
            <i className="fa-solid fa-comments"></i> {commentsNumb}
          </div>
        </div>
        <div className="CommentCards_Container">
          {comments.map((comment, index) => (
            <CommentCard key={index} information={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
