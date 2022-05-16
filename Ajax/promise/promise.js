//1. Producer: 제공자 
const promise = new Promise((resolve, reject) => {
    console.log('doing something....')
    setTimeout(()=>{
        //resolve('study');
        reject(new Error('no network'));
    } ,2000)
}

);

//2. Consumer : 사용자, then, catch, finally
promise
    .then((value)=>{
        console.log(value);
    })
    .catch(error => {
        console.log(error);   
    })
    .finally(() => {
        console.log('finally');
    })