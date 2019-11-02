const App = Vue.extend({
  // language=vue
  template: `
    <tabs v-model="activeName" @tab-click="handleClick">
        <tab-pane label="Counter" name="first">
            <input-number v-model="value" :max="500" :min="0" :step="10"></input-number>    
        </tab-pane>
        <tab-pane label="第二个标签" name="second">第二个标签</tab-pane>
        <tab-pane label="第三个标签" name="third">标签内容</tab-pane>
    </tabs>
  
  `,
  data() {
    return {
      value: 0,
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab;
    }
  }
});

new App().$mount("#app");
