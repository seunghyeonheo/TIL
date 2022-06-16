# Fetch



### 비동기 통신

HTML에서 화면을 이동한다고 쳐보자. `<a href="">` 방식으로 주소를 줘서 이동하는 것을 생각할 수 있을 것이다. 그러나 이 방식은 화면 전체를 교체하는 것이기 때문에 이동할 때마다 화면이 깜빡거리게 될 뿐더러 페이지의 용량이 크다면 전환하기까지 오래 기다려야만 한다. 전체 페이지를 다시 불러오며 중복되는 태그 역시 다시 불러오게 되는 것은 덤.



**비동기** 라는 용어에 대해 간단하게 말하자면 자바스크립트에서 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 것을 의미한다. 비동기적 자바스크립트 동작을 하는 기술들을 통틀어 Ajax라고 부르는데, Ajax를 이용해서 데이터를 불러오는 동안 다음 코드를 진행하는 것이 가능해진다.



### 태초에 Ajax가 있었다

Ajax는 Asynchronous Javascript And Xml의 준말이다.

브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로고침 하지않고 페이지의 일부만을 위한 데이터를 가져오는 기법이다.

기존에는 XMLHttpRequest API를 통해 통신을 주고 받았지만 엄청나게 번거로운 작업이었다.

불편함을 개선하기 위해 JQuery를 통해 구현하기 시작하다가 이후 fetch API가 ES6 표준으로 등장하면서 fetch API를 통해 통신하는 것이 주요 방식으로 자리를 잡았다.

서버에서 정보를 가져올 때 리액트처럼 페이지 전체를 새로 고침 하지 않아도 받아올 수 있다.



### Promise 객체

자바스크립트에서 제공하는, 비동기를 간편하게 처리할 수 있도록 도와주는 객체이다. 정해진 기능을 수행하고 나서 결과에 따라 성공이나 실패에 대한 정보를 리턴한다.

fetch API는 ES6의 Promise와 함께 AJAX를 쉽게 사용할 수 있는데, fetch가 반환값으로 가지는 것이 Promise일만큼 Promise는 네트워크 통신과 밀접한 연관이 있다.

```jsx
const promise = new Promise((resolve, reject) => {
  console.log("install excutor");
  setTimeout(() => {
    resolve("data");
  }, 1000);
});
```

promise 객체를 생성하면 두 가지 콜백함수를 인자로 가지는 executor라는 콜백함수를 전달해야 하는데,

resolve - 기능을 정상적으로 수행해서 마지막에 데이터를 전달한다. `.then()` 으로 결과를 받는다.

reject - 중간에 문제가 생기면 호출된다. `.catch()`로 결과를 받는다**.**



# 작동 방식

### 프로토 타입

```jsx
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환한다.

반환된 객체는 API 호출이 성공했을 경우에는 .then으로 resolve 객체를 리턴받고, 실패했을 경우에는 .catch로 reject 객체를 리턴받는다.





## REST API

### GET 요청

```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "GET" }).then(
  (response) => console.log(response)
); // 상태코드 및 Header에 대한 정보

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data)); //자바스크립트 객체 형식으로 변환된다.
```

fetch() 함수는 디폴트로 GET 방식으로 작동하고 GET 방식은 요청 전문을 받지 않기 때문에 옵션 인자가 필요없다.

대부분의 REST API들은 JSON 형태의 데이터를 응답하기 때문에, 응답받은 response 객체는 역시 json() 메서드로 변형할 수 있다.

이 메서드를 호출하면, response 객체로부터 JSON 형식의 응답을 자바스크립트 객체로 변환하여 얻을 수 있다.

### POST 요청

```jsx
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
```

GET 이외의 HTTP 메소드를 사용할 시 method 옵션을 명시해주어야 한다. headers에는 부가적인 정보가, body에는 POST로 보내는 데이터가 들어간다. headers에 JSON 형식을 사용한다고 알려주고 그에 맞게 body의 본문 전체를 JSON 형식으로 바꾸어 준다.

> headers로 json 형식임을 알려주지 않으면 서버에서 못 읽는 문제가 생길 수 있다고 한다.

### PUT 요청

```jsx
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
```

해당 url의 데이터를 수정하는 요청이다. 전체 데이터를 교체해버리기 때문에 부분만 수정하려면 UPDATE를 사용하자. 메소드만 다를 뿐 사실상 POST와 비슷하다.

### DELETE

```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
```

해당 url의 데이터를 지워버리라는 요청이다. 보낼 데이터가 없으니 메소드만 명시해주면 된다.



출처 : https://velog.io/@sham/Fetch%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80