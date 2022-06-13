# spring boot 작동원리 (1)

![](C:\Users\seung\Pictures\spring boot\Spring boot 작동.png)



## **Spring Controller의 이해**

- 계층형 아키텍처의 Presentation Layer에 해당합니다.
- Client(웹 브라우저, 모바일 앱)의 요청을 받고
- Application Layer에 **요청에 대한 처리를 위임**하며
- Client에 **최종 응답**을 하는 역할을 합니다.

- view : Client가 요청에 대한 응답의 결과로 보게 되는 웹페이지
- data : Client가 요청에 대한 응답으로 받는 데이터

### **Controller 코드**

- Spring Controller를 구현하기 위해서는 3개의 기본 Annotation이 사용됩니다.

- @Controller와 @RestController

  - **@Controller**
    - Controller 역할을 하는 클래스를 지정, 클래스 상단에 명시합니다.
  - **@RequestMapping**
    - 특정 Request를 처리하는 메소드를 지정, 클래스 또는 메소드 상단에 명시합니다.

- 약속된 Annotation들을 Spring Framework가 스캔합니다.
- Annotation이 부착된 코드들은 Spring Framework에 의해 관리되며, Spring Framework에 의해서 특정한 목적으로 사용됩니다.

```@Controller
package com.study.controller;

@Controller
public class MemoController {
```



## **@Controller vs @RestController**

대부분의 동작은 유사합니다. 

이 둘은 요청을 받아서 처리하고 응답합니다.

하지만 **응답하는 형태가 다릅니다.**

| Controller     | view를 응답합니다.(html파일 등)          |
| -------------- | ---------------------------------------- |
| RestController | data를 응답합니다.(문자열, Json, xml 등) |





### **URI (Uniform Resource Identifier)**

- URL과 유사한 개념

- 특정한 자원에 접근하기 위한 이름 또는 주소

  - ex) https://www.google.com

- 웹상의 모든 자원들은 URI를 갖고 있습니다.

  - 웹페이지
  - 이미지 -> 이미지도 주소가 있습니다.
  - 영상

  

### **URI와 Spring RequestMapping**

- Spring Controller의 메소드들은 URI에 따라 호출이 결정됩니다.
- 기본 도메인에 이어지는 '/path'들에 의해 결정됩니다.
  - ex) http://localhost:8080/user
  - http://localhost:8080/post
  - http://localhost:8080/post/1
- RequestMapping Annotation에 URI Path 정보를 명시합니다.
  - **@RequestMapping(value = "/user")**

 

![img](https://blog.kakaocdn.net/dn/WoyRL/btrswWJ2DTt/9dohKnSCK3xSPng11cY180/img.png)



http://localhost:8080/hello로 들어갔을 때 hello 메소드를 처리해서 hello를 출력



### URI의 활용

- URI는 요청하는

   

  자원의 종류에 따라 이름을 정합니다

  .

  - www.codepresso-blog.com/user
  - www.codepresso-blog.com/posts

- URI는 계층 관계로 표현이 가능하고

   

  '/'로 계층을 구분합니다

  .

  - www.codepresso-blog.com/user/paid
  - www.codepresso-blog.com/user/enterprise

- 단일 웹 애플리케이션 내에서 URI는 **중복이 될 수 없습니다.** (중복 시 에러가 발생합니다.) -> Ambiguous mapping

- 네이밍 규약

  - 소문자 사용
  - 요청하는 자원에 대한 명사 형태로 작성
  - 두 단어 이상 연결될 경우 '-'를 사용
  - 의미 있는 이름으로 일관성 있게 작성



출처: https://keepgoingforever.tistory.com/51?category=1251460