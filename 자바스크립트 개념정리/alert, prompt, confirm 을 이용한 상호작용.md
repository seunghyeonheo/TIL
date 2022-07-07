# alert, prompt, confirm 을 이용한 상호작용



## alert



## prompt
`prompt` 함수는 두 개의 인수를 받습니다. `prompt`함수는 사용자가 입력 필드에 기재한 문자열을 반환합니다. 사용자가 입력을 취소한 경우는 null이 반환됩니다. 

```
let age = prompt("나이를 입력해주세요", 100);

alert(`당신의 나이는 ${age}살 입니다.`); //당신의 나이는 100살입니다. 

//깔끔한 프롬포트를 보여주려면 두 번째 매개변수를 항상 전달해 줄 것을 권장합니다.  
let test = prompt("Test", '');
```



## confirm
`confirm` 함수는 매개변수로 받은 question과 확인 및 취소 버튼이 있는 모달 창을 보여줍니다. 
사용자가 확인 버튼을 누르면 true, 그 외의 경우는 false를 반환합니다. 

```
let isBoss = confirm("당신이 주인인가요?");

alert(isBoss); //확인 버튼을 눌렀다면 true가 출력됩니다. 
```

