// State
// =================

//урл с данными
const POSTDADA_URL = 'https://jsonplaceholder.typicode.com/posts/1';
const POSTCOMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId=1';


// Functions
// =================

const myBody = document.querySelector('body');
const h1 = document.querySelector('h1');

//html
const createHtml = (title) => {
    myBody.append(h1);

    const postHtml = document.createElement('div');
    postHtml.className = 'post';
    postHtml.id = 'post';

    const postH1 = document.createElement('h1');
    postH1.className = 'post__title';
    postH1.textContent = title;
    postHtml.append(postH1);



    return postHtml;
}



//создаем ф-ю для fetch
const renderPost = (postId) => {
    const result = fetch(POSTDADA_URL, {
        method: 'GET',
    })
    console.log(result);

    result
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((postId) => {
            console.log('postId', postId);
            const postHtml = createHtml(postId.title);
            myBody.append(postHtml)
        })
        .catch((err) => {
            console.error('err', err);
        })
        .finally(() => {})
};

// Application
// =================
renderPost(1);