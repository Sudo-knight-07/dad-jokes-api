const nextBtn = document.getElementById('nextBtn');
const jokes = document.getElementById('joke')

//generating random joke
// api --->  GET https://icanhazdadjoke.com/

// const generateJoke = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json"
//     }
//   }
//   fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((response) => {
//       jokes.innerHTML = response.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// }

//using async and await

const generateJoke = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json"
      }
    }
    const res = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch {
    (error)
    console.log(error);
  }
}

nextBtn.addEventListener('click', generateJoke);
generateJoke();