# JSP

- Java server page 의 줄임말로 자바로 서버 페이지를 작성하기 위한 언어
- **HTML과 JSP태그로 구성**되어 화면을 작성하는 데 유리한 웹프로그래밍 기술
- 서버 페이지는 웹 서버에서 실행되는 페이지를 말하며 요청에 필요한 페이지를 위한 로직이나 
  데이터 베이스와의 연동을 위해 필요한 것들을 포함합니다.
  이러한 서버 페이지에서 실행되는 로직을 구현하기 위해서는 프로그래밍 언어가 필요한데, JSP에서는 
  자바를 사용하고 있습니다. 

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Addition</title>
</head>
<body>
	<%
		int num1 = 20;
		int num2 = 10;
		int add = num1 + num2;
	
	%>
	<%=num1%>+<%=num2%>=<%=add%>
</body>
</html>
```

- language="java"는 사용하는 언어가 자바이며 
  contentType="text/html"; 은 이 페이지가 html문서이며
  charaset=UTF-8 pageEncoding="UTF-8"은 한글 인코딩을 UTF-8로 처리하겠다는 의미입니다. 
  <% %>태그를 스크립트릿이라고 하고 <%= %>태그는 표현식이라고 합니다. 

- JSP 페이지에 기술한 내용은 HTML로 간주되기 때문에 
  자바 코드의 결과값을 출력하기 위해서는 <% %>태그 내부에 기술해야 하며 
  변수에 저장된 값이나 함수의 결과값을 출력하기 위해서는 <%= %>태그를 사용해야 합니다. 
