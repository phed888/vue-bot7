<template>
  <div class="message-list">
    <Message :message="message" v-on:button_event="addChat($event)"/>
  </div>
</template>

<script>
import Message from '@/components/Message';

export default {
  name: 'MessageList',
  components: { Message },
  data() {
    return {};
  },
  methods: {
    addChat({ name, action }) {
      this.$emit('button_event', { name, action });
    }
  },
  props: ['message']
};
</script>

<style>
.message-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.message-list .message.customer {
  justify-content: flex-end;
}
</style>

