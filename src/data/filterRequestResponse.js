export const filterRequestResponse = (json) => {
  let objectOfPosts = {};
  json.data.children.forEach((post) => {
    let postObject = {
        subreddit: post.data.subreddit,
        selftext: post.data.selftext,
        title: post.data.title,
        ups: post.data.ups,
        thumbnail: post.data.thumbnail,
        created: post.data.created,
        preview: post.data.preview,
        id: post.data.id,
        author: post.data.author,
        num_comments: post.data.num_comments,
        permalink: post.data.permalink,
        url: post.data.url,
        media: post.data.media,
    }
    objectOfPosts = {...objectOfPosts, [post.data.id]: postObject};
  });
  console.log("objectOfPosts", objectOfPosts);
  return objectOfPosts;
};
