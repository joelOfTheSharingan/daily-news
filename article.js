// Get the query parameter from URL
const params = new URLSearchParams(window.location.search);
const i = parseInt(params.get('i')) || 1; // default to 1 if missing

function loadArticle(i) {
fetch('data.json')
        .then(response => response.json())
        .then(data => {
          if (i===1){
            document.getElementById("header").textContent = data.video1.title;
            document.getElementById("line1").textContent = data.video1.byline;
            document.getElementById("article").textContent = data.video1.article;
            document.getElementById("yt_url").textContent = data.video1.yt_url;
         }else if(i===2){
            document.getElementById("header").textContent = data.video2.title;
            document.getElementById("line1").textContent = data.video2.byline;
            document.getElementById("article").textContent = data.video2.article;
            document.getElementById("yt_url").textContent = data.video2.yt_url;
          }else if(i===3){
            document.getElementById("header").textContent = data.video3.title;
            document.getElementById("line1").textContent = data.video3.body;
            document.getElementById("article").textContent = data.video3.article;
            document.getElementById("yt_url").textContent = data.video3.yt_url;
          }else if(i===4){
            document.getElementById("header").textContent = data.video4.title;
            document.getElementById("line1").textContent = data.video4.byline;
            document.getElementById("article").textContent = data.video4.article;
            document.getElementById("yt_url").textContent = data.video4.yt_url;
          }else if(i===5){
            document.getElementById("header").textContent = data.video5.title;
            document.getElementById("line1").textContent = data.video5.byline;
            document.getElementById("article").textContent = data.video5.article;
            document.getElementById("yt_url").textContent = data.video5.yt_url;
          }else{
            document.getElementById("header").textContent = data.video6.title;
            document.getElementById("line1").textContent = data.video6.byline;
            document.getElementById("article").textContent = data.video6.article;
            document.getElementById("yt_url").textContent = data.video6.yt_url;
          }
          
        })
        .catch(error => {
          console.error('Error fetching JSON:', error);
        });

      }
loadArticle(i);