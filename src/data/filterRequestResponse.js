export const filterRequestResponse = (json) => {
  let objectOfPosts = {};
  json.data.children.forEach((post) => {
    let postObject = {
        subreddit: post.data.subreddit,
        selftext: post.data.selftext,
        selftextHTML: post.data.selftext_html,
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
        is_video: post.data.is_video
    }
    objectOfPosts = {...objectOfPosts, [post.data.id]: postObject};
  });
  return objectOfPosts;
};
