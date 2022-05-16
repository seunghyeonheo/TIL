//3. promise chaining (연결)
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber 
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1),1000)         
        });
    })
    .then(num => console.log(num));


//4. Error Handling (오류 처리)
// {}사용시 return 키워드 반드시 사용
//우선 세 개의 함수 표현식을 만듦.    
const getHen = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'),1000);
    });
}
const getEgg = hen =>
    new Promise((resolve, reject) => {
       //setTimeout(() => resolve(`${hen} => egg`),1000);
       setTimeout(() => reject(new Error(`error! ${hen} => egg`)),1000);
    });
 
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => brunch`),1000);
    });
 
getHen() 
    .then(hen => getEgg(hen))
    .catch(error => {
        return 'bread';
    }) //error handling
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log)