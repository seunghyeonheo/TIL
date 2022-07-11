# If와 '?'를 사용한 조건 처리 



## 'If'문

- `if(...)`문은 괄호 안에 들어가는 조건을 평가하는데, 그 결과가 `true`이면 코드 블록이 실행됩니다. 

```
//간단한 if문 예시
let year = prompt('우리나라는 몇 년도에 해방되었을까요?', '');

if(year == 1945) alert('정답입니다!');
```

- 조건이 true일 때 복수의 문을 실행하고 싶다면 중괄호로 코드 블록을 감싸야 함.  

```
if (year == 1945){
	alert( "정답입니다" );
	alert( "아주 똑똑하시네요!" );
}
```



## 불린형으로의 변환

`if(...)`문은 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환합니다. 

- 숫자 0 , `""`, `null`, `undefined`, `NaN`은 불린형으로 변환 시 모두 `false`가 됩니다. 이런 값들은 'falsy'값이라고 부릅니다. 
- 이 외의 값은 불린형으로 변환 시 `true`가 되므로 'truthy' 값이라고 부릅니다. 

```
if (0) { // 0은 falsy입니다. 
}

if (1) { // 1은 truthy입니다. 
}
```



## 'else'절

`if`문에 `else`절을 붙일 수 있습니다. `else`절 뒤에 이어지는 코드 블록은 조건이 거짓일 때 실행됩니다. 



## 조건부 연산자 '?'

```
let result = condition ? value : value2;
```

평가 대상인  `condition`이 truthy라면 `value1`이 그렇지 않으면, `value2`가 반환됩니다. 

```
let accessAllowed = (age > 18) ? true : false;
//괄호의 유무 차이는 없지만, 코드의 가독성 향상을 위해 괄호 사용을 권장함. 
//비교 연산자 자체가 true나 false를 반환하기 때문에 위 예시에서 물음표 연산자를 사용하지 않아도 됨. 
```

 

## 다중 '?'

물음표 연산자 `?`를 여러 개 연결하면 복수의 조건을 처리할 수 있습니다. 

```
let age = prompt("나이를 입력하세요", '');

let message = (age < 3) ? 'hello baby':
	(age < 18) ? '안녕':
	(age < 100) ? '환영합니다!':
	'나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요';
```



<실습>

```
let name = prompt("자바스크립트의 공식 이름은 무엇일까요?", "");

if( name === "ECMAScript") {
	alert("정답입니다")
	}else{
	alert("모르셨나요? 정답은 ECMAScript입니다!")
	}
```



```
let number = prompt("숫자를 입력하세요", '');

if(number > 0){
	alert('1');
}else if(number < 0){
	alert('-1')
}else{
	alert('0')
}
```



```
let result = ( a + b < 4) ? '미만' : '이상'
```



``` 
let message = (login == '직원') ? '안녕하세요' :
(login == '임원') ? '환영합니다' :
(login == '') ? '로그인이 필요합니다' :
'';
```







[자료출처 : [if와 '?'를 사용한 조건 처리 (javascript.info)](https://ko.javascript.info/ifelse)]