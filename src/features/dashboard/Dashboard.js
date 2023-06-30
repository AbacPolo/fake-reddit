import "./Dashboard.css";

const arrayOfPosts = [
  {
    subreddit: "maybe",
    title: "Awesome",
    picture:
      "C:/Users/Frikiabak/Dropbox/Programmatione/Projects/fake-reddit/src/images/test_image.jpg",
    upvotes: 27,
    comments: 13,
  },
  {
    subreddit: "maybe",
    title: "Awesome",
    picture:
      "C:/Users/Frikiabak/Dropbox/Programmatione/Projects/fake-reddit/src/images/test_image.jpg",
    upvotes: 27,
    comments: 13,
  },
  {
    subreddit: "maybe",
    title: "Awesome",
    picture:
      "C:/Users/Frikiabak/Dropbox/Programmatione/Projects/fake-reddit/src/images/test_image.jpg",
    upvotes: 137,
    comments: 57,
  },
];

export function Dashboard() {
  return <div className="Dashboard_Container">
    {arrayOfPosts.map((post) => <PostCard information={post}/>)}
  </div>;
}
