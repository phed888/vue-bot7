<template>
  <div class="container">
    <div v-for="(group, index) in groups" :key="index" class="message-list">
      <Message :message="message"  v-for="(message, index) in group" :key="index" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import msg from '@/data/msg';
import Message from '@/components/Message';

export default {
  name: 'home',
  data() {
    return {
      groups: msg
    };
  },
  components: {
    Message
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}
.container {
  background-color: white;
  margin: 0 auto;
  width: 375px;
}
.message-list {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 6px 20px;
}
</style>

