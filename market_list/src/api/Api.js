import {API_KEY} from './ApiConfig';

export function get(recipeSearched) {
    const url = 'https://api.spoonacular.com/recipes/search?apiKey=' + API_KEY + '&query=' + recipeSearched;
    return fetch(url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            return data.results.map(item => item.title);
        });
}