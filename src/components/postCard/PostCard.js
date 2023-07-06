import "./PostCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPostActive } from "../../features/navBar/navBarSlice";
import { selectedPosts } from "../../features/navMenu/navMenuSlice";
import { dateCalculator } from "../../data/dateCalculator";
import { TextFormater } from "../selftextFormater/SelftextFormater";

export function PostCard({ postID }) {
  const postsToPrint = useSelector(selectedPosts);
  const {
    subreddit,
    selftext,
    title,
    ups,
    // thumbnail,
    created,
    preview,
    id,
    author,
    num_comments,
    permalink,
    url,
    media,
    is_video,
  } = postsToPrint[postID];
  const dispatch = useDispatch();

  const handleEnterPost = (id) => {
    dispatch(setPostActive(id));
  };

  const { mm, dd, hh } = dateCalculator(created);

  const avoidLink = url.includes(permalink);

  const filteredTitle = title.replace(/\//g, "&frasl;"); //avoid problems if title includes '/'
  return (
    <Link
      className="PostCard_Link"
      to={`/r/${subreddit}/${filteredTitle}`}
      onClick={() => handleEnterPost(id)}
    >
      <div className="PostCard_Container">
        <div className="PostCard_Header">
          <h3 className="PostCard_subreddit">r/{subreddit}</h3>
          <p>u/{author}</p>
          <p>·</p>
          <p>
            {mm < 60 ? mm : hh < 24 ? hh : dd}
            {mm < 60 ? "m" : hh < 24 ? "h" : "d"}
          </p>
        </div>

        <h2>{title}</h2>
        {selftext !== "" ? <TextFormater selftext={selftext} preview={'PostCard'} /> : null}
        {preview && !is_video && preview.enabled && (
          <div className="Poste_Image_Container">
            <img className="Poste_Image" src={url} alt="placeholder"></img>
          </div>
        )}
        {preview && !is_video && !preview.enabled && !avoidLink && (
          <div className="NewsLink_Container">
            <object>
              <a className="LinkContainer" href={url}>{url}</a>
            </object>
          </div>
        )}
        {is_video && (
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
