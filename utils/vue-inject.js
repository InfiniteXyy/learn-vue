(function() {
  window.list = {};
  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function(selector) {
    var el = document.querySelector(selector);
    if (el) list[selector] = el.parentElement.innerHTML;
    mount.call(this, selector);
  };
})();
