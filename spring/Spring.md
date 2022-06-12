# Spring

## MVC 모델

MVC 개발

1. JSP+JavaBeans개발과 MVC 모델 구조

 	(1) Model 1(JSP+JavaBeans)의 구조 

![](C:\Users\seung\Pictures\mvc\모델1구조.jpg)

 	(2) Model 2(MVC) 구조

![](C:\Users\seung\Pictures\mvc\모델2구조.jpg)

	(3) Controller의 처리순서 
	
		Browser ---> Servlet(Controller) 

​         1.HTTP 요청 받음, doGet(), doPost()메소드 자동호출 

​         2.클라이언트가 요구하는 기능을 분석(방명록의 경우 글쓰기등) 

​         3.요청한 비즈니스 로직처리하는 Model사용,Business Logic Class 

​         4.결과를 request 또는 session의 setAttribute()메소드를 사용하여 저장 

​         5.알맞은 뷰 선택 

​         6.뷰로 포워딩(또는 리다이렉트),jsp 페이지로 이동 

​        ↙ 

​       JSP 

​      ↙ 

​    HTTP 응답 

   ↙ 

 Browser 

---



2. MVC App 개발 순서 

(1) JSP + JavaBeans 개발 순서 

  ① DBMS 설정 
  ② DTO(Data Transfer Object) Class 제작 
  ③ DAO(Data Access Object) Class 제작 
  ④ Service Class 제작 
  ⑤ Service/DAO test 
  ⑥ JSP 생성 연동 


(2) MVC Web Application 개발 순서 

  ① DBMS 설정 
  ② DTO(Data Transfer Object) Class 제작 
  ③ DAO(Data Access Object) Class 제작 
  ④ Service Class 제작 
  ⑤ Service/DAO test 
  ⑥ Servlet Controller 제작 
  ⑦ Action Interface 제작 
  ⑧ Action 구현 Class 제작 
   . Service Class 연동 

<<<<<<< HEAD
  ⑨ JSP 생성 연동 



출처 : 멀티캠퍼스 강의
=======
  ⑨ JSP 생성 연동 
>>>>>>> f53c224dd22184ef53870294432a7e0cd88b6779
