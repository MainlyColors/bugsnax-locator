//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

const quoteEl = document.querySelector('#quote');
const characterEl = document.querySelector('#character');

function createBugsnaxLiElement(name, location) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const pBug = document.createElement('p');
  const pLoc = document.createElement('p');

  div.classList.add('list-entry');

  pBug.textContent = name;
  pLoc.textContent = location;

  div.appendChild(pBug);
  div.appendChild(pLoc);

  li.appendChild(div);

  return li;
}

function getFetch() {
  // const url = `https://www.bugsnaxapi.com/api/bugsnax`;
  const url = '../JSON/bugsnax.json';

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
// { headers: { 'Access-Control-Allow-Origin': '*' } }
// {
//   headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/' },
// }
