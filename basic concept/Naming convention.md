### Naming convention

We cannot re-define or re-declare name again because it has already been defined. So after the first time you use let for a specific variable name, you cannot use it again

---


우리는 (변수)name을 재정의 하거나 재선언할 수 없다. 왜냐하면 그것은 이미 정의되었기 때문이다. 

따라서 처음에 특정한 변수를 선언하면 그것을 재사용할 수 없다.  



```javascript
let name = "Sam"

//this is INVALID. it will break with an ERROR

let name = "Alex"
```

```javascript
let name = "Sam"

// This is valid because we are not re-defining. We're just changing the value

name = "Alex"
```



<Boolean pro tip>****

When defining a variable that will contain a boolean value or a function that will return a boolean value, it's a good idea to give it a name that starts with can or has or is. For example: canVote, isLegal, hasVoted, isRegistered. The name implies that there will be a boolean as a value.

---

변수를 정의할 때 그것은 boolean값 혹은 boolean값을 리턴하는 함수를 포함할 것이다. 변수명 앞에 can이나 has, 또는 is를 붙이는 것은 좋은 생각이다. 예를 들어 canVote, isLegal, hasVoted, isRegistered. 이름은 값으로써의 boolean이 있을 거라는 것을 암시한다. 





출처: Learn Programming