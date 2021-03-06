/**
 * @desc 卡片
 * @param {String} shadow 卡片阴影
 * @param {Number} maxHeight 卡片content最大高度
 * @param {Function} visible-change 收起展开卡片事件
 * @param {String} align 卡片对齐方向 /left/right/center
 * @param {String} hiddenText 隐藏栏的提示文字
 */

import xoCard from './card.vue';

xoCard.install = (Vue) => {
  Vue.component(xoCard.name, xoCard);
};

export default xoCard;
