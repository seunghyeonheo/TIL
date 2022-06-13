# spring boot 작동원리 (3)



## 의존성 주입



![img](https://blog.kakaocdn.net/dn/bMoy4S/btrt6udzggS/p74dRSFuNZu2xvHLrn2wk0/img.png)



POINT!

**의존성은 하나의 모듈(클래스, 패키지 등)이 다른 모듈을 사용할 때 만들어지며, new 키워드로 객체를 직접 생성합니다.**
**Spring Framework는 객체를 생성하고 객체 간의 의존성을 연결하는 역할을 대신 수행해 줍니다. 이것을 의존성 주입이라고 합니다.**
**Spring IoC 컨테이너는 객체를 생성, 관리하는 역할을 하는 컴포넌트 입니다.**
**Spring Bean은 Spring에 의해서 생송되고 관리되는 객체입니다.**



출처 : https://keepgoingforever.tistory.com/54?category=1251460