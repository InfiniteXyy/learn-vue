<template>
  <div :class="['message-container', { isBot }]">
    <p v-if="!isTyping">{{ content }}</p>
    <div class="loading-tip" v-else>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTyping: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      required: true,
    },
    isBot: {
      type: Boolean,
      required: true,
    },
  },
  name: 'Bubble',
};
</script>

<style scoped>
.message-container {
  align-self: flex-end;
  padding: 10px 16px;
  margin: 10px 0;
  border-radius: 20px;
  background-color: #ddffdd;
  border: 1px solid #eaeaea;
}

.message-container.isBot {
  align-self: flex-start;
  background-color: #0086b3;
  color: white;
  border: none;
}

.message-container > p {
  margin: 0;
}

.loading-tip {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 16px;
}
.loading-tip div {
  display: inline-block;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  background: #fff;
  opacity: 0.2;
  animation: loading-tip 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading-tip div:nth-child(1) {
  animation-delay: -0.24s;
}
.loading-tip div:nth-child(2) {
  animation-delay: -0.12s;
}
.loading-tip div:nth-child(3) {
  animation-delay: 0s;
}
@keyframes loading-tip {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
  }
}
</style>
