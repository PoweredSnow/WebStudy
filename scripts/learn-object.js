// ECMAscript 2015 Classes
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`)
  }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

class Teacher extends Person {
  constructor(first, last, age, gender, interests ,subject, grade) {
    super(first, last, age, gender, interests);
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.

// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"



/**
 * 创建函数，生成当前时间字符串
 * 2021-10-19 10:17:20
 * 作为函数返回值返回
 */
/*
function identify(num) {
  return num < 10 ? '0' + num : num;
}

function getTime() {
  let date2 = new Date();

  let year = date2.getFullYear();
  let mon = identify(date2.getMonth() + 1);
  let day = identify(date2.getDate());
  let hour = identify(date2.getHours());
  let min = identify(date2.getMinutes());
  let sec = identify(date2.getSeconds());

  return year + '/' + mon + '/' + day + ' ' + hour + ':' + min + ':' + sec;
}

function createTimer() {
  let timerId = setInterval(function () {
    let result = getTime();
    let timer = document.getElementById('timer');
    timer.innerHTML = result;
    // document.write(getTime() + '<br />');
  }, 1000);
  let btn = document.getElementById('btn');
  btn.click = function () {
    clearInterval(timerId);
  };
}

createTimer();
*/

// document.write(new Date().toLocaleString());

/*
let date1 = new Date();

let hour = date1.getHours();
let minute = date1.getMinutes();
let sec = date1.getSeconds();
console.log(hour + ':' + minute + ':' + sec);

let year = date1.getFullYear();
// 获取的月份的取值范围 0~11
let month = date1.getMonth() + 1;
// getDate 获取今天的日期
let day = date1.getDate();
console.log(year + '/' + month + '/' + day);

// 获取星期 日期对象.getDay();
// 获取星期的取值范围 0~6
let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
let weekday = date1.getDay();
console.log(weeks[weekday]);

let msec = date1.getMilliseconds();
console.log(msec);
*/

/*
let r = Math.random();
let result = parseInt(r * 100 + 1);
console.log(result);
*/

/**
 * Math.random() 取值范围 0 <= result < 1 的小数
 *
 * 如果变换随机值的范围，可以乘以对应的值
 */
/*
let result = Math.random();
let arr = ['hello', 'world', 'javascript', 'math'];
let index = parseInt(result * arr.length);
console.log(index);
*/

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
