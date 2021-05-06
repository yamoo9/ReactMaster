(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{279:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"이미지-폰트-파일-추가-💰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이미지-폰트-파일-추가-💰"}},[s._v("#")]),s._v(" 이미지, 폰트 파일 추가 💰")]),s._v(" "),a("p",[s._v("Webpack을 사용하면 이미지, 글꼴과 같은 "),a("a",{attrs:{href:"./cra-public-directory"}},[s._v("정적 에셋")]),s._v("을 사용하는 방법이 "),a("a",{attrs:{href:"./cra-add-css-style"}},[s._v("CSS 스타일 추가")]),s._v(" 방법과 유사합니다.\n이 방법은 번들에 해당 파일을 포함하도록 Webpack에 지시합니다.")]),s._v(" "),a("p",[a("strong",[s._v("Logo.js")])]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logoImagePath "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./assets/images/logo.png'")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logoImagePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '/logo.23917j18.png'")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Logo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("logoImagePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("이듬(E.UID)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"데이터-uris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터-uris"}},[s._v("#")]),s._v(" 데이터 URIs")]),s._v(" "),a("p",[s._v("CSS 가져오기와 달리 파일 가져오기는 문자열 값을 제공합니다. 이 값은 코드에서 참조 할 수 있는 경로(path) 문자열을 출력합니다.\n다만, 서버 요청 횟수를 줄이기 위해 10,000 바이트(bytes) 미만 크기의 파일을 가져올 경우 경로 문자열 대신 "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs",target:"_blank",rel:"noopener noreferrer"}},[s._v("데이터 URIs"),a("OutboundLink")],1),s._v("가 반환 됩니다.")]),s._v(" "),a("p",[s._v("데이터 URIs로 반환은 "),a("code",[s._v("bmp")]),s._v(", "),a("code",[s._v("gif")]),s._v(", "),a("code",[s._v("jpe?g")]),s._v(", "),a("code",[s._v("png")]),s._v(" 확장자를 가진 파일에 적용됩니다.")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[s._v("SVG 파일은 알려진 문제("),a("a",{attrs:{href:"https://github.com/facebook/create-react-app/issues/1153",target:"_blank",rel:"noopener noreferrer"}},[s._v("#1153"),a("OutboundLink")],1),s._v(")로 인해 데이터 URIs 대상에서 제외됩니다.")])]),s._v(" "),a("p",[s._v("이미지, 폰트 파일 추가 방법을 사용하면 빌드 시, Webpack이 이미지를 빌드 폴더로 복사하고 올바른 경로를 제공합니다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Data URIs 설정 변경")]),s._v(" "),a("p",[a("a",{attrs:{href:"./cra-env"}},[s._v("환경 변수")]),s._v("로 "),a("code",[s._v("IMAGE_INLINE_SIZE_LIMIT")]),s._v(" 값을 설정하면 다른 값을 사용할 수 있습니다. (기본 값: 10000)")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .env")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 기본적으로 10,000 바이트 보다 작은 이미지는 base64 데이터 URIs로 인코딩 되고 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CSS 또는 JS 빌드 출력 파일에 포함됩니다. 크기 제한(바이트)를 제어하려면 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 이 옵션을 설정합니다. 0으로 설정하면 비활성화 됩니다.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IMAGE_INLINE_SIZE_LIMIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12000")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"css-배경-이미지-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-배경-이미지-url"}},[s._v("#")]),s._v(" CSS 배경 이미지 URL")]),s._v(" "),a("p",[s._v("Webpack은 CSS에서 모든 상대 경로("),a("code",[s._v("./")]),s._v(")를 찾아 컴파일 된 번들의 경로로 변경합니다. 실수로 오타를 내거나, 중요한 파일을 삭제하면 존재하지 않는 JavaScript 모듈을 가져오려 시도하므로 컴파일 오류가 표시됩니다.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".logo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v('"../../assets/logo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("컴파일 된 번들의 최종 파일 이름은 콘텐츠 해시에서 Webpack에 의해 생성됩니다. 추후 파일 내용이 변경되면 Webpack은 프로덕션에서 다른 이름을 생성하므로 브라우저 캐싱에 대해 걱정할 필요는 없습니다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("이미지 수정이 거의 없다면 "),a("a",{attrs:{href:"./cra-public-directory"}},[s._v("정적 에셋")]),s._v("을 활용하는 것이 좋습니다.")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("CSS 에셋 위치 참조")]),s._v(" "),a("p",[s._v("디렉토리 구조 중첩도가 깊을 경우 상대 경로를 사용해 이미지를 찾아 사용하는 것은 매우 불편하죠. 이런 경우 다음과 같이 "),a("a",{attrs:{href:"https://github.com/facebook/create-react-app/issues/3582#issuecomment-353965421",target:"_blank",rel:"noopener noreferrer"}},[s._v("틸드(tilde, "),a("code",[s._v("~")]),s._v(") 기호를 사용해 에셋 디렉토리를 참조"),a("OutboundLink")],1),s._v("하는 방법을 활용할 수도 있습니다.")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".logo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v('"~assets/logo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("이 방법을 사용하려면 "),a("code",[s._v("jsconfig.json")]),s._v(" 파일을 작성한 후 "),a("code",[s._v("compileOption.baseUrl")]),s._v(" 값을 "),a("code",[s._v("src")]),s._v("로 설정해야 합니다.")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"svg-→-react-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg-→-react-컴포넌트"}},[s._v("#")]),s._v(" SVG → React 컴포넌트")]),s._v(" "),a("p",[s._v("SVG 파일을 가져와 사용하는 방법 중 하나는 SVG를 React 컴포넌트로 가져오는 것입니다.")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ReactComponent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Logo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../assets/logo.svg'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LogoLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("restProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token spread"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("restProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* SVG 파일을 Logo React 컴포넌트로 변경했으므로 다음과 같이 사용할 수 있습니다. */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Logo")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v('이 방법은 SVG를 별도의 파일로 로드하지 않고 React 컴포넌트로 활용할 때 유용합니다.\n나아가 SVG React 컴포넌트에 접근성(Accessibility)을 부여하는 것도 중요합니다! 컴포넌트에 title 속성을 전달하면 "접근 가능한 이름"을 제공할 수 있습니다.')]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("svg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("접근 가능한 이름 제공"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- ... --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("svg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("SVG 접근성")]),s._v(" "),a("p",[s._v("SVG 접근성에 관심이 많다면 "),a("a",{attrs:{href:"https://css-tricks.com/accessible-svgs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Accessible SVGs"),a("OutboundLink")],1),s._v(" 글을 참고하세요.")])])])}),[],!1,null,null,null);t.default=e.exports}}]);