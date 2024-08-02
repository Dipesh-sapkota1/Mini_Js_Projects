const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=538ba0ec2e8486cb1c1ca87b55b55992&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=538ba0ec2e8486cb1c1ca87b55b55992&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL);

async function getMovies(url){
   const res = await fetch(url);
   const data = await res.json();
   displayMovies(data.results);
}

function displayMovies(movies){
    main.innerHTML = '';
    movies.forEach((movie) => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        const {title, poster_path, vote_average, overview} = movie;
         

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getvote(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
           ${overview}
        </div>
        `
        main.appendChild(movieEl);
    });
}

function getvote(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote <= 5){
        return 'red'
    }else{
        return 'orange'
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API+searchTerm);
        search.value = '';
    }
    else{
        window.location.reload();
    }
})