<template>
  <div class="container">
    <div v-for="(group, index) in chat" :key="index" class="message-list">
      <transition-group name="slide-fade">
        <Message v-for="(message, index) in group" :key="index" :message="message" v-on:button_event="addChat($event)" class="slide-fade-item"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import message_list from '@/data/msg';
import Message from '@/components/Message';

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
  height: 667px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 6px 20px;
}
.slide-fade-enter-active {
  /* transition: all 0.3s ease; */
  animation: slide-in 0.3s ease;
}
.slide-fade-leave-active {
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
  animation: slide-in 0.3s ease reverse;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scaleY(0);
  opacity: 0;
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  50% {
    opacity: 0;
    transform: scaleY(1);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>

