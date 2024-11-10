// Функція для перекладу тексту коментаря
function translateToUkrainian(text) {
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
        // додати більше слів для перекладу за потреби
    };

    // Замінюємо кожне англійське слово на українське
    return text.split(" ").map(word => translations[word.toLowerCase()] || word).join(" ");
}

// Отримання перших 10 постів
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await response.json();
    displayPosts(posts);
}

// Відображення постів
function displayPosts(posts) {
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
}

// Завантаження коментарів для конкретного поста
async function loadComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
    const comments = await response.json();
    displayComments(postId, comments);
}

// Відображення коментарів під постом з перекладом на українську
function displayComments(postId, comments) {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const translatedBody = translateToUkrainian(comment.body); // Перекладаємо текст коментаря
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
                    <strong>${comment.name}</strong> (${comment.email})
                    <p>${translatedBody}</p>
                `;
        commentsContainer.appendChild(commentElement);
    });
}

// Створення нового поста
document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const newPost = {
        title: title,
        body: body,
        userId: 1
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    if (response.ok) {
        const createdPost = await response.json();
        document.getElementById('message').innerText = 'Пост створено успішно!';
        addPostToUI(createdPost);
    } else {
        document.getElementById('message').innerText = 'Помилка при створенні поста.';
    }
});

// Додавання нового поста до списку на екрані
function addPostToUI(post) {
    const postsContainer = document.getElementById('postsContainer');
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="loadComments(${post.id})">Завантажити коментарі</button>
                <div id="comments-${post.id}" class="comments"></div>
            `;
    postsContainer.prepend(postElement); // Додаємо новий пост на початок списку
}

// Завантаження постів при завантаженні сторінки
fetchPosts();