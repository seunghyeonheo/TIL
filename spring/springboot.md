# springboot



 \5. 스프링 부트 프로젝트 살펴보기
  
 (1) 프로젝트의 주요 파일 및 구조
 

  ■ src/main/java 
  \- 자바소스 폴더
 
 ■ SampleApplication 
 \- 애플리케이션을 시작할 수 있는 main메소드가 존재하는 스프링 구성
  메인 클래스
 
 ■ src/main/resources/static
 \- HTML, 스타일 시트, 자바스크립트, 이미지 등의 정적 리소스 폴더

 ■ application.properties 
 \- 애플리케이션 및 스프링의 설정 등에서 사용할 여러 가지 프로퍼티(property)정의

 ■ Project and External Dependencies :
 \- Gradle에 명시된 프로젝트의 필수 라이브러리 모음  


 ■ src 
 \- JSP등 리소스 디렉토리

 ■ build.gradle  
 \- Gradle 빌드 명세, 프로젝트에 필요한 라이브러리 관리, 빌드 배포 설정
 \- 스프링 부트의 버전을 명시

 \- 자바 버전 명시

 \- 의존성 옵션

  implementation: 의존 라이브러리 수정시 본 모듈까지만 재빌드(재컴파일)

  api: 의존 라이브러리 수정시 본 모듈을 의존하는 모듈들도 재빌드(재컴파일)

  compileOnly: compile 시에만 빌드하고 빌드 결과물에는 포함하지 않음

  runtime(실행)시 필요없는 라이브러리인 경우 

  runtimeOnly: runtime 시에만 필요한 라이브러리인 경우

  providedRuntime: 실행시 제공되는 library

  testImplementation: 테스트시 관련 library 제공

 
(2) SampleApplication 클래스
 \- 스프링 부트 애플리케이션의 구성과 실행을 담당하는 중요한 클래스이다.
 \- 스프링 부트의 장점 중 하나는 자동구성으로 기존의 복잡하고 다양한 스프링
  설정을 제거하고 최소한의 설정으로 바로 실행할 수 있는 애플리케이션을
  만들어 준다는 점이다.
\------------------------------------------------------------------------------------ 
 package com.example.sample;

 

 import org.springframework.boot.SpringApplication;

 import org.springframework.boot.autoconfigure.SpringBootApplication;

 

 **@SpringBootApplication**

 public class SampleApplication {

 

**public static void main(String[] args) {**

 **SpringApplication.run(SampleApplication.class, args);**

**}**

 }
\------------------------------------------------------------------------------------
\- @SpringBootApplication는 스프링 부트의 핵심 어노테이션이며,  
  세 개의 스프링 부트 어노테이션으로 구성되어 있다.

 @EnableAutoConfiguration : 스프링의 다양한 설정을 자동으로 구성한다.
 @ComponentScan : 컴포넌트 클래스를 검색하고 검색된 컴포넌트 및 클래스를
               스프링 애플리케이션 컨텍스트에 등록한다.
 @Configuration : 자바기반 설정 파일임을 의미한다.(XML설정대신 사용)

\- main메소드는 스프링 부트의 SampleApplication.run() 메소드를 사용하여 스프링
 부트 프로젝트 애플리케이션을 실행할 수 있게 한다.

 

(3) build.gradle
\- Gradle로 생성된 프로젝트의 빌드를 관리하는 파일이다.
\----------------------------------------------------------------------------

plugins {

​    id 'org.springframework.boot' version '2.4.3'**//스프링부트 버전**

​    id 'io.spring.dependency-management' version '1.0.11.RELEASE'

​    id 'java'

​    id 'war'

}

 

group = 'com.example'

version = '0.0.1-SNAPSHOT'

sourceCompatibility = '1.8'

 

repositories {

​    mavenCentral() **//라이브러리 받아오는 저장소 설정**

}

 **//필요한 라이브러리 의존성을 설정한다. 라이브러리 추가할때마다 변경된다.**

dependencies {

​    implementation 'org.springframework.boot:spring-boot-starter-web'

​    providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'

​    testImplementation 'org.springframework.boot:spring-boot-starter-test'

}

 

test {

​    useJUnitPlatform()

}

 

\----------------------------------------------------------------------------

(4) 서버 재실행
 \- sts 왼쪽 하단 [Boot Dashboard]에서 프로젝트 선택후 시작아이콘으로 한다.
  ![img](http://lectureblue.pe.kr/ckstorage/images/fw/spring_boot/01/3.jpg)
 \- [Boot Dashboard] 안보이면 상단에 다음 아이콘을 클릭하여 나타낸다.

  ![img](http://lectureblue.pe.kr/ckstorage/images/fw/spring_boot/01/4.jpg)