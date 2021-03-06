/**
 * @desc 表格组件
 * @param {Array} columns 列数据
 * @param {Array} data 表格数据
 * @param {Boolean} border 默认外边框
 * @param {Boolean} showHeader 默认显示表头
 * @param {Boolean} verticalLine 表格内竖直线verticalLine
 * @param {Boolean} stripe 斑马纹
 * @param {String} stripeColor 斑马纹颜色需设置stripe有效）
 * @param {Boolean} highlightRow 高亮行
 * @param {function} rowClick(row, column)
 * @param {Array} children 展开子行，对需展开的行增加children属性,箭头默认出现在第一列右侧
 * @param {String} arrowPosition 在columns中指定，展开子行时箭头出现的列
 * @param {Array} childcolumns 自定义展开子行的表头，默认为columns
 * @param {Boolean} expand 自定义展开内容：expand，同时对需展开的列，设置rowExpand
 * @param {String} fixed end/start 固定列：在表头array中需固定的列指定
 */

import xoTable from './table.vue';

xoTable.install = (Vue) => {
  Vue.component(xoTable.name, xoTable);
};

export default xoTable;
