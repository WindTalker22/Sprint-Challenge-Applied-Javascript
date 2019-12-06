// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function articles(allData) {
  const mainDiv = document.createElement("div"); 
  mainDiv.classList.add("card");

  const headline = document.createElement("div"); 
  headline.classList.add("headline");
  headline.textContent = allData.headline;

  const authorDiv = document.createElement("div"); 
  authorDiv.classList.add("author");
  const authorSpan = document.createElement("span");
  authorSpan.textContent = allData.authorName;

  const imgContainer = document.createElement("div"); 
  imgContainer.classList.add("img-container");
  const imgSource = document.createElement("img");
  imgSource.src = allData.authorPhoto;

  mainDiv.appendChild(headline);
  mainDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(imgSource);
  authorDiv.appendChild(authorSpan);

  return mainDiv;
} 

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  const cardsContainer = document.querySelector(".cards-container");
  const holder = Object.values(res.data.articles);

  holder.forEach(items => {
    for (let obj of items) {
      cardsContainer.appendChild(articles(obj));
      console.log(obj);
    }
    console.log(items);
  });
}); 


