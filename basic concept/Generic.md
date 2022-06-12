# Generic

 **제네릭**은 클래스나 메서드에서 사용할 **자료형**을 인스턴스를 선언할 때 확정시키는 것을 뜻합니다. 메소드의 경우에는 호출 시점에 확정합니다. 즉 사용할 자료형을 컴파일 시에 타입 검사를 통해 확정합니다. 타입에 대한 안정성 확보와 형 변환의 번잡함을 줄여주고 **타입 변환을 효율적으로 진행**할 수 있도록 합니다. 

 

 제네릭의 기본적인 사용 방법은 앵글 브래킷<> 사이에 형식 매개변수(T)를 선언하여 사용하는 방법입니다 <T> 형식 매개변수로는 일반적으로 Type의 첫 글자인 T와 같이 대문자로 사용하고 추후에 필요한 자료형으로 대체됩니다. 자주 사용되는 형식매개변수는 표와 같습니다. 



![img](https://k.kakaocdn.net/dn/caDV4D/btrrF1MUV1n/ZUxRknwQ8cd5SG9idJ5BYK/img.png)



 그리고 제네릭은 여러 가지 자료형을 다루게 되는 Collection(컬렉션)에서 많이 사용됩니다. **제네릭을 사용하는 가장 큰 이유**는 다른 자료형을 변환할 때 **형 변환 시 발생하는 오류를 미리 방지**하고 의도치 않은 자료형으로 지정되는 것을 막아주는 역할을 하기 때문입니다. 예제를 통해 알아보겠습니다.

```
```

```
class Generic<T>{   //형식 매개변수 T와 함께 클래스 선언
    T t;

    public Generic(T t) {   //생성자
        this.t = t;
    }

    void setT(T t){     //세터
        this.t = t;
    }

    T getT(){       //게터
        return t;
    }
}
public class Practice {
    public static void main(String []args) {
        Generic<Integer> ge = new Generic<Integer>(100);        //Int형  인자로 전달
        Generic<String> ge1 = new Generic<String>("apple");     //String형 인자로 전달
        Generic<Object> ge2 = new Generic<Object>("banana");    //Object형 인자로 전달

        //게터로 값 출력
        System.out.println(ge.getT());
        System.out.println(ge1.getT());
        System.out.println(ge2.getT());
    }
}
```