# EDDU SSAFY(에뜌 사피)
비대면 수업을 위한 화상회의 사이트

## 팀원 소개
최진욱 (팀장)
- BACKEND
- JWT
- WebRTC

남현우
- BACKEND
- API
- WebRTC

강석민
- BACKEND
- AWS
- WebRTC

최영선
- FRONTEND
- 
- WebRTC

김지수
- FRONTEND
- 
- WebRTC

박무창
- FRONTEND
- 
- WebRTC

## Git 컨벤션 개요
Conflict를 방지하고, 효과적이고 명확한 협업을 진행하고자 Git-Flow 브랜치 전략을 도입하여 계층별 브랜치를 관리했습니다.

### Git Flow
```
master   
└ develop  
  ├ front - feature/FE-기능...  
  └ back - feature/BE-기능...
```
  
master : 운영 서버로 배포하기 위한 브랜치
develop : 다음 출시 기능을 개발하는 브랜치
front : 프론트엔드 개발하는 브랜치
back : 백엔드를 개발하는 브랜치
feature : 세부 기능을 개발하는 브랜치

feature- 이후에 어떤 기능을 개발하는지를 붙여주었습니다.

### Commit Convention
커밋컨벤션...? 우리 이거 어케하실? 걍 삭제할까

## 프로젝트 개요
<div align=center><h1>📚 STACKS</h1></div>

<div align=center>
BACKEND
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<br>
SERVER??? -> 뭐라 쓰지
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white">
<img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black">  
<br> 
FRONTEND
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">       
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<br>
Collaboration? -> 얘는 뭐라고 할까
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<br>

아님 걍 한글은 다 빼던가
</div>


- **진행기간** : 2022.07.11 ~ 2022.08.19 (6주)
- **목표**
    - WebRTC 기술을 사용하여 비대면 화상 교육 플랫폼을 만듭니다.
    - 기존 화상 회의 서비스에 여러 기능들을 더해 선생님과 학생 모두 만족할 수 있는 교육용 플랫폼을 목표로 합니다.
    - 서비스를 사용하는 학생들에게 공부에 집중할 수 있는 요소들을 추가하여 공부에 흥미를 잃지 않게 만드는 서비스를 제공합니다.
- 🗺**와이어프레임**(figma)
![image](/uploads/f8b950f63c157ff6f686f34a81eceb63/image.png)

- **ERD**
사진 첨부
- **화면정의서**
다 넣을 것인지?
- **시퀀스 다이어그램**
다 넣을 것인지?

## 프로젝트 소개
### 기획 배경
### 기획 의도
### 대상 사용자
### 기대 효과

## 주요 기능
완성되면 사진이나 영상 넣기
### 방 리스트, 방 선택
### 화면 공유 (선생님 강의) 학생도?
- 카메라
- 마이크
- 채팅?

### 문제집 선택 (선생님)
### 학생 문제 풀이 (문제 화면, 문제 풀이 화면)
### 학생 점수 표시 & 순위 표시 기능
### 학생 칭호 표시
### 학생 상벌점 기능?

## 설치 가이드
- Frontend
```
$ cd frontend
$ npm i
$ npm run serve
```
- Backend
```
# API server 
$ cd Backend
$ gradle wrap # gradle wrapper 없을 경우 실행
$ ./gradlew clean build
$ sudo java -jar "/home/ubuntu/S07P12C111/backend-java/ssafy-web-project-1.0-SNAPSHOT.jar"

# openvidu KMS
$ docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:2.22.0
```

## 🛠프로젝트 빌드
- 

## ⚙ 시스템 환경 및 구성
- OS: Windows10, Linux
- Backend Framework: Spring Boot 2.7.1
- Frontend Framework: React 18.2.0
- DB: mysql Ver 8.0.30-0ubuntu0.20.04.2 (Ubuntu)
- WAS: Gradle
- JVM: openJDK (1.8.0_192)
- Node.js: 16.13.1
- WebRTC: openVidu 2.20.0
- Docker: 20.10.12
- WEB: Nginx (1.18.0)

## 프로젝트 후기
- 최진욱:
- 남현우:
- 강석민:
- 최영선:
- 김지수:
- 박무창: 

## 🎞최종산출물(시연 영상)
영상 링크?

