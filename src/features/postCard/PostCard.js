import "./PostCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPostActive } from "../navBar/navBarSlice";

export function PostCard({ information }) {
  const { id, subreddit, title, imageLink, upvotes, comments } = information;
  const dispatch = useDispatch();

  const handleEnterPost = (id) => {
    dispatch(setPostActive(id));
  }

  return (
    <Link to={`${subreddit}/${title}`} onClick={() => handleEnterPost(id)}>
      <div className="PostCard_Container">
        <p>r/{subreddit}</p>
        <h3>{title}</h3>
        <div className="Poste_Image_Container">
          <img className="Poste_Image" src={imageLink} alt="placeholder"></img>
        </div>
        <div className="Info_Container">
          <div className="Info_Box">
            <i className="fa-solid fa-circle-up"></i> {upvotes}
          </div>
          <div className="Info_Box">
            <i className="fa-solid fa-comments"></i> {comments}
          </div>
        </div>
      </div>
    </Link>
  );
}
