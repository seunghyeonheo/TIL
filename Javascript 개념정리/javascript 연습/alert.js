let name = prompt("이름을 입력하세요", '');

let number1 = +prompt("The first number?", "");  
let number2 = +prompt("The sescond number?", "");
// prompt앞에 붙은 +는 입력받은 값을 숫자형으로 바꿔준다. 

alert(number1 + number2);

function readNumber(){
    let num;

    do{
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    
    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);


function readNumber(){
    let num;

    do{
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber}`);

