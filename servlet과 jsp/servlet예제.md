[텍스트 박스에 입력된 값 얻어오기](#텍스트-박스에-입력된-값-얻어오기)

[직업과 관심분야 선택하기](#직업과-관심분야-선택하기)





## 텍스트 박스에 입력된 값 얻어오기

| 파일이름     | 설명                                                         |
| ------------ | ------------------------------------------------------------ |
| param.js     | 아이디와 나이는 반드시 입력되어야 하고 나이는 수치 데이터만 입력 가능하도록 유효성을 체크하는 자바스크립트 파일이다. |
| 05_param.jsp | param.js 파일을 포함시켜 아이디와 나이에 유효한 데이터가 입력되었는지 점검하여 서블릿으로 입력된 값을 받아 전송한다. |
| ParamServlet | HTML 문서의 입력 양식에 입력한 내용을 처리하는 서블릿 클래스이다. |



- param.js

```java
function check(){
	if(document.frm.id.value == "") {
		alert("아이디를 입력해주세요.");
		document.frm.id.focus();
		return false;
	} else if (document.frm.age.value ==""){
		alert("나이를 입력해주세요.")
		document.frm.age.focus();
		return false;
	}else if(inNan(document.frm.age.value)){
	alert("숫자로 입력해주세요.")
	 	document.frm.age.focus();
	 	return false;
	}else{
		return true;
	}
		}
	
```

- 05_param.jsp


```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>서블릿</title>
<script type="text/javascript" src="param.js"></script>
</head>
<body>
<form method="Get" action="ParamServlet" name="frm">
아이디 : 		<input type = "text" name = "id"><br>
나 &nbsp; 이 : <input type = "text" name = "age"><br>
 <input type="submit" value="전송" onclick="return check()">
</form>
</body>
</html>
```

- ParamServlet

```java
package unit05;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class ParamServlet
 */
public class ParamServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ParamServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		
		String id = request.getParameter("id");
		int age = Integer.parseInt(request.getParameter("age"));
		
		
		PrintWriter out = response.getWriter();
		out.print("<html><body>");
		out.println("당신이 입력한 정보입니다.<br>");
		out.println("아이디: ");
		out.println(id);
		out.println("<br>나이: ");
		out.println(age);
		
		//자바 스크립트로 이전 페이지로 이동하는 링크를 만들어 줌
		
		out.println("<br><a href='javascript:history.go(-1)'>다시</a>");
		out.print("</body></html>");
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
```



---

## 직업과 관심분야 선택하기



| 파일 이름          | 설명                                                         |
| ------------------ | ------------------------------------------------------------ |
| 10_select.jsp      | 콤보 박스와 리스트 박스로 원하는 항목을 선택하는 폼 양식을 갖는다. |
| SelectServlet.java | HTML 문서에서 선택된 항목을 얻어와 출력하는 서블릿 클래스이다. |



- 10_select.jsp

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1> 직업과 관심분야 선택하기</h1>
 <form method =  "get" action = "SelectServlet">
 	 <span style = "float: left; margin-right : 20px">
 	 <label for = "job">직업</label>
 	 <select id="job" name="job" size="1">
 	 	<option value="">선택하세요</option>
 	 	<option value="학생">학생</option>
 	 	<option value="컴퓨터/인터넷">컴퓨터/인터넷</option>
 	 	<option value="언론">언론</option>
 	 	<option value="공무원">공무원</option>
 	 	<option value="군인">군인</option>
 	 	<option value="서비스업">서비스업</option>
 	 	<option value="교육">교육</option>
 	 	</select>
 	</span>
 	
 	<label for="interest" style="float:left;">관심분야</label>
 	<select id="interest" name="interest" size='5' multiple="multiple">
 	<option value="정치">&nbsp;정치</option>
 	<option value="경제">&nbsp;경제</option>
 	<option value="사회">&nbsp;사회</option>
 	<option value="건강">&nbsp;건강</option>
 	<option value="심리">&nbsp;심리</option>
 	<option value="스포츠">&nbsp;스포츠</option>
 	<option value="문화">&nbsp;문화</option>
 	<option value="국제">&nbsp;국제</option>
 	</select>
 	<br><br>
 	<input type="submit" value="전송" style="float:right;margin-right:50px">
 	
 
 </form>
</body>
</html>
```

- SelectServlet.java

```java
package unit10;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Servlet implementation class SelectServlet
 */
public class SelectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String job = request.getParameter("job");
		String interests[] = request.getParameterValues("interest");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<html><body>");
		out.println("당신이 선택한 직업 : <b>");
		out.print(job);
		
		out.println("</b><hr>당신이 선택한 관심분야 : <b>");
		if (interests == null) {
			out.print("선택한 항목이 없습니다.");
			}else {
				for (String interest : interests) {
					out.print(interest + "&nbsp;");
				}
		}
		out.println("<b><br><a href='javascript:history.go(-1)'>다시</a>");
		out.print("</body></html>");
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

```



출처 : 백견이불여일타
