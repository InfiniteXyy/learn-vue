const App = Vue.extend({
  // language=vue
  template: `
    <div>
      <h1>{{ activeName }}</h1>
      <label v-for="i of ['first', 'second', 'third']">
        {{ i }}
        <input type="radio" v-model="activeName" :value="i">
      </label>
      <tabs v-model="activeName" @tab-click="handleClick" style="width: 500px; margin-top: 30px">
        <tab-pane label="Counter" name="first" closeable>
          <input-number v-model="value" :max="500" :min="0" :step="10"></input-number>
        </tab-pane>
        <tab-pane label="第二个标签" name="second">第二个标签</tab-pane>
        <tab-pane label="第三个标签" name="third" closeable>标签内容</tab-pane>
      </tabs>
    </div>
  
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
