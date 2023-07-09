export const filterCommentsRequestResponse = (json) => {
  let objectOfComments = {};
  json[1].data.children.forEach((comment) => {
    let commentObject = {
      comment_author: comment.data.author,
      comment_body_html: comment.data.body_html,
      comment_created: comment.data.created,
      comment_id: comment.data.id,
      comment_ups: comment.data.ups,
      comment_replies: comment.data.replies,
    };
    objectOfComments = {
      ...objectOfComments,
      [comment.data.id]: commentObject,
    };
  });
  return objectOfComments;
};

export const filterContentRequestResponse = (json) => {
  let postContentObject = {
    subreddit: json[0].data.children[0].data.subreddit,
    selftext: json[0].data.children[0].data.selftext,
    selftextHTML: json[0].data.children[0].data.selftext_html,
    title: json[0].data.children[0].data.title,
    ups: json[0].data.children[0].data.ups,
    thumbnail: json[0].data.children[0].data.thumbnail,
    created: json[0].data.children[0].data.created,
    preview: json[0].data.children[0].data.preview,
    id: json[0].data.children[0].data.id,
    author: json[0].data.children[0].data.author,
    num_comments: json[0].data.children[0].data.num_comments,
    permalink: json[0].data.children[0].data.permalink,
    url: json[0].data.children[0].data.url,
    media: json[0].data.children[0].data.media,
    is_video: json[0].data.children[0].data.is_video,
  };
  return postContentObject;
};
