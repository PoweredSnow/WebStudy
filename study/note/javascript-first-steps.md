# JavaScript first steps

## What is JavaScript

### Example 1.1.1

```javascript
const para = document.createElement.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Name:');
  para.textContent = `Player 1: ${name}`;
}
```

### Example 1.1.2

```javascript
document.addEventListener('DOMContentLoaded', () => {
  function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for (const button of buttons) {
    button.addEventListener('click', createParagraph);
  }
});
```

#### External JavaScript

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

![difference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg)

To summarize:

- `async` and `defer` both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.
- scripts with an `async` attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.
- scripts with a `defer` attribute will load in the order they are in and will only execute once everything has finished loading.
- If your scripts should be run immediately and they don't have any dependencies, then use `async`.
- If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using `defer` and put their corresponding `<script>` elements in the order you want the browser to execute them.

## Variables

### Variable types

Numbers Strings Booleans Arrays Objects

### Dynamic typing

### When to use const and when to use let

_Use `const` when you can, and use `let` when you have to._

This means that if you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

## Numbers and Operators

 to round your number to a fixed number of decimal places, use the `toFixed()` method

### Example 1.2.1

```javascript
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces; // 1.77
```

## Strings

### Testing if a string contains a substring

Sometimes you'll want to find if a substring is present inside a string. This can be done using the `includes()` method, which takes a single parameter — the substring you want to search for.

It returns `true` if the string contains the substring, and `false` otherwise.

#### Example 1.3.1

```javascript
const browserType = 'mozilla';

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}
```

`startsWith()` and `endsWith()` is the same.

### Extracting a substring from a string

You can extract a substring from a string using the `slice()` method. You pass it:

- the index at which to start extracting
- the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.

#### Example 1.3.2

```javascript
const browserType = 'mozilla';
console.log(browserType.slice(1, 4)); // "ozi"
browserType.slice(2); // "zilla"
```

### Changing case

The string methods `toLowerCase()` and `toUpperCase()` take a string and convert all the characters to lower- or uppercase, respectively.

### Updating parts of a string

You can replace one substring inside a string with another substring using the `replace()` method.

#### Example 1.3.3

```javascript
const browserType = 'mozilla';
const updated = browserType.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"
```

## Arrays

### Finding items in an array

You can find the index of a particular item using the `indexOf()` method.

### Adding items

To add one or more items to the end of an array we can use `push()`.
The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, you could do something like this:

#### Example 1.4.1

```javascript
const myArray = ['Manchester', 'Liverpool'];
const newLength = myArray.push('Bristol');
console.log(myArray);     // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength);   // 3
```

To add an item to the start of the array, use `unshift()`.

### Removing items

To remove the last item from the array, use `pop()`.
The pop() method returns the item that was removed.

To remove the first item from an array, use `shift()`.

If you know the index of an item, you can remove it from the array using `splice()`.
The first argument says where to start removing items, and the second argument says how many items should be removed.

### Accessing every item

Very often you will want to access every item in the array. You can do this using the `for...of` statement.

#### Example 1.4.2

```javascript
const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}
```

Sometimes you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. You can do this using `map()`.

```javascript
function double(number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);

console.log(doubled);  // [ 10, 4, 14, 12 ]
```

We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.

Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do this using `filter()`.

```javascript
function isLong(city) {
  return city.length > 8;
}

const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);

console.log(longer);  // [ "Liverpool", "Edinburgh" ]
```

`filter()` calls this function for every item in the array, passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.

### Converting between strings and arrays

`split()` `join()` `toString()`
