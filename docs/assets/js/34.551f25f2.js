(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{282:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"컴포넌트-접근성-개선-💰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-접근성-개선-💰"}},[t._v("#")]),t._v(" 컴포넌트 접근성 개선 💰")]),t._v(" "),a("p",[t._v("컴포넌트의 접근성 문제를 진단한 후, 접근성을 개선하는 방법을 실습합니다.")]),t._v(" "),a("h2",{attrs:{id:"키보드-접근성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#키보드-접근성"}},[t._v("#")]),t._v(" 키보드 접근성")]),t._v(" "),a("p",[t._v("컴포넌트의 키보드 접근성을 개선하기 위해 알아야 할 사전 React 프로그래밍 기술은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ko.reactjs.org/docs/refs-and-the-dom.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ref"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ko.reactjs.org/docs/react-api.html#reactforwardref",target:"_blank",rel:"noopener noreferrer"}},[t._v("forwardRef"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ko.reactjs.org/docs/react-component.html#componentdidmount",target:"_blank",rel:"noopener noreferrer"}},[t._v("componentDidMount"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate",target:"_blank",rel:"noopener noreferrer"}},[t._v("shouldComponentUpdate"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"dom-객체-참조"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-객체-참조"}},[t._v("#")]),t._v(" DOM 객체 참조")]),t._v(" "),a("p",[t._v("가상 DOM을 통해 실제 DOM을 업데이트 하는 React 앱의 특성상 실제 DOM 객체에 접근하여 조작하는 것은 부작용(Side Effect)을 유발할 수 있습니다.\n하지만 모든 것을 React에서 통제할 수 없으므로 필요한 경우 실제 DOM 요소에 접근/조작할 수 있어야 합니다. React에서 실제 DOM 객체에 접근하기 위해서는 "),a("code",[t._v("ref")]),t._v(" 속성을 사용해 실제 DOM이 그려진 문서 객체를 참조해야 합니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ref 속성 남용 주의!")]),t._v(" "),a("p",[t._v("다음의 경우를 제외하고는 "),a("code",[t._v("ref")]),t._v(" 속성을 남용하는 것은 권장되지 않습니다.\n가급적 상태 업데이트에 따라 렌더링 처리되는 React의 선언적 프로그래밍 방식으로 문제를 해결하는 것을 권장합니다.")]),t._v(" "),a("ul",[a("li",[t._v("포커스, 텍스트 선택 영역, 미디어 재생 관리")]),t._v(" "),a("li",[t._v("3rd Party 라이브러리 활용")]),t._v(" "),a("li",[t._v("애니메이션 직접 처리")])])]),t._v(" "),a("h2",{attrs:{id:"컴포넌트-참조-오류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-참조-오류"}},[t._v("#")]),t._v(" 컴포넌트 참조 오류")]),t._v(" "),a("p",[t._v("React 컴포넌트 참조에 실패할 경우, 다음과 같은 오류가 발생합니다.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("Warning: Function components cannot be given refs."),a("br"),t._v("\nAttempts to access this ref will fail. Did you mean to use React.forwardRef()?")])]),t._v(" "),a("p",[t._v("이 문제를 해결하기 위해서는 컴포넌트를 "),a("code",[t._v("React.forwardRef()")]),t._v("로 래핑한 후, "),a("code",[t._v("ref")]),t._v(" 참조를 설정해야 실제 DOM 객체를 참조해야 합니다.\n"),a("code",[t._v("React.fowardRef()")]),t._v("로 컴포넌트를 래핑하면 "),a("code",[t._v("props")]),t._v(" 속성에 이어 "),a("code",[t._v("ref")]),t._v(" 속성을 전달 받을 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 컴포넌트(ref 전달 받음)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 실제 DOM 요소 참조")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// React.forwardRef()로 컴포넌트 래핑")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forwardRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("디버깅 도구에서의 컴포넌트 이름 표시 방법")]),t._v(" "),a("p",[t._v("위의 방법이 아닌, 아래와 같은 방법으로 "),a("code",[t._v("React.forwardRef()")]),t._v("를 사용했다면?\n개발 도구에 표시되는 컴포넌트 이름이 "),a("code",[t._v("Anonymous")]),t._v("가 됩니다. 명확하지 않은 컴포넌트 이름은\n디버깅을 어렵게 하므로 "),a("code",[t._v("displayName")]),t._v(" 속성을 사용해 개발 도구에 표시 될 이름을 설정할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forwardRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'디버깅 도구에 표시할 컴포넌트 이름'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Component\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"키-이벤트-감지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#키-이벤트-감지"}},[t._v("#")]),t._v(" 키 이벤트 감지")]),t._v(" "),a("p",[t._v("내비게이션 메뉴의 키보드 제어에서 요구되는 키 이벤트 감지는 "),a("code",[t._v("tab")]),t._v(", "),a("code",[t._v("shift")]),t._v(" + "),a("code",[t._v("tab")]),t._v(" 그리고 "),a("code",[t._v("esc")]),t._v(" 키 입니다.\n각각의 키가 눌렸는지 감지하여, 감지된 "),a("code",[t._v("keyDown")]),t._v(" 이벤트를 처리하는 핸들러를 추가 설정해야 합니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("키")]),t._v(" "),a("th",[t._v("키코드")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Shift")]),t._v(" "),a("td",[a("code",[t._v("event.shiftKey")])])]),t._v(" "),a("tr",[a("td",[t._v("Tab")]),t._v(" "),a("td",[a("code",[t._v("event.keyCode === 9")])])]),t._v(" "),a("tr",[a("td",[t._v("Esc")]),t._v(" "),a("td",[a("code",[t._v("event.keyCode === 27")])])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://keycode.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("keycode.info"),a("OutboundLink")],1),t._v(" 서비스를 이용해 직접 누른 키코드 값을 확인할 수도 있습니다.")]),t._v(" "),a("iframe-wrapper",{attrs:{src:"https://keycode.info/"}}),t._v(" "),a("h2",{attrs:{id:"불-필요한-이벤트-연결-제거"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#불-필요한-이벤트-연결-제거"}},[t._v("#")]),t._v(" 불 필요한 이벤트 연결 제거")]),t._v(" "),a("p",[t._v("이벤트 연결이 더 이상 필요없어지면 성능 저하, 또는 의도치 않은 오류 발생 등의 문제를 막기 위해 연결된 이벤트를 제거해야 합니다.\n연결된 이벤트를 제거하기 위해서는 동일한 핸들러를 참조해야 함에 주의해야 합니다.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 연결")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keydown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 제거")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keydown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 동일한 핸들러 참조")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"성능을-고려한-라이프-사이클-훅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#성능을-고려한-라이프-사이클-훅"}},[t._v("#")]),t._v(" 성능을 고려한 라이프 사이클 훅")]),t._v(" "),a("p",[t._v("전달 속성인 "),a("code",[t._v("props")]),t._v(" 또는 컴포넌트 상태 "),a("code",[t._v("state")]),t._v("의 값 중 일부가 업데이트 됨을 감지하여\n조건을 분기하여 컴포넌트를 업데이트 할지, 말지 설정할 수 있습니다.\n"),a("code",[t._v("shouldComponentUpdate")]),t._v(" 라이프 사이클 훅의 기본 사용법은 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 특정 조건: 상태 변경 감지 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 연결")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트 제거")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 컴포넌트 렌더링은 처리")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("이 메서드는 오직 "),a("strong",[t._v("성능 최적화")]),t._v(" 만을 위한 것입니다.\n렌더링을 방지하는 목적으로 사용할 경우 버그로 이어질 수 있습니다.")])]),t._v(" "),a("h2",{attrs:{id:"영상-강의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의"}},[t._v("#")]),t._v(" 영상 강의")]),t._v(" "),a("h3",{attrs:{id:"키보드-접근성-설정-ref-forwardref-shouldcomponentupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#키보드-접근성-설정-ref-forwardref-shouldcomponentupdate"}},[t._v("#")]),t._v(" 키보드 접근성 설정 (ref, forwardRef, shouldComponentUpdate)")]),t._v(" "),a("wistia",{attrs:{source:"3wr8alovu8",color:"4A30E9"}}),t._v(" "),a("h3",{attrs:{id:"컴포넌트-참조-전달-forwardref-과-개발-도구에서-이름-표시-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-참조-전달-forwardref-과-개발-도구에서-이름-표시-설정"}},[t._v("#")]),t._v(" 컴포넌트 참조 전달(forwardRef)과 개발 도구에서 이름 표시 설정")]),t._v(" "),a("wistia",{attrs:{source:"unbhmopibs",color:"4A30E9"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);