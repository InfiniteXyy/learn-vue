<template>
  <div class="talkList">
    <p v-for="response of responseList" :class="{ isBot: response.isBot }">
      {{ response.data }}
    </p>
    <label>
      你的输入
      <input v-model="chatInput" @keydown.enter="respond" />
    </label>
  </div>
</template>

<script>
import * as ElizaBot from 'elizabot';
export default {
  name: 'TalkRoom',
  data() {
    return {
      eliza: null,
      chatInput: '',
      responseList: [],
    };
  },
  methods: {
    respond() {
      const response = this.eliza.transform(this.chatInput);
      this.responseList.push(
        {
          isBot: false,
          data: this.chatInput,
        },
        {
          isBot: true,
          data: response,
        },
      );
      this.chatInput = '';
    },
  },
  mounted() {
    this.eliza = new ElizaBot();
    const initial = this.eliza.getInitial();
    this.responseList.push({
      isBot: true,
      data: initial,
    });
  },
};
</script>

<style scoped>
input {
  border: none;
  border-bottom: 0.25rem solid #1a1a1a;
  font-size: 20px;
  margin-bottom: 30px;
}

.talkList {
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
.talkList > p {
  align-self: flex-end;
  padding: 10px 16px;
  border-radius: 20px;
  background-color: #ddffdd;
  border: 1px solid #eaeaea;
}

.talkList > p.isBot {
  align-self: flex-start;
  background-color: #0086b3;
  color: white;
  border: none;
}
</style>
