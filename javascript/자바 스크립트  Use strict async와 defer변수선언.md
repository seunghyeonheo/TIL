## 자바 스크립트 : Use strict/ async와 defer/변수선언

- 자바스크립트는 Parser blocking resource 

![script 태그의 async와 defer 속성](https://blog.kakaocdn.net/dn/cIB6Uq/btqxvoCTSJe/SqP6t1hjK7hEJKk5KVzjFk/img.jpg)

async < defer 

- async와 defer는 스크립트를 다운로드 하는 동안 HTML이 중단되지 않는다. 

- async:  스크립트를 다운로드된 순서대로 실행

- defer : 스크립트를 정의된 순서대로 실행



- 자바 스크립트에서 변수를 선언할 수 있는 키워드는 'let' (var는 쓰지 않을 것!)

- hoisting: 제일 위로 선언을 끌어 올려주는 것 

- constants: 한 번 할당하면 절대 값이 바뀌지 않음
  어플리케이션이 실행되면 
  프로세스가 할당이 되고 
  프로세스 안에서 또 다양한 쓰레드가 동시에 돌아가면서 
  어플리케이션을 효율적으로 동작하도록 도와줌
  다양한 스레드들이 동시에 변수에 접근해서 값을 변경할 수도 있기 때문에 
  값이 변하지 않는 것을 사용하는게 좋음

[참조링크]: https://www.youtube.com/watch?v=OCCpGh4ujb8&amp;list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&amp;index=3	""드림코딩""

til