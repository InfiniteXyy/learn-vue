Vue.component("tab-pane", {
  // language=Vue
  template: `
        <div v-show="show">
            <slot></slot>
        </div>
    `,
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: false
    };
  }
});

Vue.component("tabs", {
  // language=Vue
  template: `
        <div class="tabs">
            <div class="tabs-bar">
                <div v-for="nav of navList" :class="{'tabs-tab': true, 'active': nav.name === currentValue}"
                     @click="handleChange(nav.name)">
                    {{ nav.label }}
                </div>
            </div>
            <div class="tabs-container">
                <slot></slot>
            </div>
        </div>  `,
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    getTabs() {
      return this.$children.filter(item => item.$options.name === "tab-pane");
    },
    updateStatus() {
      const tabs = this.getTabs();
      tabs.forEach(tab => {
        tab.show = tab.name === this.currentValue;
      });
    },
    updateNav() {
      this.navList = this.getTabs().map(i => ({
        name: i.name,
        label: i.label
      }));
      this.updateStatus();
    },
    handleChange(name) {
      this.currentValue = name;
    }
  },
  data() {
    return {
      currentValue: this.value,
      navList: []
    };
  },
  watch: {
    currentValue(val) {
      this.updateNav();
    }
  },

  mounted() {
    console.log(this.getTabs());
    this.updateNav();
  }
});
