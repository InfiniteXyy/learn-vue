<template>
  <div id="app">
    <h1>Talk with Elizabot</h1>
    <talk-room></talk-room>
  </div>
</template>

<script>
import TalkRoom from './TalkRoom.vue';
export default {
  name: 'app',
  components: {
    'talk-room': TalkRoom,
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transform: rotate(0deg);
}
</style>
