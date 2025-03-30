/*
    fetch is a function that makes an HTTP request to a URL
    await is used to wait for the response to resolve before moving on.
    async is used to make the function asynchronous which allows the use of await.
    json() is used to convert the response to a JavaScript object.
    data[0] is the first word in the array returned by the API.
*/
async function getRandomWord() {
  const response = await fetch(
    "https://random-word.ryanrk.com/api/en/word/random"
  );
  const data = await response.json(); // convert response to JavaScript object that we can access data
  return data[0];
}

/*
    setWord is an async function that calls getRandomWord and updates the text content of the h2 element.
*/
async function setWord() {
  const word = await getRandomWord();
  document.querySelector("h2").textContent = word;
}

/*
    add an event listener to the button that calls setWord when clicked.
*/
document.querySelector("button").addEventListener("click", async () => {
  setWord();
});

setWord();
