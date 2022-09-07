const nextBtn = document.getElementById('nextBtn');
const jokes = document.getElementById('joke')

//generating random joke
// api --->  GET https://icanhazdadjoke.com/

const generateJoke = () => {
  const setHeader = {
    headers: {
      Accept: "application/json"
    }
  }
  fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res) => res.json())
    .then((response) => {
      jokes.innerHTML = response.joke;
    })
    .catch((error) => {
      console.log(error);
    })
}

nextBtn.addEventListener('click', generateJoke);
generateJoke();