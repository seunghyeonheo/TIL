# while과 for 반복문



## 'while'반복문

```
while (condition) {
	//코드
	//'반복문 본문(body)'이라 불림
}
```

condition 이 truthy이면 반복문 본문의 코드가 실행됩니다. 

아래 반복문은 조건 i < 3을 만족할 동안 i를 출력해줍니다. 

```
let i = 0;
while ( i < 3 ){
	alert(i);
	i++;
}
```

반복문 조건엔 비교 뿐만 아니라 모든 종류의 표현식, 변수가 올 수 있습니다. 조건은 while에 의해 평가되고, 평가 후엔 불린값으로 변경됩니다.  

```
let i = 3;
while (i){ //i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다. 
	alert(i);
	i--;
}
```



<참고> 

반복문 본문이 한 줄이면 대괄호를 쓰지 않아도 됩니다. 

```
let i = 3;
while (i) alert(i--);
```



## 'do...while' 반복문

do...while 문법을 사용하면 condition을 반복문 본문 아래로 옮길 수 있습니다. 

```
do {
 //반복문 본문
} while(condition);
```



```
let i = 0;
do {
	alert(i);
	i++;
}while( i < 3);
```

- do while 문법은 조건이 truthy인지 아닌지에 상관없이, 본문을 최소한 한 번이라도 실행하고 싶을 때만 사용합니다. 대다수의 상황에서는 do..while보다 while(...) {..}이 적합. 





## 'for'반복문

```
//문법

for (begin; condition; step) {
	// ... 반복문 본문(body) ...
}
```

```
1. begin 실행
2. condition이 truthy이면 body실행 후 step실행
  -> condition이 truthy이면 body실행 후 step실행 
  -> condition이 truthy이면 body실행 후 step실행
  -> ...
```

