# JSP

- Java server page 의 줄임말로 자바로 서버 페이지를 작성하기 위한 언어
- HTML과 JSP태그로 구성되어 화면을 작성하는 데 유리한 웹프로그래밍 기술
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

