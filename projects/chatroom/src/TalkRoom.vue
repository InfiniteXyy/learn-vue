<template>
  <div class="talkList">
    <bubble
      v-for="message of historyList"
      :key="message.id"
      :is-bot="message.isBot"
      :is-typing="message.isTyping"
      :content="message.content"
    >
    </bubble>
    <label>
      <input
        v-model="chatInput"
        @keydown.enter="respond"
        placeholder="type in your message in English"
      />
    </label>
  </div>
</template>

<script>
import * as ElizaBot from 'elizabot';
import Bubble from './components/Bubble.vue';
import { Message } from './models';
export default {
  name: 'TalkRoom',
  components: { Bubble },
  data() {
    return {
      eliza: null,
      chatInput: '',
      historyList: [],
    };
  },
  methods: {
    respond() {
      if (this.chatInput === '') return;
      const chatInput = this.chatInput;
      this.chatInput = '';

      this.historyList.push(new Message(chatInput));

      // 为体现真实性，延迟给出bot答复
      setTimeout(() => {
        const response = new Message(this.eliza.transform(chatInput))
          .setBot()
          .setTyping();
        this.historyList.push(response);
        setTimeout(
          () => (response.isTyping = false),
          Math.random() * 300 + 1200,
        ); // 1.2s ~ 1.5s 打字时间
      }, Math.random() * 200 + 300); // 0.3s ~ 0.5s 反应时间
    },
  },
  mounted() {
    this.eliza = new ElizaBot();
    const initial = this.eliza.getInitial();
    this.historyList.push(new Message(initial).setBot());
  },
};
</script>

<style scoped>
label {
  width: 100%;
}
input {
  width: 100%;
  border: none;
  border-bottom: 0.25rem solid #eaeaea;
  font-size: 20px;
  line-height: 40px;
  margin-bottom: 30px;
}
input:focus {
  outline: 0;
}

.talkList {
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
</style>
