export const filterCommentsRequestResponse = (json) => {
  let objectOfComments = {};
  json[1].data.children.forEach((post) => {
    let postObject = {
      author: post.data.author,
    };
    objectOfComments = { ...objectOfComments, [post.data.id]: postObject };
  });
  console.log("objectOfComments", objectOfComments);
  return objectOfComments;
};
