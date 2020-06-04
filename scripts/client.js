console.log('Hello Apis');

// function declaration
// we define parameters (params)
function sayHello(name) {
  // WHERE ALL THE MAGIC HAPPENS
  console.log('HELLO, ' + name + '!!!');

  return true;
}

// calling to our function
// we pass arguments (args)
console.log(sayHello('Myron'));

// globally scoped
const basketOfFruit = [{name: 'Apple'}, {name: 'orange'}, {name: 'Apple'}];
const maxFruitCapacity = 10;

function loopFruit() {
  const allApples = [];
  for (let i =0; i< basketOfFruit.length; i++) {
    const indvFruit = basketOfFruit[i];
    console.log(indvFruit.name);
    if (indvFruit.name === 'Apple') {
      console.log(indvFruit.name, 'is delicious');
      allApples.push( indvFruit);
    }
  }

  return allApples;
}

console.log(loopFruit());

function addFruitToBasket(nameOfFruit) {
  // locally scoped
  const color = 'aqua marine blue';

  if (howMuchFruitInBasket() < maxFruitCapacity) {
    // adds an item to array
    basketOfFruit.push(nameOfFruit);
  }
  console.log(howMuchFruitInBasket());
}

// breaks my code
// console.log(color);

function howMuchFruitInBasket() {
  const fruitCount = basketOfFruit.length;
  return fruitCount;
}

// addFruitToBasket('Kiwi');
// addFruitToBasket('Orange');
// addFruitToBasket('Banana');
// addFruitToBasket('Orange');
// addFruitToBasket('Apple');
// addFruitToBasket('Passion Fruit');
// addFruitToBasket('Kiwi');
// addFruitToBasket('Orange');
// addFruitToBasket('Banana');
// addFruitToBasket('Orange');
// addFruitToBasket('Apple');
// addFruitToBasket('Passion Fruit');

console.log(basketOfFruit);
