# 메서드와 this

객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성됩니다. 



사용자는 현실에서 장바구니에서 물건 선택하기, 로그인하기, 로그아웃하기 등의 행동을 합니다. 이와 마찬가지로  사용자를 나타내는 객체 user도 특정한 행동을 할 수 있습니다. 

자바스크립트에서는 객체의 프로퍼티에 함수를 할당해 객체에게 행동할 수 있는 능력을 부여해줍니다. 



## 메서드 만들기

```
//user에게 인사할 수 있는 능력 부여해주기 

let user = {
	name "John"
	age : 30
};

user.sayHi = function() {
	alert("안녕하세요!")
};

user.sayHi();
```

이렇게 객체 프로퍼티에 할당된 함수를 method(메서드)라고 부릅니다. 

위 예시에서는 user에 할당된 sayHi가 메서드입니다. 

메서드는 이미 정의된 함수를 이용해서 만들 수도 있습니다. 

```
let user = {
}

//함수 선언
function sayHi(){
	alert('안녕하세요!')
};

user.sayHi = sayHi;

user.sayHi();//안녕하세요! 
```



## 메서드 단축 구문

```
//동일하게 동작하는 두 객체 예제

user =  {
	sayHi: function(){
	alert("Hello");
}
};

//단축 구문 사용
user = {
	sayHi() {
	alert("Hello");
	}
};
```



## 메서드와 this

메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 할 수 있습니다. 모든 메서드가 그런 건 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용합니다. 

```
let user = {
	name : 'john',
	age : 30,
 }
 
 sayHi(){
	// 'this'는 '현재 객체'를 나타냅니다.
	alert(this.name);
}
};

user.sayHi(); //John

//외부 변수를 참조해 객체 접근도 가능 

let user = {
	name : "John",
	age : 30,
}
 
 	sayHi(){
	alert(user.name); //'this'대신 'user'이용
}
};
```



## this가 없는 화살표 함수

화살표 함수는 일반 함수와는 달리 고유한 `this`를 가지지 않습니다. 화살표 함수에서 `this`를 참조하면, 화살표 함수가 아닌 '평범한' 외부 함수에서 `this`값을 가져옵니다. 

```
let user = {
	firstName : '보라',
	sayHi() {
	let arrow = () => alert(this.firstName);
	arrow();
}
};


user.sayHi(); //보라
```



