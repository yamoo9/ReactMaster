(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{172:function(t,s,a){"use strict";a.r(s);a(98);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"고차-컴포넌트-hoc-💰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-컴포넌트-hoc-💰","aria-hidden":"true"}},[t._v("#")]),t._v(" 고차 컴포넌트(HOC) 💰")]),t._v(" "),a("p",[a("a",{attrs:{href:"#%EA%B3%A0%EC%B0%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8"}},[t._v("고차 컴포넌트("),a("abbr",{attrs:{title:"Higher-order Component"}},[t._v("HOC")]),t._v(")")]),t._v(" 개념은 "),a("a",{attrs:{href:"#%EA%B3%A0%EC%B0%A8-%ED%95%A8%EC%88%98"}},[t._v("고차 함수("),a("abbr",{attrs:{title:"Higher-order Function"}},[t._v("HOF")]),t._v(")")]),t._v("와 유사합니다.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("고차(高次)?")]),t._v(" "),a("p",[t._v("고차(Higher-order, 高次)의 의미는 '"),a("strong",[t._v("상위 차원(수준)")]),t._v("' 입니다. 사전적 의미는 '"),a("strong",[t._v("생각이나 행동 따위의 수준이나 정도가 높은 것")]),t._v("'을 말하며,\n수학에서는 '높은 차수(3차 이상)'를 뜻합니다. (예: "),a("a",{attrs:{href:"https://www.scienceall.com/%ea%b3%a0%ec%b0%a8%eb%b0%a9%ec%a0%95%ec%8b%9dequation-of-higher-degree/?term_slug=%ea%b3%bc%ed%95%99%eb%b0%b1%ea%b3%bc%ec%82%ac%ec%a0%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 방정식"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.scienceall.com/%EA%B3%A0%EC%B0%A8%EB%B6%80%EB%93%B1%EC%8B%9Dinequality-of-higher-degree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 부등식"),a("OutboundLink")],1),t._v(" 등)")])]),t._v(" "),a("h2",{attrs:{id:"고차-함수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-함수","aria-hidden":"true"}},[t._v("#")]),t._v(" 고차 함수")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%B0%A8_%ED%95%A8%EC%88%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("'고차 함수'"),a("OutboundLink")],1),t._v("의 조건은 다음과 같습니다. "),a("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("함수형 프로그래밍"),a("OutboundLink")],1),t._v("에서 함수는 값(value)으로 취급됩니다. 즉, 함수에 숫자, 문자 데이터를 전달하듯 함수 또한\n다른 함수에 값으로 전달할 수 있습니다. 마찬가지로 함수를 값으로 반환하는 것도 가능합니다. ('고계 함수'로도 불립니다.)")]),t._v(" "),a("ul",[a("li",[t._v("하나 이상의 "),a("strong",[t._v("함수를 인자로 전달 받는다")]),t._v(". ("),a("code",[t._v("(fn) => {}")]),t._v(")")]),t._v(" "),a("li",[a("strong",[t._v("함수를 결과로 반환 한다")]),t._v(". ("),a("code",[t._v("() => fn")]),t._v(")")])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("JavaScript의 고차 함수 코드 예시를 보면 f 일반 함수를, twice 고차 함수에 인자로 전달해 결과를 연산한 후,\n함수를 반환합니다.")]),t._v(" "),a("blockquote",[a("p",[t._v("함수 전달 → 연산 → 함수 반환")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 고차 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("twice")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 일반 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 고차 함수 실행")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("twice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 24 ← (6 + 9) + 9")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("React 프로그래밍(리스트 렌더링)에서 자주 사용되는 Array의 "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank",rel:"noopener noreferrer"}},[t._v("map()"),a("OutboundLink")],1),t._v(" 메서드는 '"),a("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D#%EA%B3%A0%EA%B3%84_%ED%95%A8%EC%88%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 함수"),a("OutboundLink")],1),t._v("'입니다.\n아래 예시 코드는 숫자 리스트를 전달 받아 숫자 리스트를 반환합니다.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" otherNumbers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("otherNumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [2, 4, 6]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"고차-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고차-컴포넌트","aria-hidden":"true"}},[t._v("#")]),t._v(" 고차 컴포넌트")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ko.reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("고차 컴포넌트"),a("OutboundLink")],1),t._v("는 컴포넌트 로직을 재사용 하기 위한 React 고급 프로그래밍 기술입니다.\n"),a("abbr",{attrs:{title:"Higher-order Component"}},[t._v("HOC")]),t._v('는 React API는 아니지만, React 프로그래밍에서 자주 활용됩니다. 고차 함수를 한마디로 정의하면\n"'),a("strong",[t._v("컴포넌트를 전달 받아 새로운 컴포넌트를 반환하는 함수")]),t._v('" 입니다.')]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EnhancedComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("higherOrderComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WrappedComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// higherOrderComponent ▶︎ 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WrappedComponent     ▶︎ 일반 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EnhancedComponent    ▶︎ 고차 컴포넌트가 반환한 향상된 컴포넌트")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("일반 컴포넌트가 UI(React 요소)를 반환하지만, 고차 컴포넌트는 컴포넌트를 반환합니다.\nHOC는 Redux "),a("router-link",{attrs:{to:"/lecture/rd-react-redux.html#connect"}},[t._v("connect")]),t._v(" 함수, React Router "),a("router-link",{attrs:{to:"/lecture/rr-connected-redux.html#connect-withrouter"}},[t._v("withRouter")]),t._v(" 함수, Relay "),a("a",{attrs:{href:"https://facebook.github.io/relay/docs/en/fragment-container.html#createfragmentcontainer",target:"_blank",rel:"noopener noreferrer"}},[t._v("createFragmentContainer"),a("OutboundLink")],1),t._v(" 함수 등 다양한 React 라이브러리에서 일반적으로 사용됩니다.")],1),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapStateProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapDispatchProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// withRouter ▶︎ 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connect ▶︎ 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Counter ▶︎ 일반 컴포넌트")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"사용자-정의-고차-컴포넌트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용자-정의-고차-컴포넌트","aria-hidden":"true"}},[t._v("#")]),t._v(" 사용자 정의 고차 컴포넌트")]),t._v(" "),a("p",[t._v("사용자가 직접 고차 컴포넌트(HOC) 또는 고차 컴포넌트를 래핑하는 함수를 만들어 사용할 수 있습니다. 간단한 예시를 살펴봅시다.")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("아래 예시는 실용적인 예제는 아닙니다. 어디까지나 실용적인 "),a("router-link",{attrs:{to:"/lecture/rd-react-redux.html#connect"}},[t._v("connect")]),t._v(", "),a("router-link",{attrs:{to:"/lecture/rr-connected-redux.html#connect-withrouter"}},[t._v("withRouter")]),t._v(" 사용 예를 이해하기 위함으로 작성되었습니다.")],1)]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 사용자 정의 HOC 모듈")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" withComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withComponentProps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./withComponent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 일반 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Hello "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 고차 컴포넌트")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - Hello 컴포넌트를 래핑하는 고차 컴포넌트 ➪ 컴포넌트 반환")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WrapHello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 고차 컴포넌트를 래핑하는 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 옵션(props) 객체 전달 함수 실행 ➪ Hello 컴포넌트를 래핑하는 고차 컴포넌트 ➪ 컴포넌트 반환")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WrapHelloProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withComponentProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 옵션(props) 설정 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'withComponent HOC를 래핑한 함수를 활용해 생성한 컴포넌트 입니다.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    styles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#06f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fontWeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fontSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.4rem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ← Hello 컴포넌트 전달")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h2",{attrs:{id:"라이브-코드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#라이브-코드","aria-hidden":"true"}},[t._v("#")]),t._v(" 라이브 코드")]),t._v(" "),a("p",[t._v("withComponent.js 파일에 작성된 코드를 살펴보세요.")]),t._v(" "),a("iframe-wrapper",{attrs:{src:"https://stackblitz.com/edit/react-y56yas?embed=1&file=index.js&hideNavigation=1&view=editor"}})],1)}),[],!1,null,null,null);s.default=e.exports},66:function(t,s,a){},98:function(t,s,a){"use strict";var n=a(66);a.n(n).a}}]);