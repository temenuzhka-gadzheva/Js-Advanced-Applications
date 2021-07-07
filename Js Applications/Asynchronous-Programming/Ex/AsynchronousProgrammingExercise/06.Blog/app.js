function attachEvents() {

    let loadPostButtonElement = document.querySelector('#btnLoadPosts');
    let viewButtonElement = document.querySelector('#btnViewPost');


    loadPostButtonElement.addEventListener('click', () => {

        let postUrl = `http://localhost:3030/jsonstore/blog/posts`;
        fetch(postUrl)
            .then(response => response.json())
            .then(data => {

                let postsSelectElement = document.querySelector('#posts');

                Object.values(data)
                    .map(createOption)
                    .forEach(o => postsSelectElement.appendChild(o));
                return data;
            })
    });


    viewButtonElement.addEventListener('click', displayComment);

    function createOption(post) {
        let optionElement = document.createElement('option');
        optionElement.textContent = post.title;
        optionElement.value = post.id;

        return optionElement;
    }

    function displayComment() {
        let postId = document.querySelector('#posts').value;

        allCommentByPostId(postId);
    }

}

attachEvents();


async function allCommentByPostId(postId) {

    let postUrl = `http://localhost:3030/jsonstore/blog/posts/` + postId;
    let postResponse = await fetch(postUrl);

    let postData = await postResponse.json();


    document.querySelector('#post-title').textContent = postData.title;
    document.querySelector('#post-body').textContent = postData.body;

    let commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;
    let commentsResponse = await fetch(commentsUrl);
    let commentsData = await commentsResponse.json();

    //взима само коментарите за този пост, чиито id сме подали 
    // връща масив от всички коментари
    let comments = Object.values(commentsData).filter(c => c.postId == postId);


    let commentsUlElement = document.querySelector('#post-comments');

    comments.map(createComment)
        .forEach(c => commentsUlElement.appendChild(c));
}

function createComment(comment) {
    let liCommentElement = document.createElement('li');
    liCommentElement.setAttribute('id', `${comment.id}`);
    liCommentElement.textContent = comment.text;

    return liCommentElement;
}

