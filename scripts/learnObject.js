let dog = {
  name: 'lily',
  weight: '20kg',
  color: 'black',
  age: 2,
  jump: function () {
    if (this.age >= 2) {
      console.log(this.name + ' can jump.');
    }
  },
};

let cat = {
  name: 'neko',
  variety: 'gold',
  weight: '10kg',
};
