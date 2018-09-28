<template>
  <div class="message-list">
    {{ message.title }}
    <Message :message="message" />
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
  props: ['message']
};
</script>
