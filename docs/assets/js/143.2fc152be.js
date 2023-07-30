(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{391:function(s,a,t){"use strict";t.r(a);var n=t(12),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"컴포넌트-props-디자인-💰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-props-디자인-💰"}},[s._v("#")]),s._v(" 컴포넌트 props 디자인 💰")]),s._v(" "),t("p",[s._v("컴포넌트 "),t("code",[s._v("props")]),s._v(" 디자인을 실습하며 "),t("code",[s._v("props")]),s._v(" 패턴에 대해 학습합니다.")]),s._v(" "),t("h2",{attrs:{id:"props-설계"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props-설계"}},[s._v("#")]),s._v(" props 설계")]),s._v(" "),t("p",[s._v("AppHomeLink 컴포넌트가 전달 받을 속성을 설계합니다.")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"props"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"href"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"홈 링크 컴포넌트가 포함하는 앵커 요소의 href 속성 값"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"홈 링크 컴포넌트가 포함하는 앵커 요소의 title 속성 값"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"external"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"홈 링크 컴포넌트 연결이 새 창(탭) 열림일 경우 포함하는 앵커 요소의 target, rel 속성 설정"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"children"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(' "컴포넌트 요소가 포함하는 자식 React 요소(들)\n'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"props-전개"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props-전개"}},[s._v("#")]),s._v(" props 전개")]),s._v(" "),t("p",[s._v("컴포넌트로 전달된 "),t("code",[s._v("props")]),s._v(" 객체를 전개(spread) 하여 컴포넌트의 내부의 구조(Markup)에 모두 추가 설정할 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token spread"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("다만, "),t("code",[s._v("props")]),s._v(" 객체의 속성을 전개하였을 때 사용된 "),t("code",[s._v("external")]),s._v("과 같은 "),t("strong",[s._v("비 표준 속성은 오류를 발생")]),s._v("시킵니다.")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[s._v("Warning: Received `true` for a non-boolean attribute `external`."),t("br"),s._v('\nIf you want to write it ti the DOM, pass a string instead: external="true" or external={value.toString()}.')])]),s._v(" "),t("p",[s._v("오류 메시지에서 해결책을 안내하고 있지만, 안내 방법대로 해도 해결이 안되는 경우가 있습니다.\n이런 경우 컴포넌트로 전달된 "),t("code",[s._v("props")]),s._v("에서 비 표준 속성을 걸러내어 문제를 해결 할 수 있습니다.\n(<a> DOM Node에 설정되는 속성이므로 "),t("code",[s._v("aNodeProps")]),s._v("라는 이름을 사용했습니다)")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 구조 분해 할당 + 나머지 연산")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" external"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("aNodeProps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 전개 연산")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token spread"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("aNodeProps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n  ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"props-검사"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props-검사"}},[s._v("#")]),s._v(" props 검사")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/lecture/r-pay-propTypes.html#react-속성-타입-검사"}},[s._v("PropTypes")]),s._v("를 사용하여 컴포넌트에 전달된 "),t("code",[s._v("props")]),s._v("를 검사하도록 설정합니다.")],1),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PropTypes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prop-types'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"classname-병합"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classname-병합"}},[s._v("#")]),s._v(" className 병합")]),s._v(" "),t("p",[t("code",[s._v("props")]),s._v(" 전개 코드의 순서에 따라 기존 속성을 덮어쓰거나, 전달된 속성이 덮어써지는 문제가 발생합니다.\n예를 들어 "),t("code",[s._v("className")]),s._v(" 속성처럼 기존 속성 값에 전달된 속성 값이 병합되어 사용되어야 하는 경우 문제가 됩니다.\n이러한 문제를 해결하려면? 컴포넌트 내부에서 조건 처리 하거나, "),t("RouterLink",{attrs:{to:"/lecture/r-pay-tip.html#classnames-활용"}},[s._v("classnames 라이브러리")]),s._v("를 활용할 수 있습니다.")],1),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" classNames "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 'classnames"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" external"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" className"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("aNodeProps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" combineClassNames "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("classNames")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'originalClassName'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" className"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"as-속성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#as-속성"}},[s._v("#")]),s._v(" as 속성")]),s._v(" "),t("p",[s._v("컴포넌트 내부의 DOM 노드 중 특정 노드를 외부에서 변경할 수 있도록 처리하는데 사용되는 속성입니다. ("),t("code",[s._v("tag")]),s._v("라는 이름으로도 사용 됨)")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("domProps "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token spread"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("domProps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("영상 강의에서 다룬 AppHomeLink 컴포넌트의 설계된 최종 "),t("code",[s._v("props")]),s._v("는 다음과 같습니다. (영상 강의와 이름이 다소 다름)")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"props"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"href"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"홈 링크 컴포넌트가 포함하는 앵커 DOM 노드의 href 속성 값"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"홈 링크 컴포넌트가 포함하는 앵커 DOM 노드의 title 속성 값"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"className"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"앵커 DOM 노드의 class 값에 병합 할 클래스 이름"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"external"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"홈 링크 컴포넌트 연결이 새 창(탭) 열림일 경우 포함하는 앵커 DOM 노드의 target, rel 속성 설정"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"children"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"컴포넌트 요소가 포함하는 자식 React 요소(들)"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("...aNodeProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"wrapperProps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"as"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"래퍼 DOM 노드의 태그 이름"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"className"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"래퍼 DOM 노드의 class 값에 병합 할 클래스 이름"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("...wrapperNodeProps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"props-기본-값"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#props-기본-값"}},[s._v("#")]),s._v(" props 기본 값")]),s._v(" "),t("p",[s._v("필요한 경우 컴포넌트의 전달 속성인 "),t("code",[s._v("props")]),s._v(" 객체의 속성 중 일부에 기본 값을 설정할 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultProps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  prop1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'efaltValue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"영상-강의"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의"}},[s._v("#")]),s._v(" 영상 강의")]),s._v(" "),t("h3",{attrs:{id:"컴포넌트-props-설계-apphomelink-컴포넌트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-props-설계-apphomelink-컴포넌트"}},[s._v("#")]),s._v(" 컴포넌트 props 설계 (AppHomeLink 컴포넌트)")]),s._v(" "),t("wistia",{attrs:{source:"afbssgi9hn",color:"4A30E9"}}),s._v(" "),t("h3",{attrs:{id:"컴포넌트-props-설계-classnames-라이브러리-as-속성-등"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#컴포넌트-props-설계-classnames-라이브러리-as-속성-등"}},[s._v("#")]),s._v(" 컴포넌트 props 설계 (classnames 라이브러리, as 속성 등)")]),s._v(" "),t("wistia",{attrs:{source:"3td26ar7ql",color:"4A30E9"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);