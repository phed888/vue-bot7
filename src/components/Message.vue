<template>
  <div class="message" v-bind:class="{'customer': message.from == 'customer'}">
    <div class="message-time">{{ startTime() }}</div>
    <div class="brand-logo" v-if="message.brand"></div>
    <div v-for="(card, index) in message.cards" :key="index">
      <Card :card="card" v-on:button_event="addChat($event)"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'Message',
  props: ['message'],
  components: {
    Card
  },
  data() {
    return {};
  },
  methods: {
    addChat({ name, action }) {
      this.$emit('button_event', { name, action });
    },
    checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    },
    checkPM(j) {
      if (j > 12) {
        j = j - 12;
      }
      return j;
    },
    startTime() {
      var ampm = '';
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      if (h > 11) {
        ampm = 'PM';
      } else {
        ampm = 'AM';
      }
      // add a zero in front of numbers<10
      h = this.checkPM(h);
      m = this.checkTime(m);
      return h + ':' + m + ' ' + ampm;
    }
  }
};
</script>

<style>
.message {
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 46px;
  position: relative;
}
.message > div {
  display: flex;
}
.message.customer > div {
  justify-content: flex-end;
}
.message.customer .card {
  background-color: #0056ac;
  align-content: flex-end;
}
.message.customer .card .card-text {
  color: #ffffff;
}
.message.customer .message-time {
  text-align: right;
}
.message-time {
  font-size: 11px;
  color: '#5b5b5b';
  padding: 4px 0;
}
.brand-logo {
  position: absolute;
  background-image: url('../assets/logo-expedia.png');
  height: 32px;
  width: 32px;
  top: 18px;
  left: 0;
}
</style>


