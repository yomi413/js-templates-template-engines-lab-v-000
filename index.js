function createPost() {
  let title = document.getElementById("title").value;
  let blog = document.getElementById("blog").value;
  let author = document.getElementById("author").value;

  let pageTemplate = document.getElementById("page-template").innerHTML;
  let postTemplate = document.getElementById("post-template").innerHTML;

  let pageTemplateFn = _.template(pageTemplate)
  let postTemplateFn = _.template(postTemplate)
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let commentsTemplate = document.getElementById("comments-template").innerHTML;
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  // let templateFn = _.template(commentTemplate);
  //
  // let commentsDiv = document.getElementById("comments");
  //
  // let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter })
  //
  // commentsDiv.innerHTML += templateHTML;
}
