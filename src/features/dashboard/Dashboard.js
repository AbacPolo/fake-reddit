import "./Dashboard.css";
import { PostCard } from "../postCard/PostCard";
import { useOutletContext } from "react-router-dom";

export function Dashboard() {
  const [arrayOfPosts] = useOutletContext();
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
