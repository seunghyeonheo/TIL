# properties class



Java는 알면 참 편한 기능들이 많습니다. 그중 Properties 라는 클래스인데요. 

이 클래스는 Windows의 INI 파일과 같은 기능을 합니다. 

DB에 대한 연결정보를 파일로 저장해 놓고 사용하는 용도로 가장 많이 쓰이는데요. 

이런 경우 db.proerties라는 파일명으로 자주 작명됩니다.



Java의 새로운 프로젝트를 생성하고 main 함수가 있는 클래스를 EntryMain이라고 한다면 프로젝트가 다음과 같이 구성되어 있다고 합시다. 물론 이 구성은 실제 제가 테스트한 것 입니다.

![img](http://www.gisdeveloper.co.kr/wp-content/uploads/2018/04/java_properties.png)

위의 구성을 보면 config에 db.properties 라는 파일도 보입니다. 이 파일에 db에 대한 연결정보를 가지고 있으며 내용은 다음과 같습니다.

```
driver=org.postgresql.Driver
url=jdbc:postgresql://localhost:5432/postgres
username=postgres
password=#goodday#
```



출처: http://www.gisdeveloper.co.kr/?p=5160