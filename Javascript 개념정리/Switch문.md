# Switch문

switch문은 하나 이상의 case문으로 구성됩니다. 



```
switch(x) {
	case 'value1': //if (x === 'value1')
	[break]
	
	case 'value2': //if (x === 'value2')
	[break]
}
```



```
let a = 2+2;

switch (a) {
	case 3: 
		alert('비교하려는 값보다 작습니다.');
		break;
	case 4:
		alert('비교하려는 값과 일치합니다.');
	default:
		alert('어떤 값인지 파악이 되지 않습니다.');
}
```



```
let a = 3;

switch (a) {
	case 4:
		alert('계산이 맞습니다!');
		break;
	case 3:
	case 5:
		alert('계산이 틀립니다.');
		alert('수학 수업을 다시 들어보는 것을 권유드립니다.');
		break;
	default:
	alert('계산 결과가 이상하네요.');
}
```

