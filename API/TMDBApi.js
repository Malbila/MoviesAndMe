const API_TOKEN = "b2af19b655ca3a99b150f75a00d1b84b";

export function getFilmsFromApiWithSearchedText(text,page){
    const url = 'http://api.themoviedb.org/3/search/movie?api_key='+ API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id){
    return fetch('https://api.themoviedb.org/3/movie/' +id +'?api_key=' + API_TOKEN + '&language=fr')
    .then((application) => application.json())
    .catch((error) => console.error(error));
}
