# Ollivander's Wand Shop 🪄

Welcome to **Ollivander's Wand Shop**!

In this project, you will create a website for Ollivander's shop.

- Fork and clone [this repository](https://github.com/JoinCODED/TASK-Routes-Wand-Shop)
- Create a new `React App` using the command `npx create-react-app ollivars-wand-shop`
- Install Bootstrap as a new dependency

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
    slug: "phoenix-feather-holly-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/c/ca/HarryPotterWandNN8415.jpg/revision/latest?cb=20141208232731",
  },
  {
    core: "Unicorn Hair",
    wood: "Willow",
    length: 14,
    slug: "unicorn-hair-willow",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/6/62/RonWeasleyWandNN8413.jpg/revision/latest?cb=20141208232815",
  },
  {
    core: "Phoenix Feather",
    wood: "Yew",
    length: 13.5,
    slug: "phoenix-feather-yew-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/5/5a/LordVoldemortWandNN8403.jpg/revision/latest?cb=20141208232950",
  },
  {
    core: "Unicorn Hair",
    wood: "Cypress",
    length: 10.25,
    slug: "unicorn-hair-cypress-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Remus_Lupin_wand.png/revision/latest/scale-to-width-down/700?cb=20161126073935",
  },
  {
    core: "Dragon heartstring",
    wood: "Vine",
    length: 10.75,
    slug: "dragon-heartstring-vine-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/c/c6/HermioneGrangerWandNN8411.jpg/revision/latest?cb=20140602200406",
  },
  {
    core: "Unicorn Hair",
    wood: "Cherry",
    length: "Unknown length",
    slug: "unicorn-hair-cherry-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/f/f0/Neville%27s_wand.jpg/revision/latest?cb=20141209002728",
  },
  {
    core: "Unicorn Hair",
    wood: "Hawthorn",
    length: 10,
    slug: "unicorn-hair-hawthorn-1",
    imageUrl:
      "https://vignette.wikia.nocookie.net/harrypotter/images/3/39/DracoMalfoyWandNN8409.jpg/revision/latest?cb=20141208233016",
  },
];

export default wands;
```


- Create a data file and copy and paste the array above.
- Create a `List` component that maps through all the wands.
- Every wand must be in its own `Card` component.
- Make sure that you're sending your data through `props`. 
- When clicking on a wand card it should take you to another page ( use routing) showing the details of the wand
- use bootstrap in styling your project, you can check this documentation [here](https://react-bootstrap.github.io/getting-started/introduction)
