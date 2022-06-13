# spring boot 작동원리 (2)



## **Request 파라미터**

만약 은행에서 계좌 거래 내역을 조회한다고 할 때

> 고객 : 거래내역 조회 부탁드립니다. 
> 직원 : 어떤 계좌인가요? / 언제부터 언제까지의 내역인가요? / 입금 또는 출금 내역인가요? / 입출금 내역 모두 조회할까요?

위의 대화 내용 중 고객의 요청은 부가적인 정보가 없고 너무 추상적입니다.

하지만 정확한 부가정보를 합쳐서 말한다면 직원은 빠르게 데이터를 조회할 수 있습니다.

> 고객 : 12-34 계좌의 20210101부터 20210120 까지의 출금 내역만 조회해주세요.
> 직원 : 네 말씀하신 조건에 따라 내역을 조회해드리겠습니다.

이렇듯



### Server에 요청할 때도 추가적인 Data가 필요합니다.

- Facebook의 Feed를 조회하려면?
  - 어떤 사용자가 사용하고 있고 어떤 페이지를 보려고 하는건지를 위해서 
  - 로그인 되어 있는 사용자의 정보 및 페이지 데이터를 요청과 함께 전송해야합니다.
- 블로그의 글을 작성하려면?
  - 사용자의 정보, 작성된 제목 및 글 데이터를 요청과 함께 전송해야합니다.

이렇게 요청할 때 여러 데이터가 필요합니다.



이런 것들을 

## **Request 파라미터**

라고 합니다.

- Client가 Server에 요청(Request)를 할 때 추가적으로 전송하는 데이터입니다.
- 2가지 유형
  - **Query String**
  - **Path Parameter**
- Spring Framework는 Request 파라미터를 메소드의 파라미터에 저장합니다.

 



## **Query String vs Path Parameter**

이 둘을 언제 사용하나구요?

- 일반적인 추천 사항
  - 특정 자원을 요청하는 경우는 PathParam 을 사용하고
  - 정렬이나 추가 필터링을 위한 데이터는 Query String 사용합니다.
- 또다른 추천 사항
  - 필수 데이터는 Path Param으로
  - 선택적 데이터는 Query String 사용
  - Query String은 상대적으로 편하게 확장이 가능합니다.(보내도 되고 안 보내도 되고)

회사에 따라 규칙이 있을 수 있으니 조직의 표준에 따라서 활용하시면 됩니다.



## **Response 데이터와 JSON 포맷의 이해**

**client & server**

Client가 Server에게 요청을 하면 Server는 요청에 대한 처리를 한 후 결과를 응답합니다.



![img](https://blog.kakaocdn.net/dn/bNOQjP/btrsO2wNVJ3/RhcaoD7HdIf1OOKGFyWTik/img.png)



여기서 Response 데이터 중 JSON에 대해서는 더 자세히 알아볼 것입니다.

**Response 데이터 예시**



![img](https://blog.kakaocdn.net/dn/bNSHwY/btrsTcdPqNt/A7vijI2KdeHXgFzibK6k81/img.png)



## **Spring Controller와 Response 데이터**

- Controller Annotation은 HTML파일과 같은 view를 응답합니다.
- RestController Annotation은 메소드 반환 값 자체를 응답합니다.
  - 단순 문자열, JSON



## JSON

- JSON - JavaScript Object Notation
- JSON은 데이터를 교환하는데 사용합니다.
- 기존의 방법으로 XML이 있었는데 이것보다 가볍습니다.
- XML에 비해 상대적으로 사람이 읽고 이해하기 쉽습니다.

 

### JSON 문법

- JSON 객체(Object)가 가장 기본 단위로 "key":value 데이터를 포함합니다.
  - JSON 객체의 시작과 끝은 중괄호({})를 사용합니다.
  - key는 큰 따옴표("")로 묶습니다.
  - value에는 다양한 형태의 데이터 타입이 가능합니다.
    - 문자열, 숫자, Boolean, null
    - JSON 객체(Object), JSON 배열(Array)
  - 다수의 "key":value는 쉼표(,)로 구분합니다.



![img](https://blog.kakaocdn.net/dn/bdLXW4/btrsOg9xuX2/t4Tti1oXdoGskeqK6tV5S0/img.png)



- JSON 배열(Array)은 순서가 있는 데이터의 나열입니다.
  - 대괄호([])로 표현합니다.
- JSON 배열은 다양한 데이터 타입을 포함할 수 있습니다.
  - 문자열, 숫자 Boolean, null
  - JSON 객체(Object), JSON 배열(Array)



![img](https://blog.kakaocdn.net/dn/3BBfq/btrsH9wKIwU/xRpSy3KEFKNQKi36hLekb1/img.png)



중첩된 배열도 자주 사용됩니다.





##  **HTTP Method 이해**

HTTP는 이전 게시물에서 알아보았습니다.

HTTP는 Hyper Text를 컴퓨터가 주고 받기 위한 규약으로 IETF, W3C 등의 국제 표준단체에서 HTTP에 대한 표준을 정하여 배포하였습니다. 모든 브라우저에 웹 서버 등은 HTTP 표준에 따라 개발되고 통신하고 있습니다.

### HTTP Method

HTTP 규약 중 하나로, 특정 자원에 대해 수행하는 행동의 종류를 명시합니다.

- 자원의 생성
- 조회
- 수정
- 삭제
- 일부 수정 등

HTTP Method를 사용하면 단일 URI로 다양한 행동을 정의할 수 있습니다.

주로 사용되는 HTTP Method에는 

- GET (자원의 조회)
- POST (자원의 생성)
- PUT (자원의 수정)
- DELETE (자원의 삭제)

가 있습니다.

DB의 4가지 기본 동작을 **CRUD**라고 합니다.



![img](https://blog.kakaocdn.net/dn/bwbWwO/btrsNx44Jlr/z5XXJuj6vcc2ULdjQDD0Ak/img.png)



 **HTTP Method와 데이터베이스 CRUD**

- HTTP Method를 사용하면 단일 URI로 다양한 행동을 정의할 수 있습니다.



![img](https://blog.kakaocdn.net/dn/kFuQk/btrsSkww51A/tNbfSBzw8VEbH2tURSGPW0/img.png)



위의 표는 단일 URI인 /post로 글 저장, 조회, 수정, 삭제 동작을 한다는 것을 나타냅니다.

- HTTP Method는 규약이지 규칙이 아닙니다.
  - GET Method로 자원을 삭제해도 에러가 발생하지는 않습니다.
  - 그러나 Best Practice에 맞게 설계하는 것이 권장됩니다.



### **HTTP Method의 구현**

- @RequestMapping의 요소로 Method를 명시합니다.
  - default는 GET Method입니다.
- 요청된 HTTP Method에 따라 해당 Controller의 Java 메소드를 호출합니다.
- 각 Java 메소드에서는 HTTP Method에 해당하는 처리를 수행하도록 설계하는 것이 권장됩니다.



![img](https://blog.kakaocdn.net/dn/bFcuvu/btrsNyCVkiU/isOH2uNuH6u8sRROjKIfb1/img.png)







### HTTP Method를 위한 간소화된 Annotation

- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping

## **REST API 문서의 활용**

### API 문서화

- API는 정보를 주고 받기 위한 방법/약속
- API를 사용하기 위해서는 사용 방법을 알아야 합니다.
- API 문서는 **API를 사용하는 방법을 명세한 문서입니다.**

### RESP API 문서화

- 프론트엔드에서 호출하기 위한 REST API의 정보가 명세된 문서
  - 백엔드 개발자 주도로 프론트엔드 개발자가 함께 설계합니다.
  - 프론트엔드 개발자는 약속된 REST API 문서에 의존하여 프론트엔드를 개발합니다.
- 프론트엔드 등 Client에서 호출하고 활용하는데 어려움이 없도록 상세하게 작성되어야합니다.

### RESP API 문서가 담고 있어야 하는 정보

- REST API 설명
- URI
- HTTP Method
- Request 파라미터(필수 파라미터와 선택 파라미터)
- Response 데이터(필수 응답 데이터와 선택 응답 데이터)
- 가능한 에러 코드 및 대응 방법
- 호출 예시

### RESP API 문서 예시

- 카카오톡 API
- 인스타그램 API

 

이러한 REST API 문서는

프론트엔드 개발자와 백엔드 개발자 모두 REST API 문서를 읽고 이해할 수 있어야합니다.

백엔드 개발자는 프론트엔드 등의 Client를 위해 REST API 문서를 작성할 수 있어야합니다.

REST API 문서는 잘 작성될수록 Communication 비용이 줄어듭니다.

 







출처 : https://keepgoingforever.tistory.com/52?category=1251460