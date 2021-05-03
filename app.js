document.getElementById('fetchPostData').addEventListener('click', fetchPostData);
    
function fetchPostData(){
  fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.text())
      .then(post => {
          let output = '<h2>Lists of Posts Title</h2>';
          output += '<ul>';
          post.forEach(function(post) {
              output += `
                  <li>
                      ${post.title}
                  </li>
              `;
          });
          output += '</ul>'
          document.getElementById("response").innerHTML = output;
      });
}