export const filterCommentsRequestResponse = (json) => {
  let objectOfComments = {};
  json[1].data.children.forEach((post) => {
    let postObject = {
      comment_author: post.data.author,
      comment_body_html: post.data.body_html,
      comment_created: post.data.created,
      comment_id: post.data.id,
      comment_ups: post.data.ups,
      comment_replies: post.data.replies,
    };
    objectOfComments = { ...objectOfComments, [post.data.id]: postObject };
  });
  console.log("objectOfComments", objectOfComments);
  return objectOfComments;
};
