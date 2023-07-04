import "./CommentCard.css";

export function CommentCard({ information }) {
  return (
    <div className="CommentCard_Wrapper">
      <div className="CommentCard_Header">
        <div className="ProfilePicture_Container">
          <p>[]</p>
        </div>
        <h4>{information.name}</h4>
        <p>·</p>
        <p>{information.time}</p>
      </div>
      <div className="CommentText_Container">
        <p>{information.content}</p>
      </div>
    </div>
  );
}
