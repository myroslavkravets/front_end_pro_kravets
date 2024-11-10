const translations = {
    "great": "чудово",
    "thank you": "дякую",
    "good": "добре",
    "bad": "погано",
    "amazing": "дивовижно",
    "interesting": "цікаво",
    "comment": "коментар",
    "post": "пост",
    "user": "користувач"
};

const translateToUkrainian = (text) =>
    text.split(" ").map(word => translations[word.toLowerCase()] || word).join(" ");

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

const displayPosts = (posts) => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="loadComments(${post.id})">Завантажити коментарі</button>
            <div id="comments-${post.id}" class="comments"></div>
        `;
        postsContainer.appendChild(postElement);
    });
};

const loadComments = async (postId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
        const comments = await response.json();
        displayComments(postId, comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
};

const displayComments = (postId, comments) => {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const translatedBody = translateToUkrainian(comment.body);
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
            <strong>${comment.name}</strong> (${comment.email})
            <p>${translatedBody}</p>
        `;
        commentsContainer.appendChild(commentElement);
    });
};

document.getElementById('postForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const newPost = {
        title,
        body,
        userId: 1
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        });

        if (response.ok) {
            const createdPost = await response.json();
            document.getElementById('message').innerText = 'Пост створено успішно!';
            addPostToUI(createdPost);
        } else {
            document.getElementById('message').innerText = 'Помилка при створенні поста.';
        }
    } catch (error) {
        console.error("Error creating post:", error);
    }
});

const addPostToUI = (post) => {
    const postsContainer = document.getElementById('postsContainer');
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="loadComments(${post.id})">Завантажити коментарі</button>
        <div id="comments-${post.id}" class="comments"></div>
    `;
    postsContainer.prepend(postElement);
};

fetchPosts();
