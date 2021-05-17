import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
    // ---------------------
    // Implement this function which takes an array of strings ("topics") as its only argument.
    // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
    // then the function returns the markup below.
    // The tags used, the hierarchy of elements and their attributes must match the provided markup!
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    //
    // <div class="topics">
    //   <div class="tab">javascript</div>
    //   <div class="tab">bootstrap</div>
    //   <div class="tab">technology</div>
    // </div>
  //
  const topicDiv= document.createElement('div');
    topicDiv.classList.add('topics');
  topics.forEach(text => {
    const tabDivs = document.createElement('div');
    tabDivs.classList.add('tab');
    tabDivs.textContent = text;
    topicDiv.appendChild(tabDivs);
    return tabDivs
  });
  return topicDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
    // ---------------------
    // Implement this function which takes a css selector as its only argument.
    // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
    // Find the array of topics inside the response, and create the tabs using the Tabs component.
    // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/');
    .then(resPonse=>{
      document.querySelector(selector).appendChild(Tabs(resPonse.data.topics))
    })
    .catch(error => {
      console.log("error", error)
    })
}

export { Tabs, tabsAppender }
