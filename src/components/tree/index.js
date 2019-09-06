/**
 * 树形控件
 * data: []
 * default-expand-node: 展开node的index，如[0,0,0]
 * default-highlight-node: 默认高亮行，需指定nodeKey
 * defaultAllExpand: Boolean，设置此值时，设置default-expand-node无效
 */

import xoTree from './tree.vue';

xoTree.install = function (Vue) {
  Vue.component(xoTree.name, xoTree);
};

export default xoTree;
