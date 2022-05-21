# Servlet
[웹 프로그래밍이란?](#웹-프로그래밍이란?)

[Servlet의 의미](#Servlet의-의미)

[서블릿 프로그램 만들기](#서블릿-프로그램-만들기)

[서블릿 클래스의 구조 ](#서블릿-클래스의-구조)





## 웹 프로그래밍이란?


  |                     | 기능                                          |
  | ------------------- | --------------------------------------------- |
  | 웹서버              | 클라이언트의 요청을 처리하는 곳               |
  | 웹어플리케이션      | 웹을 기반으로 실행되는 프로그램(어플리케이션) |
  | 웹어플리케이션 서버 | 웹 어플리케이션을 제작하는 과정               |
  | 웹프로그래밍        | 웹 어플리케이션을 제작하는 과정               |

  

## Servlet의 의미

- Servlet은 server+applet의 합성어로 서버에서 실행되는 Applet이란 의미이다.

- 자바를 이용하여 웹에서 실행되는 프로그램을 작성하는 기술을 말한다. 

- Servlet은 자바 클래스 형태의 웹 어플리케이션을 말하는데, 
브라우저를 통해 자바 클래스가 실행되도록 하기 위해서는 javax.servlet.http패키지에서
제공하는 HttpServlet 클래스를 상속받아 구현해야 한다. 

- HttpServlet 클래스를 상속받아 
만든 서브 클래스를 서블릿 클래스라고 한다. 서블릿 또한 자바 프로그램의 다른 클래스들처럼
자바 가상머신인 JVM에서 동작해야 하므로 클래스 파일이 생성되어야 한다. 
그래서 클래스의 형태로 작성한다. 

- HttpServelt은 웹 서비스가 가능한 웹 어플리케이션을 제작할 수 있도록 
  자바를 확장해 놓은 클래스로 톰캣을 설치하면 제공된다. 

  
  
## 서블릿 프로그램 만들기

```java
package unit01;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloServlet
 */
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//클라이언트에게 응답할 페이지 정보를 셋팅한다. 
		response.setContentType("text/html");
		//[Ctrl+Shift+O(알파벳)] : 자동 import
		PrintWriter out = response.getWriter();
		out.print("<html><body><h1>");
		out.print("Hello Servlet");
		out.print("</h1></body></html>");
		out.close();
	}

}
```



- 서블릿을 요청하기 위한 URL은 다음과 같습니다. 

  http://localhost:8080/web-study-02/hello

- http://localhost:8080 까지 입력하여 웹 서버까지 접근했다면 어떤 서비스를 받을지에 따라 그 이후에 기술되는 
  내용이 달라지는데, 이후에 기술하 문자열을 컨텍스트 패스(Context Path)라고 하고 
  이에 이해서 요청되는 웹 애플리케이션이 달라집니다. 
  컨텍스트 패스란 개념을 다시 정리해서 말하자면 웹 서버에서 제공하는 다야한 웹 애플리케이션을 구분하기 위해서 
  사용하는 것입니다. 

  


## 서블릿 클래스의 구조 

- 새롭게 서블릿 클래스를 정의하기 위해서는 javax.servlet.http 패키지에서 제공하는 HttpServlet 클래스를 상속받아 구현해야 하고 
  브라우저를 통해 외부에서 실행되기 때문에 접근 제한자는 반드시 public이어야 합니다. 

- 요청방식에 따라 doget() 혹은 doPost()가 호출되기 때문에 요청 방식에 맞추어서 HttpServlet 클래스의 doget() 혹은 dopost()를 오버라이딩해야 합니다. 이 메소드는 요청이 되면 호출되기 때문에 요청 메소드라고 불리기도 합니다. 

- doget()은 두 개의 매개 변수(HttpServletRequest, HttpServletResponse)를 갖습니다. HttpServletResponse는 요청 처리 결과를 클라이언트에게 되돌리기(response)위해 사용됩니다. doget()은 반드시 예외처리를 해주어야 하는데, 일반적으로 throws절을 이용해서 doGet메소드를 호출한 웹 서버에게 예외처리를 넘깁니다. 

- 하나이 서블릿이라도 get과 post방식에 따라 서로 다른 기능을 제공해야 하는 경우도 있기 때문에 그럴 경우에는 doGet()과 doPost()를 모두 오버라이딩해야 합니다. 

- HttpServletResponse객체인 response로 setContentType()메소드를 호출하여 클라이언트에게 응답할 페이지에 대한 환경 설정을 결정해 주어야 합니다. 응답 방식이 "text/html"로 지정되어 있으므로 text나 html로 보여주겠다는 의미입니다. 

- 결과로 출력할 내용이 한글일 경우 인코딩 방식을 지정하지 않으면 한글이 깨지는 현상이 나타납니다. 한글이 깨지지 않도록 하기 위해서는 인코딩을 "UTF-8"로 지정해야 합니다. 

  ```JAVA
  response.setContentType("text/html ; charset=UTF-8")
  ```
  
- response 객체의 인코딩 형태를 바꿔준 후에는 결과 출력을 위해 출력 스트림을 얻어오는 response.getWriter() 메소드를 호출해야 합니다. 순서가 바뀌면 인코딩 방식이 지정되지 않은 response 객체에서 출력 스트림을 얻게 되므로 반드시 response.setContentType("text/html; charset=UTF-8")문장이 먼저 실행된 후에 response.getWriter()메소드로 출력 스트림 객체를 얻어 와야 합니다. 

  [^스트림이란]: 사용자가 입력한 데이터를 메모리에 저장하는 과정을 입력이라 하고 메모리에 저장된 데이터를 사용자가 볼 수 있도록 하는 과정을 출력이라고 하는데 입출력 과정이 가능하도록 하는 객체를 자바에서는 스트림이라고 합니다.

- 출력 스트림인 PrintWriter 객체를 HttpServletResponse 객체의 getWriter()메소드로부터 얻어냅니다. 
  PrintWriter는 파일 입출력을 위해서 제공해주는 자바 클래스로서 java.io 패키지에 정의되어 있습니다. 그래서 이 클래스를 사용하려면 java.io.PrintWriter를 import하고 사용해야 합니다. 

- PrintWriter 객체인 out의 출력 메소드인 println을 통해 결과를 사용자에게 출력할 수 있습니다. 사용자에게 전송된 내용은 브라우저를 통해 출력되기 때문에 결과를 HTML태그 형태로 만들어서 보내야 합니다. 



 




  출처 : 백견불여일타 JSP&Servlet(성윤정 저)