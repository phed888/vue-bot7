<template>
  <div class="container">
    <transition name="pop-in">
      <WebView v-if="webViewVisible" v-on:close_webview="closeWebView()"/>
    </transition>
    <ChatHeaderAnon />
    <ChatFooter />
    <div v-for="(group, index) in chat" :key="index" class="message-list">
      <div class="full-height"></div>
        <MessageQR v-for="(message, index) in group" :key="index" :message="message" v-on:button_event="addChat($event)"/>
      <div class="scroll-target" id="scrollTarget">&nbsp;</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import message_list from '@/data/qr-msg';
import MessageQR from '@/components/MessageQR';
import ChatHeaderAnon from '@/components/ChatHeaderAnon';
import ChatFooter from '@/components/ChatFooter';
import WebView from '@/components/WebView';

export default {
  name: 'home',
  data() {
    return {
      groups: message_list,
      chat: {
        messages: []
      },
      webViewVisible: false
    };
  },
  components: {
    MessageQR,
    ChatHeaderAnon,
    ChatFooter,
    WebView
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
      if (name === 'View amenities') {
        this.webViewVisible = true;
      } else {
        setTimeout(self.addCustomerChat, 500, name);
        setTimeout(self.addMessage, 1000, self.groups.messages[action]);
      }
    },
    closeWebView() {
      this.webViewVisible = !this.webViewVisible;
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
.pop-in-enter-active,
.pop-in-leave-active {
  transition: all 0.3s ease-in-out;
}
.pop-in-enter,
.pop-in-leave-to {
  opacity: 0;
}
</style>

