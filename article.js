// Get the query parameter from URL
const params = new URLSearchParams(window.location.search);
const i = parseInt(params.get('i')) || 1; // default to 1 if missing
function loadArticle(i) {
  console.log(i);
fetch('data.json')
        .then(response => response.json())
        .then(data => {
          const videoKey = 'video' + i;  
          console.log(videoKey) ;
          console.log(videoKey) ;    // e.g., "video1"
          const video = data[videoKey]; 
          console.log(video) ;     // now this is the actual video object
          document.getElementById("header").textContent = video.title;
          document.getElementById("line").textContent = video.byline;
          document.getElementById("article").textContent = video.article;
          document.getElementById("yt_url").innerHTML = `<a href="${video.yt_url}" target="_blank">Watch on YouTube</a>`;
        })
        .catch(error => {
          console.error('Error fetching JSON:', error);
        });
      }
loadArticle(i);