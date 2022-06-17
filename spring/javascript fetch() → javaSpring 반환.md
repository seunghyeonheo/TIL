# javascript fetch() → java/Spring 반환



#### **프런트 엔드에서 백엔드로 비동기 데이터 전송**

- 기존에는 javascript의 비동기 기능으로 XMLHttpRequest를 이용해 비동기를 구현했는데 이 기능은 사용하기에는 다소 불편한 점이 있어 좀 더 편하게 사용하기 위해 Jquery 라이브러리를 따로 받고 이에 포함되어 있는 ajax을 이용해 비동기를 구현했는데, ES6부터는 javascript 자체적으로 fetch(비동기 기능)을 지원한다. 이 fetch() 비동기 기능을 활용하여 Spring(java)로 데이터를 전송하는 테스트를 하려 한다
- 프런트엔드에서는 fetch()를 통해 데이터를 보내고 백엔드에서는 JSONObject를 통해 데이터를 받아 가공 및 사용한다.
- 메서드 타입은 REST API에 맞춰서 GET, POST, PUT, DELETE를 사용하여 좀 더 사용하고자 하는 목표와 맞는 의미가 표현되게 사용하는 것이 좋다
- 데이터의 전송, 반환에는 JSON을 주로 사용한다

#### **fetch() 기본 구성**

- fetch( Url, Option )

  .then(response ⇒ { })

  .catch(error ⇒ { })

  1. Url : mapping할 주소
  2. Option : Method, Header, body
  3. then( ) : 비동기 데이터 전송 및 반환에 성공 시 실행
  4. catch( ) : fetch 실행 중 에러 발생 시 catch 의미 그대로 에러를 잡아낸다

#### **Method에 사용 가능한 타입**

- GET : 데이터를 반환을 요청
- POST : 데이터 추가를 요청
- PUT : 데이터 수정을 요청
- DELETE : 데이터 삭제를 요청

#### **기본적으로 알아야 할 사항**

- JSONObject : 스트링을 json 객체로 만들어준다
- JSONArray : JSONObject를 JSONArray에 추가할 경우 추가적으로 배열 형태로 저장이 가능하다
- JSONParser : JSON 형태의 String 문자열이 들어올 경우 JSON 형태로 변환해주어 JSONOBject, JSONArray에 추가할 수 있다.
- JSON.stringify : JSONParser의 반대 형태로 JSON을 String 형태로 바꿔 전송한다.

##  

### **테스트는 두 가지로 해보려 한다 (PUT, GET)**

#### **GET 방식을 프론트 엔드와 백엔드로 나타냈다.**

다소 간단하게 표현했고, Get은 Option으로 들어갈 정보가 필요 없다.

- 프런트엔드

```
function asyncTest(){
    let url = '/test';
        // Get 비동기 쿼리스트링 전송
    fetch(url + "?num=1&message=hello_word")
    .then(res=>{
      res.text().then(function(text){
        console.log("text 안에 데이터 = " + text);
      })
      /* 주의사항
        fetch의 then 안에서 res.json() 또는 res.text()로 데이터를 받았을 경우
        한번 더 위 기능을 사용하면 에러가 발생한다.
        res.json() 이후에는 무조건 then 또는 catch가 발생하는 조건으로 형성되어 있다.
      */
    })
    .catch(err=>{
      console.log(err);
    })

  }
```

- 백엔드

```
@GetMapping("/test")
    public String posttest(@RequestParam(name = "num") int num, @RequestParam(name = "message") String message) {
        System.out.println("\n\n\n\n\n");
        System.out.println("ParamData num = " + num);
        System.out.println("ParamData message = " + message);
        return "GET 보내기 성공!";
    }
```

 

1. 백엔드 데이터 받은 결과



![img](https://blog.kakaocdn.net/dn/05EzY/btrb1qBxego/6A2fvzoZSsYDZTEksHBVDk/img.png)



2. 프런트엔드 성공 문자 받은 결과



![img](https://blog.kakaocdn.net/dn/bneUOI/btrb82FMgRf/okstEnOIU6JV8Ows26KFhK/img.png)



출처: https://d-life93.tistory.com/349