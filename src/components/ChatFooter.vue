<template>
  <div class="chat-footer">
    <div class="footer-fader"></div>
    <div class="input-msg">Type message</div>
    <div class="send-msg">Send</div>
  </div>
</template>

<script>
export default {
  name: 'ChatFooter',
  data() {
    return {};
  }
};
</script>

<style>
.chat-footer {
  /* background-image: url('../assets/text-entry.png'); */
  background-color: white;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: calc(375px - 32px);
  position: absolute;
  bottom: 0;
  z-index: 3;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
.chat-footer .footer-fader {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
}
.chat-footer .input-msg {
  color: #ccc;
}
.chat-footer .send-msg {
  color: #0056ac;
  text-align: right;
}
</style>


