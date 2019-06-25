/*
Github：@Git-yangzai || Git-yangzai.github.io
B站：蠢萌的洋仔
 否原创：否
观看原视频请移步：https://www.bilibili.com/video/av51086565/
最后修改于：2019.06.25
主题：鼠标悬停展示说明文字

仅供学习交流用，已经洋仔调试通过。
洋仔头像为个人原创设计，请勿用于其他途径。
*/

/*鼠标悬停时提示内容*/
$(function () {
    $('[data-toggle~="tooltip"]').tooltip()/*[data-toggle~="tooltip"] 选择 data-toggle 属性包含单词 "tooltip" 的所有元素*/
})