/**
 * Math.random() 取值范围 0 <= result < 1 的小数
 *
 * 如果变换随机值的范围，可以乘以对应的值
 */
let result = Math.random();
let arr = ['hello', 'world', 'javascript', 'math'];
let index = parseInt(result * arr.length);
console.log(index);

/*
// Math.round() 四舍五入操作
let result1 = Math.round(1.3);
console.log(result1);
let num = 2.16;
num *= 10;
let result2 = Math.round(num);
result2 /= 10;
console.log(result2);
// 向下取整 Math.floor() 向上取整 Math.ceil()
let result3 = Math.floor(1.6);
let result4 = Math.ceil(1.3);
console.log(result3, result4);
*/

// 为了将普通函数与生成对象的函数区分开，出现了构造函数的概念
// 构造函数
/*
function CreateMovie(name, type, rate, showTime) {
  this.name = name;
  this.type = type;
  this.rate = rate;
  this.showTime = showTime;
  this.getNextShowing = function () {
    let currentTime = 10;
    for (let i = 0; i < this.showTime.length; i++) {
      if (currentTime < parseInt(this.showTime[i])) {
        // console.log(parseInt(this.showTime[i]));
        console.log(this.name + ' 下一次的播放时间：' + this.showTime[i]);
        break;
      }
    }
  };
}
let movie1 = new CreateMovie('007', 'a', 9.8, ['9:00', '14:00', '19:00']);
let movie2 = new CreateMovie('指环王', 'b', 9.9, ['10:30', '15:30', '20:30']);
console.log(movie1);
console.log(movie2);
movie2.getNextShowing();
*/
// 普通函数
/*
function createMovie(name, type, rate, showTime) {
  let movieObj = {};
  movieObj.name = name;
  movieObj.type = type;
  movieObj.rate = rate;
  movieObj.showTime = showTime;
  movieObj.getNextShowing = function () {
    let currentTime = 11;
    for (let i = 0; i < movieObj.showTime.length; i++) {
      if (currentTime < parseInt(movieObj.showTime[i])) {
        // console.log(parseInt(movieObj.showTime[i]));
        console.log('下一次的播放时间：' + movieObj.showTime[i]);
      }
    }
  };
  return movieObj;
}
let movie1 = createMovie('007', 'a', 9.8, ['9:00', '14:00', '19:00']);
let movie2 = createMovie('指环王', 'b', 9.9, ['10:30', '15:30', '20:30']);
console.log(movie1);
console.log(movie2);
movie2.getNextShowing();
*/

/*
let movies = {
  movie1: {
    name: '007',
    type: 'a',
    rate: '9.8',
    showTime: ['9:00', '14:00', '19:00'],
  },
  movie2: {
    name: '指环王',
    type: 'b',
    rate: '9.9',
    showTime: ['10:00', '15:00', '20:00'],
  },
};
console.log(movies.movie1);
console.log(movies.movie2);
*/

/*
let movie = {
  movieName: '长津湖',
  duration: 176,
  price: 50,
  shoeTime: function () {
    console.log(this);
    console.log(this.movieName + ' 2021-10-01 14:00:00');
  },
};
// for in 会遍历取出对象的属性
// 可以 对象[k]
for (const k in movie) {
  // console.log(k);
  console.log(movie[k]);
}
// 方法的 this 会指向该方法的调用主体，
// 谁调用的这个方法， this 就指向谁
movie.shoeTime();
*/

/*
let person = {
  personName: 'zhangsan',
  age: 20,
  sayHello: function () {
    console.log('hello');
  },
};
// 第一种写法，最常用写法，对象.属性名
// 对象.方法名
console.log(person.age);
person.sayHello();
// 第二种写法 对象["属性名"]
console.log(person['personName']);
person['sayHello']();
// 区别 对象[变量] 中括号中可以放变量
let attr = 'age';
console.log(person[attr]);
// 访问对象不存在的属性，打印的是 undefined
console.log(person.hobby);

person.hobby = ['swimming', 'football'];
console.log(person);
// 添加一个 weight
person['weight'] = '60';
// 修改属性值
person.age = 30;
person['age'] = 30;
console.log(person);

delete person.age;
console.log(person.age);
*/

/*
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
*/
