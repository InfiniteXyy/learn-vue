Vue.component("input-number", {
  // language=vue
  template: `
    <div>
        <input
            type="number"
            :value="currentValue"
            @input="handleChange"
            @keydown.up.prevent="onIncrease"
            @keydown.down.prevent="onDecrease"
        >
        <button @click="onDecrease" :disabled="value <= min">-</button>
        <button @click="onIncrease" :disabled="value >= max">+</button>
    </div>
  `,
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    onIncrease() {
      this.currentValue += this.step;
    },
    onDecrease() {
      this.currentValue -= this.step;
    },
    updateValue(val) {
      val = Math.max(val, this.min);
      val = Math.min(val, this.max);
      this.currentValue = val;
    },
    handleChange(event) {
      if (isNaN(event.target.value)) {
        event.target.value = currentValue;
      } else {
        let val = Number(event.target.value);
        this.updateValue(val);
        event.target.value = this.currentValue;
      }
    }
  },
  watch: {
    currentValue(val) {
      this.$emit("input", val);
      this.$emit("on-change", val);
    },
    value(val) {
      this.updateValue(val);
    }
  },
  mounted() {
    this.updateValue(this.value);
  }
});
