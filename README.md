# Ollivander's Wand Shop
Welcome to **Ollivander's Wand Shop**!

In this project, you will create a website for Ollivander's shop.

- Create a new `React App`
- Install Bootstrap
```shell
$ npm install bootstrap
```
- Import Bootstrap in your `index.js`
```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```
- Create a data file called `wands.js`
- In `wands.js` place the following data:
```javascript
const wands = [
  {
    core: "Phoenix Feather",
    wood: "Holly",
    length: 11,
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/c/ca/HarryPotterWandNN8415.jpg/revision/latest?cb=20141208232731"
  },
  {
    core: "Unicorn Hair",
    wood: "Willow",
    length: 14,
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/6/62/RonWeasleyWandNN8413.jpg/revision/latest?cb=20141208232815"
  },
  {
    core: "Phoenix Feather",
    wood: "Yew",
    length: 13.5,
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/5/5a/LordVoldemortWandNN8403.jpg/revision/latest?cb=20141208232950"
  },
  {
    core: "Unicorn Hair",
    wood: "Cypress",
    length: 10.25,
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Remus_Lupin_wand.png/revision/latest/scale-to-width-down/700?cb=20161126073935"
  },
  {
    core: "Dragon heartstring",
    wood: "Vine",
    length: 10.75,
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/c/c6/HermioneGrangerWandNN8411.jpg/revision/latest?cb=20140602200406"
  },
  {
    core: "Unicorn Hair",
    wood: "Cherry",
    length: "Unknown length",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/f/f0/Neville%27s_wand.jpg/revision/latest?cb=20141209002728"
  },
  {
    core: "Unicorn Hair",
    wood: "Hawthorn",
    length: 10,
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/3/39/DracoMalfoyWandNN8409.jpg/revision/latest?cb=20141208233016"
  }
];

export default wands;

```

Start by importing `wands.js` into `App.js`. 

Display all of the wands in the main page including their details. Every wand must be in its own `Card` component. Create a `List` component that maps through all the wand cards.

Make sure that you're sending your data through `props`.
