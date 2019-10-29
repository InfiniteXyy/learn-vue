(function() {
  window.list = {};
  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function(selector) {
    var el = document.querySelector(selector);
    list[selector] = el.parentElement.innerHTML;
    mount.call(this, selector);
  };
})();
