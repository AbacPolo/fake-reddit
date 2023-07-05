import "./PostCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPostActive } from "../../features/navBar/navBarSlice";
import { selectedPosts } from "../../features/navMenu/navMenuSlice";

export function PostCard({ information }) {
  const postsToPrint = useSelector(selectedPosts);
  const {
    subreddit,
    selftext,
    title,
    ups,
    thumbnail,
    created,
    preview,
    id,
    author,
    num_comments,
    permalink,
    url,
    media,
  } = postsToPrint[information];
  const dispatch = useDispatch();

  const handleEnterPost = (id) => {
    dispatch(setPostActive(id));
  };

  return (
    <Link className="PostCard_Link" to={`/r/${subreddit}/${title}`} onClick={() => handleEnterPost(id)}>
      <div className="PostCard_Container">
        <p>r/{subreddit}</p>
        <h2>{title}</h2>
        {selftext !== "" ? <h3>{selftext}</h3> : null}
        {preview && !media && preview.enabled && (
          <div className="Poste_Image_Container">
            <img className="Poste_Image" src={url} alt="placeholder"></img>
          </div>
        )}
        {preview && !media && !preview.enabled &&(
          <div className="NewsLink_Container">
            <a>{url}</a>
          </div>
        )}
        {preview && media && (
          <div className="Poste_Image_Container">
            <video
              className="Poste_Image"
              src={media.reddit_video.fallback_url}
              alt="video_placeholder"
              controls
            ></video>
          </div>
        )}
        <div className="Info_Container">
          <div className="Info_Box">
            <i className="fa-solid fa-circle-up"></i> {ups}
          </div>
          <div className="Info_Box">
            <i className="fa-solid fa-comments"></i> {num_comments}
          </div>
        </div>
      </div>
    </Link>
  );
}
