import { useSelector } from "react-redux";
import { activePostId } from "../../features/navBar/navBarSlice";
import "./PostPage.css";
// import { CommentCard } from "../commentCard/CommentCard";
import { dateCalculator } from "../../data/dateCalculator";
import { selectedPosts } from "../../features/navMenu/navMenuSlice";

export function PostPage() {
  const postId = useSelector(activePostId);
  const postsToPrint = useSelector(selectedPosts);
  const {
    subreddit,
    selftext,
    title,
    ups,
    // thumbnail,
    created,
    preview,
    // id,
    author,
    num_comments,
    // permalink,
    url,
    media,
  } = postsToPrint[postId];

  const { mm, dd, hh } = dateCalculator(created);

  return (
    <div className="PostPage_Container">
      <div className="PostPage_Wrapper">
        <div className="PostPage_Header">
          <div className="PostPage_Header_information">
            <h3 className="PostCard_subreddit">r/{subreddit}</h3>
            <p>u/{author}</p>
            <p>·</p>
            <p>
              {mm < 60 ? mm : hh < 24 ? hh : dd}
              {mm < 60 ? "m" : hh < 24 ? "h" : "d"}
            </p>
          </div>
          <div className="Info_Box">
            <i className="fa-solid fa-circle-up"></i> {ups}
          </div>
        </div>
        <div className="PostTitle_Container">
          <h2>{title}</h2>
        </div>
        {selftext !== "" ? <h4 className="Selftext">{selftext}</h4> : null}
        {preview && !media && preview.enabled && (
          <div className="Poste_Image_Container">
            <img className="Poste_Image" src={url} alt="placeholder"></img>
          </div>
        )}
        {preview && !media && !preview.enabled && (
          <div className="NewsLink_Container">
            <a href={url}>{url}</a>
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
        <div className="CommentsTitle_Container">
          <h3>Comments</h3>
          <div className="Info_Box">
            <i className="fa-solid fa-comments"></i> {num_comments}
          </div>
        </div>
        <div className="CommentCards_Container">
          {/* {comments.map((comment, index) => (
            <CommentCard key={index} information={comment} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
