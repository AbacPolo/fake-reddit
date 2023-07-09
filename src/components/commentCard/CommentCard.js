import { useSelector } from "react-redux";
import { dateCalculator } from "../../data/dateCalculator";
import "./CommentCard.css";
import { selectedComments } from "../../features/postPage/postPageSlice";
import { TextFormater } from "../selftextFormater/SelftextFormater";
import commentImage from "../../images/comment_image.png";
import modImage from "../../images/mod_logo.webp";
import classNames from "classnames";
import { getPostTime } from "../postCard/PostCard";

export function CommentCard({ commentID }) {
  const commentsToPrint = useSelector(selectedComments);
  const {
    comment_author,
    comment_body_html,
    comment_created,
    comment_id,
    comment_ups,
    comment_replies,
  } = commentsToPrint[commentID];

  const { mm, dd, hh } = dateCalculator(comment_created);

  return (
    <div className="CommentCard_Wrapper">
      <div className="CommentCard_Header">
        <div className="ProfilePicture_Container">
          {comment_author === "AutoModerator" ? (
            <img src={modImage}></img>
          ) : (
            <img src={commentImage}></img>
          )}
        </div>
        <h4>{comment_author}</h4>
        <p>·</p>
        <p>{getPostTime(mm, hh, dd)}</p>
        <div className="Info_Box Comment_Ups">
          <i className="fa-regular fa-thumbs-up"></i>
          <p>{comment_ups}</p>
        </div>
      </div>
      <div
        className={classNames("CommentText_Container", {
          AutoModComment: comment_author === "AutoModerator",
        })}
      >
        {comment_body_html && (
          <TextFormater selftextHTML={comment_body_html} preview={"PostPage"} />
        )}
      </div>
    </div>
  );
}
