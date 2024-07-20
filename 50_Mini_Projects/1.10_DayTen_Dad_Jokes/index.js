const joke = document.getElementById('joke');
const btn = document.getElementById('btn');




btn.addEventListener('click',getJokes);

async function getJokes(){
     const config = {
         headers:{
             accept:'application/json'
         }
     }
    const res = await fetch('https://icanhazdadjoke.com/',config)
    const data = await res.json();
    joke.innerText = data.joke;
}
// function getJokes(){
//     const config = {
//         headers:{
//             accept:'application/json'
//         }
//     };
//    fetch('https://icanhazdadjoke.com/',config)
//    .then(res => res.json())
//    .then(data => {
//        const info = data.joke;
//        joke.innerText = info;
//    });
  
// }
