
var first = function *(){
  console.log("one:gen");
  yield "First Place";
  return 1;
}

var second = function *(){
  console.log("two:gen");
  yield "Second Place";
  return 2;
}
var third = function *(){
  console.log("three:gen");
  yield "Third Place";
  return 3;
}

var myGen = function *() {
  var one = yield *first(); //returns 1
  var two = yield *second(); //returns 2
  var three = yield *third(); //returns 3

  //this is called after the 3rd next();
  console.log('one = ' + one);
  console.log('two = ' + two);
  console.log('three = ' + three);
}

var it = myGen();

var out1 = it.next() //returns { value: 'First Place', done: false }
var out2 = it.next(); //returns { value: 'Second Place', done: false }
var out3 = it.next(); //returns { value: 'Third Place', done: false }
var out4 = it.next(); //returns { value: undefined, done: true }

console.log(out1);
console.log(out2);
console.log(out3);
console.log(out4);
