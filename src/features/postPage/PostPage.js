import { useDispatch, useSelector } from "react-redux";
import { activePostId } from "../navBar/navBarSlice";
import "./PostPage.css";
import { dateCalculator } from "../../data/dateCalculator";
import { selectedPosts } from "../navMenu/navMenuSlice";
import {
  loadPostContent,
  selectedComments,
  loadingComments,
  selectedPost,
} from "./postPageSlice";
import { TextFormater } from "../../components/selftextFormater/SelftextFormater";
import { useEffect } from "react";
import { CommentCard } from "../../components/commentCard/CommentCard";
import { getPostTime, imageFormater } from "../../components/postCard/PostCard";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

export function PostPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const postId = useSelector(activePostId);
  const commentsToPrint = useSelector(selectedComments);
  const isLoadingComments = useSelector(loadingComments);
  const postsToPrint = useSelector(selectedPosts);
  const postsToPrintDirect = useSelector(selectedPost);

  const {
    subreddit,
    selftext,
    selftextHTML,
    title,
    ups,
    // thumbnail,
    created,
    preview,
    // id,
    author,
    num_comments,
    permalink,
    url,
    media,
    is_video,
  } = postId ? postsToPrint[postId] : postsToPrintDirect;

  useEffect(() => {
    if (postId !== "" && commentsToPrint !== "" && postsToPrintDirect !== "") {
      dispatch(loadPostContent(permalink));
    }
  }, [postId, dispatch]);

  useEffect(() => {
    if (
      commentsToPrint === "" &&
      postsToPrintDirect === "" &&
      location.pathname !== "/"
    ) {
      dispatch(loadPostContent(location.pathname));
    }
  }, [commentsToPrint, postsToPrintDirect, location, dispatch]);

  const { mm, dd, hh } = dateCalculator(created);

  const avoidLink = permalink ? url.includes(permalink) : false; //stops post link to print as news links

  if (postsToPrintDirect === "" && selftextHTML === undefined) {
    return (
      <div className="Dashboard_Container">
        <div className="LoaderContainer_Wrapper">
          <div className="LoaderContainer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="PostPage_Container">
      <div className="PostPage_Wrapper">
        <div className="PostPage_Header">
          <div className="PostPage_Header_information">
            <h3 className="PostCard_subreddit">r/{subreddit}</h3>
            <p>u/{author}</p>
            <p>·</p>
            <p>{getPostTime(mm, hh, dd)}</p>
          </div>
          <div className="Info_Box">
            <i className="fa-solid fa-circle-up"></i>
            <p>{ups}</p>
          </div>
        </div>
        <div className="PostTitle_Container">
          <h2>{title}</h2>
        </div>
        {selftext !== "" ? (
          <TextFormater selftextHTML={selftextHTML} preview={"PostPage"} />
        ) : null}
        {preview && !is_video && preview.enabled && (
          <div className="Poste_Image_Container">
            {/* <img className="Poste_Image" src={url} alt="placeholder"></img> */}
            {parse(imageFormater(preview, title, subreddit))}
          </div>
        )}
        {preview && !is_video && !preview.enabled && !avoidLink && (
          <div className="NewsLink_Container">
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
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
        <div className="CommentsTitle_Container">
          <h3>Comments</h3>
          <div className="Info_Box">
            <i className="fa-solid fa-comments"></i> <p>{num_comments}</p>
          </div>
        </div>
        <div className="CommentCards_Container">
          {isLoadingComments === true ? (
            <div className="LoaderContainer_Wrapper">
              <div className="LoaderContainer"></div>
            </div>
          ) : (
            Object.keys(commentsToPrint).map((commentID, index) => (
              <CommentCard key={index} commentID={commentID} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
