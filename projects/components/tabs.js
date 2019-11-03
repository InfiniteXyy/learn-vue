Vue.component("tab-pane", {
  // language=Vue
  template: `
    <transition name="fade">
      <div v-if="show">
        <slot></slot>
      </div>
    </transition>
    `,
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    closeable: {
      type: Boolean,
      default: false
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
                <div v-for="nav of navList" :class="{'tabs-tab': true, 'active': nav.name === currentValue}">
                  <div @click="handleChange(nav.name)">
                    {{ nav.label }}
                  </div>
                  <a v-if="nav.closeable">
                    x
                  </a>
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
        label: i.label,
        closeable: i.closeable
      }));
      this.updateStatus();
    },
    handleChange(name) {
      this.currentValue = name;
      this.$emit("input", name);
      this.$emit("on-change", name);
    },
    handleClose(name) {}
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
    },
    value(val) {
      this.currentValue = val;
    }
  },

  mounted() {
    this.updateNav();
  }
});
