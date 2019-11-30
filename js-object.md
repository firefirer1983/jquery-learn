# JAVASCRIPT原型链

## Object.prototype 是所有原型链的尽头, 因为当 Object.prototype作为一个对象的时候, 其原型(\_\_proto__)是一个空对象
```javascript
function Person(name) {
  this.name = name;
}

let p = Person("XY");


p.__proto__ === Person.prototype -> true

Person.prototype.__proto__ === Object.prototype -> true

Object.prototype.__proto__ === null -> true

```

## 所有函数都是对象, 任何用 function 定义的函数也是对象, 函数对象的构造函数就是 Function

```javascript
Person.__proto__ === Function.prototype -> true

```

## Function 是所有函数对象的构造函数
```javascript
(function (){}).__proto__ === Function.prototype -> true
```

## 同时,由于Function也是一个函数对象,所以Function函数是Function对象的构造函数
```javascript
Function.__proto__ === Function.prototype -> true
```

## 同理,由于Object也是一个函数对象,所以Object函数的构造函数也是Function
```javascript
Object.__proto__ === Function.prototype -> true
```

## 由于Function.prototype也是一个对象,这个对象的构造函数就是 Object
```javascript
Function.prototype.__proto__ === Object.prototype -> true
```

``` javascript
Object instanceof Object -> true
    Object是个函数对象, 函数对象也是一个对象

Object instanceof Function -> true
    Object是个实例对象,所有函数都是Function构造出来的实例对象

Function instanceof Object -> true
    Function是个对象, 所以Object是Function对象的构造函数

Function instanceof Function -> true
    Function同时也是个函数, 所有函数对象的构造函数都是 Function 
```