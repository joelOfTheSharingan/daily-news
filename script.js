const container = document.getElementById("container");
function addVideo(title,line,i,image){
   let div=document.createElement("div")
   container.appendChild(div);
   div.className="frame";
  div.id = "frame"+i;
  let titleElement=document.createElement("h2");
  titleElement.textContent=title;
  div.appendChild(titleElement);
  let imageElement=document.createElement("img");
  div.appendChild(imageElement);
div.onclick = () => {
    window.location.href = `article.html?i=${i}`;
};
  imageElement.src = image;

}
fetch('data.json')
  .then(response => response.json())
  .then(data => {
      Object.keys(data).forEach((key, index) => {
          addVideo(data[key].title, data[key].byline, index + 1,data[key].image_url);
      });
  })
  .catch(err => console.error('Error loading JSON:', err));