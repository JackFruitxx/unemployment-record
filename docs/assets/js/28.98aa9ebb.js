(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{307:function(t,a,e){"use strict";e.r(a);var n=e(14),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2023年10月24日"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2023年10月24日"}},[t._v("#")]),t._v(" 2023年10月24日")]),t._v(" "),a("h2",{attrs:{id:"_1-运动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-运动"}},[t._v("#")]),t._v(" 1. 运动")]),t._v(" "),a("p",[t._v("调整训练难度，现在练的太难了")]),t._v(" "),a("h2",{attrs:{id:"_2-学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-学习"}},[t._v("#")]),t._v(" 2. 学习")]),t._v(" "),a("ul",[a("li",[t._v("react入门")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-每日英语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-每日英语"}},[t._v("#")]),t._v(" 2.1 每日英语")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("A satellite that was carried to space aboard the shuttle Discover 20 years ago, is about to fall to Earth, but nobody knows where the debris will hit\n\n- satellite: 🛰\n\n- shuttle: 航天器\n\n- debris： 残骸、碎片\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\nIt's a lofty, probably impossible goal\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("New York swept the Tampa Bay Rays by identical 4-2 scores in a day-night doubleheader wednesday. \n\n- sweep: 完胜、横扫\n\n- identical: 完全一样的\n\n- doubleheader：双重赛\n\n\n- piercings: 耳钉\n\n\n\n## 3. 每日一题\n\n    1155. 掷骰子等于目标和的方法数\n\n\nhttps://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/\n\n- 动态规划 n组背包\n\n```javascript\n\nvar numRollsToTarget = function(n, k, target) {\n    const mod = 1e9 + 7;\n    f = new Array(target + 1).fill(0);\n    f[0] = 1;\n    for (let i = 1; i <= n; i++) {\n        for (let j = target; j >= 0; j--) {\n            f[j] = 0;\n            for (let x = 1; x <= k; x++) {\n                if (j - x >= 0) {\n                    f[j] = (f[j] + f[j - x]) % mod;\n                }\n            }\n        }\n    }\n    return f[target];\n};\n\n")])])]),a("h2",{attrs:{id:"_4-其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他"}},[t._v("#")]),t._v(" 4. 其他")]),t._v(" "),a("ol",[a("li",[t._v("学习")])]),t._v(" "),a("ul",[a("li",[t._v("3小时react")]),t._v(" "),a("li",[t._v("1小时每日一题")]),t._v(" "),a("li",[t._v("1小时英语")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("支出")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("早餐：0")])]),t._v(" "),a("li",[a("p",[t._v("午餐：22.19")])]),t._v(" "),a("li",[a("p",[t._v("晚餐：31.26 + 72.5（省汤+打外卖）")])]),t._v(" "),a("li",[a("p",[t._v("电脑：6264.74")])]),t._v(" "),a("li",[a("p",[t._v("vpn：129.6")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);