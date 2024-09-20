const posts = [
    { name: 'post 1' },
    { name: 'post 2' }
];

const listPost = () => {
    posts.map(posts => {
        console.log(posts.name)
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('hata var');
    });
    return promise1;
}


async function showPosts() {
    try {
        await addPost({ name: 'post 3' });
        listPost();

    } catch (error) {
        console.log(error);
    }
}

showPosts();