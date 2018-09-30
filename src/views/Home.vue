<template>
  <div class="container">
    <div v-for="(group, index) in chat" :key="index" class="message-list">
      <Message v-for="(message, index) in group" :key="index" :message="message" v-on:button_event="addChat($event)"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /srcn
import message_list from '@/data/msg';
import Message from '@/components/Message';

export default {
  name: 'home',
  data() {
    return {
      groups: message_list,
      chat: {
        messages: []
      },
      customer_msg: [
        {
          attached: false,
          from: 'customer',
          brand: '',
          visibility: true,
          cards: [
            {
              image: false,
              text:
                'Hi, I’m the Expedia bot. I can help you cancel or reconfirm your upcoming booking.',
              buttons: []
            }
          ]
        }
      ]
    };
  },
  components: {
    Message
  },
  methods: {
    addMessage(msg) {
      const self = this;
      self.chat.messages.push(msg);
    },
    startChat(x) {
      const self = this;
      setTimeout(self.addMessage, 1000, self.groups.messages[x]);
    },
    addCustomerChat(name) {
      const self = this;
      var custResp = {
        attached: false,
        from: 'customer',
        brand: '',
        visibility: true,
        cards: [
          {
            image: false,
            text: name,
            buttons: []
          }
        ]
      };
      self.chat.messages.push(custResp);
    },
    addChat({ name, action }) {
      const self = this;
      setTimeout(self.addCustomerChat, 500, name);
      setTimeout(self.addMessage, 1000, self.groups.messages[action]);
    }
  },
  mounted() {
    this.startChat(0);
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

