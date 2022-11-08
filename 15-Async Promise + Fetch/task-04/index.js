// State
// =================

//урл с данными
const POSTDADA_URL = 'https://jsonplaceholder.typicode.com/posts/';
const POSTCOMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

// Functions
// =================

const myBody = document.querySelector('body');
const h1 = document.querySelector('h1');

//html
const createHtmlPost = (title, body) => {
    myBody.append(h1);

    const postHtml = document.createElement('div');
    postHtml.className = 'post';
    postHtml.id = 'post';

    const postTitle = document.createElement('h1');
    postTitle.className = 'post__title';
    postTitle.textContent = title;
    postHtml.append(postTitle);

    const postText = document.createElement('p');
    postText.className = 'post__text';
    postText.textContent = body;
    postHtml.append(postText);

    const postCommentsText = document.createElement('b');
    postCommentsText.className = 'post__comments-text';
    postCommentsText.textContent = 'post__comments-text';
    postHtml.append(postCommentsText);

    return postHtml;
}

const createHtmlComment = (email, body) => {
    const commentsHtml = document.createElement('div');
    commentsHtml.className = 'post__comments';
    commentsHtml.textContent = 'post__comments';
    

    const postComment = document.createElement('div');
    postComment.className = 'post-comment';
    postComment.textContent = 'post-comment';
    commentsHtml.append(postComment);

    const postCommentAuthor = document.createElement('span');
    postCommentAuthor.className = 'post-comment__author';
    postCommentAuthor.textContent = email;
    postComment.append(postCommentAuthor);

    const postCommenText = document.createElement('span');
    postCommenText.className = 'post-comment__text';
    postCommenText.textContent = body;
    postComment.append(postCommenText);

    return commentsHtml;
}


//создаем ф-ю для fetch
const renderPost = (postId) => {

    //POSTDADA_URL
    const result = fetch(POSTDADA_URL + postId, {
        method: 'GET',
    })
    console.log(result);

    result
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((post) => {
            console.log('post', post);
            const postHtml = createHtmlPost(post.title, post.body);
            myBody.append(postHtml)
        })
        .catch((err) => {
            console.error('err', err);
        })
        .finally(() => {})


    //POSTCOMMENTS_URL
    const PostCommentsUrlResult = fetch(POSTCOMMENTS_URL + postId, {
        method: 'GET',
    })
    console.log(PostCommentsUrlResult);

    PostCommentsUrlResult
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((comments) => {
            console.log('comments', comments);
            const commentsArr = comments.map((comment) => {
                console.log(comment);
                const postHtml = document.querySelector('#post');
                const commentsHtml = createHtmlComment(comment.email, comment.body);
                postHtml.append(commentsHtml)
            });
            return commentsArr;
        })
        .catch((err) => {
            console.error('err', err);
        })
        .finally(() => {})
};

// Application
// =================
renderPost(1);