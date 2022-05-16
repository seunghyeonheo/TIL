//1. async:코드블럭이 자동으로 promise를 반환 (clear style of promise)

async function fetchUser(){

    return 'study';
}

const user = fetchUser();
user.then(console.log);
console.log(`user:${user}`);

//2.await (async가 붙은 함수 안에서만 사용가능)
function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    //throw 'error';
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

// function pickFruits(){
//     return getApple().then((apple) => {
//         return getBanana().then((banana)=> `${apple} + ${banana}`);
//     });
// }

//좀 더 개선된 코드
// async function pickFruits(){
//     try{
//         const apple = await getApple();
//         const banana = await getBanana();
//         return `${apple} + ${banana}`;
//     }catch{
//         console.log(new Error('error'));
//     }
// }

//병렬처리로 좀더 개선된 코드
// async function pickFruits(){
//     try{
//         const applePromise =  getApple();
//         const bananaPromise =  getBanana();
//         const apple = await applePromise;
//         const banana = await bananaPromise;
//         return `${apple} + ${banana}`;
//     }catch{
//         console.log(new Error('error'));
//     }
// }

//Promise APIs all() 위의 병렬처리 코드를 보다 깔끔하게 개선

// function pickFruits(){
//     return Promise.all([getApple(), getBanana()])
//         .then((fruits) => fruits.join('+'));
// }

// pickFruits().then(console.log);

//Promise APIs race() 먼저 수행되는 것 하나만 처리결과를 가져온다.
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

