import Vue from 'vue';

class Bus {
  constructor() {
    this.callbacks = {};
  }
  // 监听
  $on(name, fn) {
    this.callbakcs[name] = this.callbacks[name] || [];
    this.callbacks[name].push(fn);
  }
  // 触发
  $emit(name, args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(cb => cb(args));
    }
  }
}

// Vue.prototype.$bus = new Bus();
// Vue本身有$on和$emit的机制
Vue.prototype.$bus = new Vue();