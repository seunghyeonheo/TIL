# ajax 비동기 통신 구현 (feat.get방식)



[회원정보를 저장한 User 테이블의 id,와 비밀번호를 확인 후 비동기통신으로 요청받은 결과를 alert창에  띄우기]

```
//회원정보를 저장한 User 테이블의 id,와 비밀번호를 확인 후 비동기통신으로 요청받은 결과를 alert창에  띄우기

MySQL에 테이블을 생성하여 데이터를 저장
Mybatis xml파일을 작성하여 작성한 데이터를 전달
Mapper 인터페이스를 통해 데이터 처리 로직 구현
Service인터페이스와 ServiceImpl 클래스를 통해 로직 처리
Controller를 통해 브라우저의 요청을 받고 뷰페이지(혹은 데이터도 가능
,데이터를 리턴할 경우에는 RequestBody객체 사용해야 함)를 리턴함

// 다음의 처리는 Cotroller에서 logincheck 메소드를 구현하고 id와 passwd를 파라미터로 받아와 
map객체에 저장한 다음 logincheck메소드를 dto객체에 적용시켜 dto 를 리턴하고 
이를 fetch문을 통해 url로 전달하여 데이터를 받아와 alert창에 띄우는 방식을 적용함.
test.js파일에서 response는 Controller의 return=dto; 즉, dto객체를 받았음을 의미함.
response.json()을 통해 dto객체가 json화 됨.
*json : javascript object notation.
```





- UserDTO

```java
package com.example.sample;

public class UserDTO {
  private String id;
  private String passwd;
  private String name;
  
  

  @Override
  public String toString() {
    return "UserDTO [id=" + id + ", passwd=" + passwd + ", name=" + name + "]";
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getPasswd() {
    return passwd;
  }

  public void setPasswd(String passwd) {
    this.passwd = passwd;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
  
}
  
  
```





- UserService

  ```java
  package com.example.sample;
  
  import java.util.Map;
  
  
  public interface UserService {
   UserDTO loginCheck(Map map);
  
  
  }
  ```

  

- UserServiceImpl

  ```java
  package com.example.sample;
  
  import java.util.Map;
  
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.stereotype.Service;
  
  @Service("com.example.sample.UserServiceImpl")
  public class UserServiceImpl implements UserService {
  
    @Autowired
    private UserMapper mapper;
  
    @Override
    public UserDTO loginCheck(Map map) {
      // TODO Auto-generated method stub
      return mapper.loginCheck(map);
    }
  
  
  }
  ```

  

- UserMapper

  ```java
  package com.example.sample;
  
  import java.util.Map;
  
  import com.example.sample.UserDTO;
  
  public interface UserMapper {
  
    UserDTO loginCheck(Map map);
    
  }
  
  ```

  



- UserController 파일

```java
package com.example.sample;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
  
  private static final Logger log = LoggerFactory.getLogger(UserController.class);
 
  @Autowired
  @Qualifier("com.example.sample.UserServiceImpl")
  private UserService service;
  
  
  @GetMapping("/")
  public String home() {
    
    return "test1";
  }

  
  @GetMapping("/logincheck") 
  @ResponseBody
  public UserDTO loginCheck(@RequestParam("id") String id,
      @RequestParam("passwd") String passwd
){

    Map map = new HashMap();
    UserDTO dto = new UserDTO();
    
    map.put("id", id);
    map.put("passwd", passwd);
    
   
    dto = service.loginCheck(map);
    
   System.out.println(dto.toString()); 
  return dto;
}
}
    
```

- user.xml파일

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">


<mapper namespace="com.example.sample.UserMapper">


	<select id="loginCheck" parameterType="Map" resultType="com.example.sample.UserDTO">
		select
		* from user
		where id = #{id}
		and passwd = #{passwd}
	</select>

</mapper>
```



- test1.jsp파일

  ```java
  <%@ page language="java" contentType="text/html; charset=UTF-8"
      pageEncoding="UTF-8"%>
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
  <title>Insert title here</title>
      <meta charset="UTF-8">
      <title>Company</title>
   
      <!-- 반응형 웹 만들기 -->
      <!-- 1. 모바일용 css -->
      <link rel="stylesheet" href="/css/test1_2.css" media="(max-width:600px)">
   
      <!-- 2. 데스크탑용 외부 스타일시트 적용 -->
      <link rel="stylesheet" href="/css/test1_1.css" media="(min-width:600px)">
  
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  	<script src="/js/test.js" type="text/javascript"></script>
  	
  	<script type="text/javascript">
  
  	</script>
  
  </head>
  <body>
      
      <div id="page">
   
          <header>
              <div id="logo">
                  <img src="/imgs/logo.png" alt="Logo">
              </div>
   
              <div id="top_menu">
                  <a href="#">HOME</a> | 
                  <a href="#">NOTICE</a> |
  <!--                 <a href="#">LOGIN</a> | -->
                  <a href="#">JOIN</a> | 
                  ID <input class="login" id="id"> PW <input type="password" class="login" id="pw"> <button id="login_btn">LOGIN</button>
              </div>
   
              <nav>
                  <ul>
                      <li><a href="#">COMPANY</a></li>
                      <li><a href="#">PRODUCT</a></li>
                      <li><a href="#">CUSTOMER</a></li>
                      <li><a href="#">SERVICE</a></li>
                      <li><a href="#">RECRUIT</a></li>
                  </ul>
              </nav>
   
          </header>
   
          <article id="content">
              <section id="main">
                  <img id="main_img" src="/imgs/main_img.png" alt="main img" >
              </section>
              <section>
                  <ul id="banner">
                      <li><a href="#"><img src="/imgs/banner1.png" alt="banner1"></a></li>
                      <li><a href="#"><img src="/imgs/banner2.png" alt="banner2"></a></li>
                  </ul>
   
              </section>
              <section>
              	<div>${message}</div>
              </section>
   
          </article>
   
          <footer>
              <img id="address_img" src="/imgs/address.png" alt="address">
          </footer>
   
      </div>
  </body>
  </html>
  ```

  

- test.js파일

  ```java
  $(function() {
  	$("#login_btn").click(function() {
  
  		let id = $("#id").val();
  		let passwd = $("#pw").val();
  
  		alert(id + ":" + passwd);
  		
  		let url = 
  		"http://localhost:8000/logincheck?id=" + id + "&passwd=" + passwd;
  
  		fetch(url)
  			.then((response) => response.json())
  			.then((data) => alert(data.name + "login ok Status Success"))
  	
  })
  })
  
  ```

  