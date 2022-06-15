# EL (Expression Language)



1.  JSP 내부 객체에 대한 EL 객체 
    - pageContext    : PageContext 객체 
    - pageScope     : page 영역에 포함된 객체 
    - requestScope   : request 영역에 포함된 객체 
    - sessionScope   : session 영역에 포함된 객체 
    - applicationScope : application 영역에 포함된 객체 
      
    - param        : HTTP의 파라미터들 
    - paramValues    : 하나의 파라미터의 값들 
      
    - header        : 헤더 정보들 
    - headerValues   : 하나의 헤더의 값들 
      
    - cookie        : 쿠키들 
    - initParam      : 컨텐츠의 초기화 파라미터들 -



## el객체사용 실습

<img src="EL (Expression Language).assets/실습1.jpg" alt="실습1" style="zoom:50%;" />

<img src="EL (Expression Language).assets/실습2.jpg" alt="실습2" style="zoom: 50%;" />

<img src="EL (Expression Language).assets/3.jpg" style="zoom: 50%;" />

​										<elRequest.jsp>

<img src="EL (Expression Language).assets/4.jpg" alt="4" style="zoom: 50%;" />

​										<elParam.jsp>



