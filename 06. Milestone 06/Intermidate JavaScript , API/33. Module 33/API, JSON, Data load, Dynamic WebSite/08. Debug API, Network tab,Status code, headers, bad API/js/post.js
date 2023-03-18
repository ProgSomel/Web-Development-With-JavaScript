function loadPost() {
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data => displayPostData(data))
}
/*
1. Get the container Element where you want to add new elelemnt
2. create chiled Element
3. set InnerText or InnerHTML
4. AppendChild()

*/
const postsContainer = document.getElementById('post-container');
function displayPostData(datas) {
     for(const data of datas) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
         <h4>User: ${data.userId}</h4>
         <h5>Post title: ${data.title}</h5>
         <p>Post Description: ${data.body}</p>
        `;
        postsContainer.appendChild(postDiv);
     }
}


