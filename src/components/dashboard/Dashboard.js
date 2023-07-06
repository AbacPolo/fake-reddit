import "./Dashboard.css";
import { PostCard } from "../postCard/PostCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  loadPopularPosts,
  selectedPosts,
  initialLoad,
} from "../../features/navMenu/navMenuSlice";

export function Dashboard() {
  const dispatch = useDispatch();
  const isLoadingPosts = useSelector(isLoading);
  const postsToPrint = useSelector(selectedPosts);
  const initialLoadDone = useSelector(initialLoad);

  useEffect(() => {
    if (initialLoadDone === false) {
      dispatch(loadPopularPosts());
    }
  }, [initialLoadDone, dispatch]);

  if (isLoadingPosts) {
    return (
      <div className="Dashboard_Container">
        <div className="LoaderContainer_Wrapper">
          <div className="LoaderContainer"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="Dashboard_Container">
      <div className="Dashboard_Wrapper">
        {Object.keys(postsToPrint).map((postID, index) => (
          <PostCard key={index} postID={postID} />
        ))}
      </div>
    </div>
  );
}
