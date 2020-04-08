# SendAppServer

## 소개
```
Node.js를 이용해서 Android 앱에서 등록,삭제 한 대기번호를 받아서 보여주는 웹 어플리케이션입니다.

프로젝트 기간 : 2019.03.13 ~ 2020.03.16
프로젝트 인원 : 1인
```
![cafe](https://user-images.githubusercontent.com/45528487/78781616-8edf0280-79db-11ea-8dd3-7b3bb69b4c0c.jpg)
![web](https://user-images.githubusercontent.com/45528487/78781619-90a8c600-79db-11ea-87bf-99c157178bb1.png)

## 목표

```
1. RestAPI를 활용한 통신
2. 대기번호 처리
```
## 개발 및 운영 환경

```
- Node.js version : 10.4.1
- jquery.js : 1.11.1
- view engine : ejs
- 화면 템플릿 : bootstrap freelancer
- 개발 tool : Visual Studio Code 1.41.1 
- Server : Node : Windows 10 local node server
- 형상관리 : Git / Github
```

## 프로젝트 트리
```
┌── css
│   ├── freelancer.css
│   ├── freelancer.min.css
├── views
│   ├── 서버 구동.bat
│   ├── 서버 다운.bat
├── views
│   ├── index.ejs
├── .gitignore
├── README.md
├── package-lock.json
└── server.js
```

## 사용한 모듈

```
## Backend

"express" : "4.17.1"
"socket.io": "2.3.0"
"socket.io-adapter": "1.1.2"
"socket.io-client": "2.3.0"
"pm2" : "4.2.3"

## Front

"ejs" : "3.0.1"
"bootstrap" : "3.3.4"
```
