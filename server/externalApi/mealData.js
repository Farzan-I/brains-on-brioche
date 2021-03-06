import axios from 'axios';
import authKey from '../auth.js';

const fetchMealData = (input, ranking) => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
      params: {
        ingredients: input,
        number: '25',
        ignorePantry: 'true',
        ranking: ranking
      },
      headers: {
        'X-RapidAPI-Key': authKey,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
  
    const recipes = axios.request(options).then(function (response) {
      return(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    return recipes
}

export default fetchMealData;