import Vue from "vue";
import SvgIcon from "@/components/svg/SvgIcon.vue";
// require.context
//参数：以svg为上下文，false表示/svg里不会有文件夹了，正则匹配
const req = require.context("./svg", false, /\.svg$/);
//['qq.svg','wx.svg']
req.keys().map(req);
