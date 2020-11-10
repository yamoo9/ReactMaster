(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{277:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"firebase-인증-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firebase-인증-auth"}},[s._v("#")]),s._v(" Firebase 인증(Auth)")]),s._v(" "),a("p",[s._v("Firebase 인증(Authentication) 서비스는 애플리케이션을 이용하는 사용자를 손쉽게 인증하는 다양한 방법을 제공합니다.")]),s._v(" "),a("iframe-wrapper",{attrs:{src:"https://www.youtube.com/embed/8sGY55yxicA"}}),s._v(" "),a("h2",{attrs:{id:"react-firebase-인증"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-firebase-인증"}},[s._v("#")]),s._v(" React Firebase 인증")]),s._v(" "),a("p",[s._v("React 또는 React Native 앱에서 Firebase 인증(Authentification)을 쉽게 통합 할 수 있습니다.")]),s._v(" "),a("h2",{attrs:{id:"auth-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth-컴포넌트"}},[s._v("#")]),s._v(" Auth 컴포넌트")]),s._v(" "),a("p",[s._v("React Firebase Auth는 다음의 컴포넌트를 제공합니다.")]),s._v(" "),a("ul",[a("li",[s._v("FirebaseAuthProvider")]),s._v(" "),a("li",[s._v("FirebaseAuthConsumer")]),s._v(" "),a("li",[s._v("IfFirebaseAuthed")]),s._v(" "),a("li",[s._v("IfFirebaseAuthedAnd")]),s._v(" "),a("li",[s._v("IfFirebaseUnAuthed")])]),s._v(" "),a("h2",{attrs:{id:"설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/firebase",target:"_blank",rel:"noopener noreferrer"}},[s._v("firebase"),a("OutboundLink")],1),s._v(" JS 클라이언트를 설치합니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i firebase\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@react-firebase/auth",target:"_blank",rel:"noopener noreferrer"}},[s._v("@react-firebase/auth"),a("OutboundLink")],1),s._v(" 패키지를 설치합니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i @react-firebase/auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구성"}},[s._v("#")]),s._v(" 구성")]),s._v(" "),a("p",[s._v("아래 URL의 "),a("code",[s._v("프로젝트")]),s._v("를 "),a("strong",[s._v("프로젝트 이름으로 변경")]),s._v("해 브라우저 주소 창에 입력하면 Firebase 구성 정보를 확인할 수 있습니다.")]),s._v(" "),a("blockquote",[a("p",[s._v("https://console.firebase.google.com/project/프로젝트/settings/general")])]),s._v(" "),a("base-img",{staticStyle:{"max-width":"690px","margin-left":"-15px"},attrs:{src:"firebase-sdk-snippet.jpg"}}),s._v(" "),a("p",[a("strong",[s._v("Firebase 구성(configuration)")]),s._v(" 정보 구성은 다음과 같습니다.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" firebaseConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apiKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"API-키-정보"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  projectId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"프로젝트-아이디"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  authDomain"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"인증-도메인-이름"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  databaseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"데이터베이스-이름-URL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  storageBucket"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"스토리지-버킷"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  messagingSenderId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"메시징-샌더-아이디"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  appId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"앱-아이디"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v('"프로젝트에 앱이 없습니다."라고 표시되면?')]),s._v(" "),a("p",[s._v("Firebase 구성(Config) 정보를 얻기 위해 앱을 생성해야 합니다. 웹 앱 생성 버튼(</>)을 눌러 앱을 생성하세요.")]),s._v(" "),a("base-img",{staticStyle:{"max-width":"900px","margin-left":"0"},attrs:{src:"firebase-app-nothing.png"}})],1),s._v(" "),a("h2",{attrs:{id:"사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[s._v("#")]),s._v(" 사용법")]),s._v(" "),a("h3",{attrs:{id:"firebase-firebase-auth-호출"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firebase-firebase-auth-호출"}},[s._v("#")]),s._v(" firebase, firebase/auth 호출")]),s._v(" "),a("p",[a("code",[s._v("firebase/app")]),s._v(", "),a("code",[s._v("firebase/auth")]),s._v(" 패키지를 호출합니다.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" firebase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'firebase/app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'firebase/auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"firebaseauthprovider-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firebaseauthprovider-컴포넌트"}},[s._v("#")]),s._v(" FirebaseAuthProvider 컴포넌트")]),s._v(" "),a("p",[s._v("FirebaseAuthProvider 컴포넌트는 "),a("code",[s._v("firebase")]),s._v(" props와 "),a("code",[s._v("firebaseConfig")]),s._v(" 구성을 전개한 props를 전달 받습니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FirebaseAuthProvider")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("firebase")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("firebase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token spread"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("firebaseConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n  ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Firebase Auth 정보를 공급 받을 컴포넌트 트리 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FirebaseAuthProvider")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"firebaseauthconsumer-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firebaseauthconsumer-컴포넌트"}},[s._v("#")]),s._v(" FirebaseAuthConsumer 컴포넌트")]),s._v(" "),a("p",[s._v("FirebaseAuthConsumer 컴포넌트는 로그인 유무, 사용자, 공급자 ID 등의 정보를 공급 받아 컴포넌트 안에서 사용할 수 있도록 합니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FirebaseAuthConsumer")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n  ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("isSignIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" providerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 로그인 유무, 사용자, 공급자 ID 확인")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" authInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("isSignIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" providerID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 인증 사용자 정보 출력")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("pre")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("authInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("pre")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FirebaseAuthConsumer")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("Context API의 공급자, 수용자 사용법과 유사합니다.")])]),s._v(" "),a("h3",{attrs:{id:"iffirebaseauthedand-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iffirebaseauthedand-컴포넌트"}},[s._v("#")]),s._v(" IfFirebaseAuthedAnd 컴포넌트")]),s._v(" "),a("p",[s._v("IfFirebaseAuthedAnd 컴포넌트는 이름이 의미하는대로 Firebase 인증 사용자인지 검증 후, 결과를 처리합니다.\n"),a("code",[s._v("filter")]),s._v(" props를 통해 특정 조건에 따라 결과 값을 반환할 수 있고 결과 값이 참일 경우에만 화면에 렌더링 합니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IfFirebaseAuthedAnd\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 필터링")]),s._v("\n  filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" providerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 사용자 이메일 정보가 없다면?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false 반환")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 사용자 이메일 정보가 있다면?")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 공급자 ID 값이 'anonymous'가 아니고, ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 사용자 이메일에 '@companyname.com'가 포함되어 있다면")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true 반환, 반대의 경우는 false 반환")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      providerId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"anonymous"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n      user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@companyname.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* FirebaseAuthConsumer 컴포넌트와 동일한 사용법 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" isSignedIn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" providerId "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// JSX")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IfFirebaseAuthedAnd")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);