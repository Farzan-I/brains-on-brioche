# Brains On Brioche

| [Contributors](#contributors) | [Project description](#project-description) | [Production](#production) | [Demo](#demo) | [Technologies used](#technologies-used) | [How to run locally](#how-to-run-locally) | [Card wall](#card-wall) | [Team approach](#team-approach) | [User stories](#user-stories) | [Further User Stories](#further-user-stories) | [Minimum Viable Product](#minimum-viable-product-mvp) | [Wireframes](#wireframes) | [Edge cases](#edge-cases) | [Future improvements](#future-improvements) |

## Contributors:
- [Alexandros Papagiannis](https://github.com/Alexandros91)
- [Archie Martin](https://github.com/archiemartini)
- [Farzan Imanzadeh](https://github.com/Farzan-I)
- [Jimmy Lyons](https://github.com/jimmy-lyons)
- [Stevie Spiegl](https://github.com/S-Spiegl)

## Project description
Welcome to Brains on Brioche, the food app we were requested to build, as our final group project of the Makers Academy bootcamp during weeks 11 and 12. We designed and developed from scratch a program(?) where a user can enter some ingredients that are available at the moment and get access to a number of meals (and their recipes) that they can prepare according to them. 
As a team we thought that an app like this would be quite useful for many different reasons. Food waste is real and results to a financial burden for everyone that can be avoided; it affects the enviroment too, since a larger amount of food is required for each person than it would if we were utilizing most of, if not all of the food resources we are paying for. And here Brains on Brioche comes to the rescue, as it can help minimize food waste significantly, if frequently used.
Also, for many people who actually want to cook their food themselves, but know only a limited time of recipes, or they cannot figure out the way to put together different ingredients, in order to make delicious food, this app is really helpful as well. We managed to implement a wide database with thousands of recipes from many different cuisines, so the user can find recipes even with ingredients that at first glance look like they could not be combined. Even users who can cook, by using this app, they can find many alternative options and prepare meals that didn't even know they exist from all around the world, thus having a nice break from their usual meals and adding much more variety to their diet.
Another really cool feature of our app is that the user can sign up and via their profile they can enter the ingredients they have in their fridge, without having to interact with the search bar everytime. This way their shopping becomes much easier, as they can find out quicker what exactly they need to buy, without needing a new shopping list everytime.
Aside from the practicalities, there is the fun aspect of the app too, thanks to the mystery-meal function. By choosing a mystery meal, the app provides the user with a random meal (of course according to their available ingredients) so they can consume a surprise meal that wasn't their option, or in some cases, might not even know what it is, or how it tastes, making the whole process fun and unpredictable.
In conclusion, all members of our team we are extremely happy with our effort in building this app and the features we managed to include. In total, we had a great time, of course with our highs and lows, while working on this and are very proud of our final product. We hope the users of our app will find it equally useful and fun to use and we are more than open to hear your opinion and any constructive crisicism that would make our product better. 


## Production

## Demo
### Home page
![home](public/images/_____.png)

## Technologies Used
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [React](https://reactjs.org/) to build user interfaces.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Redux](https://redux.js.org/) to help with consistency across client, server, and native environments and make testing easier.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Axios](https://axios-http.com/) promise based HTTP client for the browser and node.js.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) for styling of the webpages.

## How to run locally

### Set up
#### Client
* To initialise an empty react application `npx create-react-app ./` in the client directory
* `npm install axios moment react-file-base64 redux redux-thunk` (in order of being installed: to make api requests, a library to work with time and date, to convert images, asynchronous actions using redux)

#### Server
* `npm init -y` to initialise an empty package.json file
* `npm install body-parser cors express mongoose nodemon` to install all necessary dependencies (in order of being installed: enable app to send recipe requests, enable cross origin requests, framework of the application, create models for the recipes, to have the browser reload everytime a change is made)

## Card wall
We used a [Trello](https://trello.com/b/b9m4qtRa/brainsonbrioche) board to keep track of the features we want to implement. We organised tickets amongst the team and moved the tickets accordingly to demonstrate at what stage that feature's at (To do/In progress/In review etc.).

## Team approach
* Standups every morning at 10:00
* Retro at 5:30 every evening
* Pair programming throughout the whole project
* Regular check-ins with team members to make sure nobody was left behind
* Trello board for distributing work and staying on track

## User stories
```
As a user,
So that I can create a meal from the items in my fridge,
I would like to be able to search for recipes by typing in my ingredients to a search bar.
```
```
As a user, 
So that I can make a complete meal, 
I want to see recipes which only contain the ingredients I have entered.
```
```
As a user,
So that I can cook a recipe that I've searched for,
I would like to see the steps of the recipe.
```

## Further User Stories

## Minimum Viable Product (MVP)
<details>
<summary> 🍽 Search bar on the home page </summary>

* User can type an ingredient and get a maximum of 5 recipes given back
* 
</details>

## Wireframes
![Wireframe 1](public/images/_____.png)

## Edge cases

## Future improvements

