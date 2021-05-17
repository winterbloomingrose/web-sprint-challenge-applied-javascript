  // TASK 5
      // ---------------------
      // Implement this function, which should return the markup you see below.
      // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
      // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
      // The text inside elements will be set using their `textContent` property (NOT `innerText`).
      // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
      //
      // <div class="card">
      //   <div class="headline">{ headline }</div>
      //   <div class="author">
      //     <div class="img-container">
      //       <img src={ authorPhoto }>
      //     </div>
      //     <span>By { authorName }</span>
      //   </div>
      // </div>
  //

import axios from "axios";

const Card = (article) => {
  //making elements//
  const cardDiv = document.createElement('div');
  const headlineDiv = cardDiv.createElement('div');
  const authorDiv = cardDiv.createElement('div');
  const imageDiv = authorDiv.createElement('div');
  const authorSpan = authorDiv.createElement('span');

  //element class assigning//
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imageDiv.classList.add('img-container');

  //appending elements//
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imageDiv);
  authorDiv.appendChild(authorSpan);

  //contents//
  headlineDiv.textContent = headline;

/*
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  
  const headlineDiv = cardDiv.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = article.headline;
  cardDiv.appendChild(headlineDiv);

  const authorDiv = cardDiv.createElement('div');
    authorDiv.classList.add('author');
    const imageCont = authorDiv.createElement('div');
      imageCont.classList.add('img-container')
      const authorImg = imageCont.createElement('img');
      authorImg.setAttribute('src',article.authorPhoto);
      authorDiv.appendChild(imageCont);

    const authornameSpan = cardDiv.createElement('span');
    authornameSpan.textContent = article.authorName;
    authorDiv.appendChild(authornameSpan);
  
  cardDiv.appendChild(author);
  return cardDiv;
  */
}  


const cardAppender = (selector) => {
  // TASK 6
    // ---------------------
    // Implement this function that takes a css selector as its only argument.
    // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
    // However, the articles do not come organized in a single, neat array. Inspect the response closely!
    // Create a card from each and every article object in the response, using the Card component.
    // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
