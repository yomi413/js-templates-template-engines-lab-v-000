function createPost() {
  let title = document.getElementById("title").value;
  let blog = document.getElementById("blog").value;
  let author = document.getElementById("author").value;

  let pageTemplate = document.getElementById("page-template").innerHTML;
  let postTemplate = document.getElementById("post-template").innerHTML;

  let pageTemplateFn = _.template(pageTemplate)
  let postTemplateFn = _.template(postTemplate)
  // let templateFn = _.template(newPostTemplate);
  //
  // let postsDiv = document.getElementById("post");
  //
  // let templateHTML = templateFn({ 'title': title, 'blog': blog, 'author': author });
  //
  // postsDiv.innerHTML += templateHTML;
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter })

  commentsDiv.innerHTML += templateHTML;
}
