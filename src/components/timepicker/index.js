/**
 * @desc 时间选择器
 * @param {Array} defaultTime 打开下拉框的默认时间，格式'HH-MM-ss'
 * @param {Boolean} clearable 清空
 * @param {Boolean} confirm 确认取消按钮
 * @param {String} maxTime '11:22:33'
 * @param {String} minTime '11:22:33'
 */

import xoTimePicker from './timepicker.vue';

xoTimePicker.install = (Vue) => {
  Vue.component(xoTimePicker.name, xoTimePicker);
};

export default xoTimePicker;
