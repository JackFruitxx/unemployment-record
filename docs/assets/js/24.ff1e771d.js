(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{305:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2023年10月18日"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2023年10月18日"}},[t._v("#")]),t._v(" 2023年10月18日")]),t._v(" "),s("h2",{attrs:{id:"_1-运动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-运动"}},[t._v("#")]),t._v(" 1. 运动")]),t._v(" "),s("p",[t._v("弹力绳到了，开始keep，今天下雨，就不跑步了")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("上肢训练-14分钟")])]),t._v(" "),s("li",[s("p",[t._v("瘦全身-11分钟？什么垃圾会员定制计划？我这么瘦了还让我瘦全身？")])])]),t._v(" "),s("h2",{attrs:{id:"_2-学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-学习"}},[t._v("#")]),t._v(" 2. 学习")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("学习如何快速入睡")])]),t._v(" "),s("li",[s("p",[t._v("学习如何睡一个两个小时的午觉")])]),t._v(" "),s("li",[s("p",[t._v("肉鸽游戏调研（玩土豆兄弟了）")])])]),t._v(" "),s("p",[t._v("今天没学习，摆一天，明天一定好好做人")]),t._v(" "),s("h2",{attrs:{id:"_3-每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-每日一题"}},[t._v("#")]),t._v(" 3. 每日一题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("2530. 执行 K 次操作后的最大分数\n")])])]),s("p",[t._v("https://leetcode.cn/problems/maximal-score-after-applying-k-operations/description/?envType=daily-question&envId=2023-10-18")]),t._v(" "),s("p",[t._v("前k个最大数的变型题目，每次处理最大值后，需要插入变化后的最大值。维护一个最大堆，去k次最大值，每次取完需要将变化后的最大值加入到堆中。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("maxKelements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MaxPriorityQueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dequeue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"datastructures-js-priority-queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datastructures-js-priority-queue"}},[t._v("#")]),t._v(" @datastructures-js/priority-queue")]),t._v(" "),s("p",[t._v("LeetCode内置了 "),s("code",[t._v("@datastructures-js/priority-queue")]),t._v(" 库， 因此可以直接使用"),s("code",[t._v("MaxPriorityQueue()")]),t._v("创建优先队列")]),t._v(" "),s("p",[t._v("https://mdnice.com/writing/9970e4124b384d359b6d2977f70f863b")]),t._v(" "),s("h2",{attrs:{id:"_4-其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他"}},[t._v("#")]),t._v(" 4. 其他")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("虽然没学习，但是去搞了卫生，明天一定好好做人")])]),t._v(" "),s("li",[s("p",[t._v("支出")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("早餐：0")])]),t._v(" "),s("li",[s("p",[t._v("午餐：煲仔华 19.8元")])]),t._v(" "),s("li",[s("p",[t._v("晚餐：买了今天晚餐、明天午餐、明天晚饭的菜，总 55.65 + 29.40")]),t._v(" "),s("ul",[s("li",[t._v("菜心： 5.39")]),t._v(" "),s("li",[t._v("省汤料包：6.69")]),t._v(" "),s("li",[t._v("姜：9.9")]),t._v(" "),s("li",[t._v("胡萝卜：2.28")]),t._v(" "),s("li",[t._v("花甲： 13.9")]),t._v(" "),s("li",[t._v("排骨：13.5")]),t._v(" "),s("li",[t._v("玉米：3.69")]),t._v(" "),s("li",[t._v("。。。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);