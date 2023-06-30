import "./Dashboard.css";
import { PostCard } from "../postCard/PostCard";
import imagePlaceholder from "../../images/test_image.jpg";

const arrayOfPosts = [
  {
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 27,
    comments: 13,
  },
  {
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 1352,
    comments: 563,
  },
  {
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 137,
    comments: 57,
  },
];

export function Dashboard() {
  return (
    <div className="Dashboard_Container">
      <div className="Dashboard_Wrapper">
        {arrayOfPosts.map((post, index) => (
          <PostCard key={index} information={post} />
        ))}
      </div>
    </div>
  );
}
