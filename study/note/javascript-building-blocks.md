# JavaScript building blocks

## Looping code

### Looping through a collection

#### The for...of loop

The basic tool for looping through a collection is the `for...of` loop:

```javascript
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion']

for (const cat of cats) {
    console.log(cat);
}
```

#### map() and filter()

You can use `map()` to do something to each item in a collection and create a new collection containing the changed items:

```javascript
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion']

const upperCats = cats.map(string => string.toUpperCase());

console.log(upperCats);
// [ 'LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION' ]
```

You can use `filter()` to test each item in a collection, and create a new collection containing only items that match:

```javascript
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion']

const filtered = cats.filter(cat => cat.startsWith('L'));

console.log(filtered);
// [ 'Leopard', 'Lion' ]
```

## Fuctions

### Function parameters

#### Default parameters

If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value:

```javascript
function hello(name='Chris') {
    console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello();      // Hello Chris!
```
