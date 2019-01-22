//Russian language

//Область видимости переменной — это та часть программы, в которой к этой переменной можно обратиться.
// Так как эта переменная не объявлена и при попытке обратиться к ней будет выведено сообщение о
// необработанной ошибке ReferenceError. Произошло так из-за того, что переменную, с помощью
// ключевого слова var, объявили внутри функции. В результате область видимости этой переменной
// ограничивается внутренней областью видимости функции. К ней можно обратиться в теле этой функции, 
//с ней могут работать функции, вложенные в эту функцию, но извне она недоступна. Если нам надо,
// чтобы некоей переменной могли бы пользоваться несколько функций, находящихся на одном уровне, 
//нам надо объявлять эту переменную там же, где объявлены эти функции, то есть — на один уровень выше
// их внутренних областей видимости.

function setMyVar() {
  var myVar = 2;
}

setMyVar();

console.log(myVar); //undefined 

var myVar = 1;

function setMyVar() {
  myVar = 2;
  return myVar;
}
setMyVar();
console.log(setMyVar()); //2
console.log(myVar);// 2

function doSomething() {
  var myVar = 1;
  if (true) {
    var myVar = 2;
    console.log(myVar);
  }
  console.log(myVar);
}

doSomething(); // 2 2
//let и const имеют блочную область видимости. 
//Это означает, что область видимости 
//при их использовании может быть ограничена блоком кода, таким, как цикл for или выражение if.
function doSomething() {
  let myVar = 1;
  if (true) {
    let myVar = 2;
    console.log(myVar);
  }
  console.log(myVar);
}
doSomething();  // 2 1

let apples = 5; // (*)

if (true) {
  let apples = 10;

  console.log(apples); // 10 (inside block)
}
console.log(apples); 

if (true) {
  let apples = 10;

  alert(apples); // 10 (inside block)
}

alert(apples); // error!
const apple = 5;
apple = 10; // error

const foo = 'bar'

foo = 'test' // TypeError

const obj = {
  foo: 'bar'
}

obj.foo = 'test' // ok