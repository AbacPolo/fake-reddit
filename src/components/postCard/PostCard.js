import "./PostCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPostActive } from "../../features/navBar/navBarSlice";
import { selectedPosts } from "../../features/navMenu/navMenuSlice";
import { dateCalculator } from "../../data/dateCalculator";
import { TextFormater } from "../selftextFormater/SelftextFormater";
import parse from "html-react-parser";

export function PostCard({ postID }) {
  const postsToPrint = useSelector(selectedPosts);
  const {
    subreddit,
    selftext,
    selftextHTML,
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

  function imageFormater () {
    let srcSetArray = [];
    preview.images[0].resolutions.forEach((object) => {
      srcSetArray.push(`${object.url} ${object.width}w`);
    });
    const srcSet = srcSetArray.toString();
  
    let sizesArray = [];
    preview.images[0].resolutions.forEach((object) => {
      sizesArray.push(` (max-width: ${object.width}px) ${object.width}px`);
    });
    const sizes = sizesArray.toString();
  
    const imageToParse = `<img className="Poste_Image" srcset="${srcSet}" sizes="${sizes}" src="${preview.images[0].source.url}" alt="r/${subreddit} - ${title}"></img>`;

    return imageToParse;
  }

  const handleEnterPost = (id) => {
    dispatch(setPostActive(id));
  };

  const { mm, hh, dd } = dateCalculator(created);

  const avoidLink = url.includes(permalink); //stops post link to print as news links

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
          <p>{getPostTime(mm, hh, dd)}</p>
        </div>

        <h2>{title}</h2>
        {selftext !== "" ? (
          <TextFormater selftextHTML={selftextHTML} preview={"PostCard"} />
        ) : null}
        {preview && !is_video && preview.enabled && (
          <div className="Poste_Image_Container">
            {/* <img className="Poste_Image" src={url} alt="placeholder"></img> */}
            {parse(imageFormater())}
          </div>
        )}
        {preview && !is_video && !preview.enabled && !avoidLink && (
          <div className="NewsLink_Container">
            <object>
              <a className="LinkContainer" href={url}>
                {url}
              </a>
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

export function getPostTime(mm, hh, dd) {
  if (mm < 60) {
    return `${mm}m`;
  } else if (hh < 24) {
    return `${hh}h`;
  } else {
    return `${dd}d`;
  }
}
