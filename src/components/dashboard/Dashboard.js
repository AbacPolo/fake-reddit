import "./Dashboard.css";
import { PostCard } from "../postCard/PostCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  loadPopularPosts,
  selectedPosts,
} from "../../features/navMenu/navMenuSlice";

export function Dashboard() {
  const dispatch = useDispatch();
  const isLoadingPosts = useSelector(isLoading);
  const postsToPrint = useSelector(selectedPosts);

  useEffect(() => {
    dispatch(loadPopularPosts());
  }, [dispatch]);

  if (isLoadingPosts) {
    return (
      <div className="Dashboard_Container">
        <div className="Dashboard_Wrapper"></div>
        <div>loading state</div>;
      </div>
    );
  }

  return (
    <div className="Dashboard_Container">
      <div className="Dashboard_Wrapper">
        {Object.keys(postsToPrint).map((post, index) => (
          <PostCard key={index} information={post} />
        ))}
      </div>
    </div>
  );
}
