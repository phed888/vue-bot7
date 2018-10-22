<template>
  <div class="container">
    <ChatHeaderAnon />
    <ChatFooter />
    <div v-for="(group, index) in chat" :key="index" class="message-list">
      <div class="full-height"></div>
      <transition-group>
        <Message v-for="(message, index) in group" :key="index" :message="message" v-on:button_event="addChat($event)"/>
      </transition-group>
      <div class="scroll-target" id="scrollTarget">&nbsp;</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import message_list from '@/data/msg';
import Message from '@/components/Message';
import ChatHeaderAnon from '@/components/ChatHeaderAnon';
import ChatFooter from '@/components/ChatFooter';

export default {
  name: 'home',
  data() {
    return {
      groups: message_list,
      chat: {
        messages: []
      }
    };
  },
  components: {
    Message,
    ChatHeaderAnon,
    ChatFooter
  },
  methods: {
    scrollToBottom() {
      document
        .getElementById('scrollTarget')
        .scrollIntoView({ behavior: 'smooth' });
    },
    addMessage(msg) {
      const self = this;
      self.chat.messages.push(msg);
    },
    startChat(x) {
      const self = this;
      setTimeout(self.addMessage, 2000, self.groups.messages[x]);
      setTimeout(self.scrollToBottom, 2000);
    },
    addCustomerChat(name) {
      const self = this;
      var custResp = {
        from: 'customer',
        cardGroups: [
          [
            {
              image: false,
              text: name,
              buttons: []
            }
          ]
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
    this.$nextTick(this.startChat(0));
  },
  updated() {
    this.$nextTick(this.scrollToBottom());
  }
};
</script>

<style>
/* body {
  background-color: #444;
  margin: 0;
  padding: 50px 0 0;
}
.container {
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
  margin: 0 auto;
  padding-top: 58px;
  width: 375px;
  height: 590px;
  position: relative;
}
.full-height {
  height: 400px;
}
.message-list {
  overflow: auto;
  padding: 0 0 0 6px;
  margin-bottom: 77px;
} */
</style>

