//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

const quoteEl = document.querySelector('#quote');
const characterEl = document.querySelector('#character');
function getFetch() {
  const url = `https://animechan.vercel.app/api/random`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then(({ anime, character, quote }) => {
      // console.log(data);

      quoteEl.textContent = quote;
      characterEl.textContent = `${character} (${anime})`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
