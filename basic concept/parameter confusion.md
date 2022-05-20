# parameter confusion

```javascript
function double(number) {
    return number * 2
}

// create a variable grade
let grade = 10
// then pass it to double()
double(grade) // returns 20 (because grade is 10)
```

So what's going on here?

1. When you call `double(grade)`, JavaScript will get the value of the `grade` variable.

   double함수를 호출하면, 자바스크립트는 grade변수의 값을 가질 것이다. 

2. The value of `grade` is `10` (it was defined on the line above).
   변수 grade의 값은 10이다. (위의 라인에서 정의됨)

3. Then it will call the function `double` and give its `number` parameter the value `10`
   그리고 그것은 함수 double을 호출할 것이고, 그것의 number parameter(*parameter는 함수 안에서 정의된 변수)에 10의 값을 줄 것이다. 

4. Which will return `number * 2` which is `20`.
   그리고 그것은 number*2 = 20의 값을 리턴할 것이다. 



## grade vs number

The variable `grade` has given the value `10` to the variable `number`, because `number` is a parameter. However, this does NOT mean that the variables `grade` and `number` are the same!

The variable `number` is **only** defined inside the function `double`. This is what we call variable scope.

변수 grade는 10의 값을 number에 주었다. 왜냐하면 number는 parameter이기 때문이다. 그러나 이것은 변수 grade와 number가 

같다는 것을 의미하지는 않는다!

변수 number는 오직 double 함수 안에서만 정의된다. 이것이 우리가 변수 범위라고 부르는 것이다. 



출처 : Learn Programming