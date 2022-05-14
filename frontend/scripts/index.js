document.addEventListener('DOMContentLoaded', updatePosts);

function updatePosts() {
    fetch('http://192.168.0.117:3001/api/get')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            let postsElements = '';
            let posts = JSON.parse(json);
            posts.forEach((post) => {
                let postElement = `
                    <div id="${post.id}" class="card mb-5">
                        <div class="card-header">
                            <h2 class="card-title">${post.title}</h2>
                        </div>
                        <div class="card-body">
                            <p class="card-text">${post.description}</p>
                        </div>
                    </div>
                `;

                postsElements += postElement;
            });
            document.getElementById('posts').innerHTML = postsElements;
        });
}

function newPosts() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if (title === '') {
        alert('Insira um título"');
    } else if (description === '') {
        alert('Insira uma descrição!');
    } else {
        let posts = { title, description };

        const options = {
            method: 'post',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(posts),
        };

        fetch('http://192.168.0.117:3001/api/post', options).then((res) => {
            updatePosts();

            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
        });
    }
}
