import Vue from "vue";

Vue.prototype.$dispatch = function(eventName, data) {
  // 向上传递，一直不停的获取$parent
  let parent = this.$parent;
  while (parent) {
    parent.$emit(eventName, data);
    parent = parent.$parent;
  }
}

Vue.prototype.$boardcast = function(eventName, data) {
  // 递归通知所有的子元素
  boardcast.call(this, eventName, data);
}

function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 每一个字组件
    child.$emit(eventName, data);
    if (child.$children.length) {
      boardcast.call(child, eventName, data);
    }
  })
}